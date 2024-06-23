import React, { useEffect } from 'react';

// #region constants

const DEFAULT_VIEWPORT_LIMITS = {
	smallMobile: 320,
	mobile: 480,
	tablet: 768,
	desktop: 1024,
	largeDesktop: 1280,
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

export type BreakpointValidity =
	| {
			[K in keyof BreakpointLimits]: boolean;
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  }
	| null;

export type ComponentProps = {
	children: React.ReactNode;
} & Omit<
	BreakpointLimits,
	'smallMobile' | 'mobile' | 'tablet' | 'desktop' | 'largeDesktop'
>;

// #endregion

// #region Context & Providers

const breakpointContext = React.createContext<BreakpointValidity>(null);

function compileBreakpointValidity(
	viewportLimits: BreakpointLimits = DEFAULT_VIEWPORT_LIMITS
) {
	const width = window.innerWidth;

	const viewportValidity: BreakpointValidity = {
		smallMobile: width < viewportLimits.smallMobile,
		mobile: width >= viewportLimits.mobile && width < viewportLimits.tablet,
		tablet:
			width >= viewportLimits.tablet && width < viewportLimits.desktop,
		desktop:
			width >= viewportLimits.desktop &&
			width < viewportLimits.largeDesktop,
		largeDesktop: width >= viewportLimits.largeDesktop,
	};

	return viewportValidity;
}

function BreakpointProvider(props: ComponentProps) {
	const { children, ...limits } = props;

	const normalizedLimits = Object.assign(DEFAULT_VIEWPORT_LIMITS, limits);

	const [viewport, setBreakpoint] = React.useState<BreakpointValidity>({
		smallMobile: false,
		mobile: false,
		tablet: false,
		desktop: false,
		largeDesktop: false,
	});

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
