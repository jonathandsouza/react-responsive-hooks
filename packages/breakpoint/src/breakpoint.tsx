import React, { useEffect } from 'react';

// #region constants

const DEFAULT_VIEWPORT_LIMITS = {
	smallMobile: 480,
	mobile: 768,
	tablet: 992,
	desktop: 1200,
	largeDesktop: 1600,
};

const DEFAULT_VIEWPORT_VALIDITY = {
	isSmallMobile: false,
	isMobile: false,
	isTablet: false,
	isDesktop: false,
	isLargeDesktop: false,
	isExtraLargeDesktop: false,
};

// #endregion

// #region types

export type BreakpointLimits = {
	smallMobile: number;
	mobile: number;
	tablet: number;
	desktop: number;
	largeDesktop: number;
};

export type BreakpointValidity = {
	isSmallMobile: boolean;
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;
	isLargeDesktop: boolean;
	isExtraLargeDesktop: boolean;
};

export type ComponentProps = {
	children: React.ReactNode;
} & Omit<
	BreakpointLimits,
	'smallMobile' | 'mobile' | 'tablet' | 'desktop' | 'largeDesktop'
>;

// #endregion

// #region Context & Providers

const breakpointContext = React.createContext<BreakpointValidity>(
	DEFAULT_VIEWPORT_VALIDITY
);

function compileBreakpointValidity(
	viewportLimits: BreakpointLimits = DEFAULT_VIEWPORT_LIMITS
) {
	const width = window.innerWidth;

	const viewportValidity: BreakpointValidity = {
		isSmallMobile: width < viewportLimits.smallMobile,
		isMobile:
			width >= viewportLimits.mobile && width < viewportLimits.tablet,
		isTablet:
			width >= viewportLimits.tablet && width < viewportLimits.desktop,
		isDesktop:
			width >= viewportLimits.desktop &&
			width < viewportLimits.largeDesktop,
		isLargeDesktop:
			width >= viewportLimits.desktop &&
			width < viewportLimits.largeDesktop,
		isExtraLargeDesktop: width >= viewportLimits.largeDesktop,
	};

	return viewportValidity;
}

function BreakpointProvider(props: ComponentProps) {
	const { children, ...limits } = props;

	const normalizedLimits = Object.assign(DEFAULT_VIEWPORT_LIMITS, limits);

	const [viewport, setBreakpoint] = React.useState<BreakpointValidity>(
		DEFAULT_VIEWPORT_VALIDITY
	);

	useEffect(() => {
		const handleWindowResize = () => {
			setBreakpoint(compileBreakpointValidity(normalizedLimits));
		};

		window.addEventListener('resize', handleWindowResize);
		handleWindowResize();

		return () => window.removeEventListener('resize', handleWindowResize);
	}, [normalizedLimits]);

	return (
		<breakpointContext.Provider value={viewport}>
			{children}
		</breakpointContext.Provider>
	);
}
// #endregion

// #region hooks

function useBreakpoint() {
	const context = React.useContext(breakpointContext);
	if (!context) {
		throw new Error('useBreakpoint must be used within a ViewportProvider');
	}
	return context;
}

// #endregion

// #region exports

export const Breakpoint = {
	Provider: BreakpointProvider,
	useBreakpoint,
};

export { useBreakpoint };

// #endregion
