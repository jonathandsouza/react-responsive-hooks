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

// #region context & providers

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
			width >= viewportLimits.smallMobile &&
			width < viewportLimits.mobile,

		isTablet:
			width >= viewportLimits.mobile && width < viewportLimits.tablet,

		isDesktop:
			width >= viewportLimits.tablet && width < viewportLimits.desktop,

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

// #region components

function InViewport(props: {
	size: keyof BreakpointValidity;
	children: React.ReactNode;
}) {
	const viewport = useBreakpoint();

	if (viewport[props.size]) {
		return <>{props.children}</>;
	}

	return null;
}

function SmallMobile(props: { children: React.ReactNode }) {
	return <InViewport size="isSmallMobile">{props.children}</InViewport>;
}

function Mobile(props: { children: React.ReactNode }) {
	return <InViewport size="isMobile">{props.children}</InViewport>;
}

function Tablet(props: { children: React.ReactNode }) {
	return <InViewport size="isTablet">{props.children}</InViewport>;
}

function Desktop(props: { children: React.ReactNode }) {
	return <InViewport size="isDesktop">{props.children}</InViewport>;
}

function LargeDesktop(props: { children: React.ReactNode }) {
	return <InViewport size="isLargeDesktop">{props.children}</InViewport>;
}

function ExtraLargeDesktop(props: { children: React.ReactNode }) {
	return <InViewport size="isExtraLargeDesktop">{props.children}</InViewport>;
}

function Test() {
	return (
		<Breakpoint.Provider>
			<Breakpoint.SmallMobile>
				<div>SmallMobile</div>
			</Breakpoint.SmallMobile>
			<Breakpoint.Mobile>
				<div>Mobile</div>
			</Breakpoint.Mobile>
			<Breakpoint.Tablet>
				<div>Tablet</div>
			</Breakpoint.Tablet>
			<Breakpoint.Desktop>
				<div>Desktop</div>
			</Breakpoint.Desktop>
			<Breakpoint.LargeDesktop>
				<div>LargeDesktop</div>
			</Breakpoint.LargeDesktop>
			<Breakpoint.ExtraLargeDesktop>
				<div>ExtraLargeDesktop</div>
			</Breakpoint.ExtraLargeDesktop>
		</Breakpoint.Provider>
	);
}

// #endregion

// #region exports

export const Breakpoint = {
	Provider: BreakpointProvider,
	SmallMobile,
	Mobile,
	Tablet,
	Desktop,
	LargeDesktop,
	ExtraLargeDesktop,
	useBreakpoint,
	Test,
};

export { useBreakpoint };

// #endregion
