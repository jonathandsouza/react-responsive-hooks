import React, { useEffect, useState } from 'react';

// #region types
const DEFAULT_VIEWPORT_LIMITS = {
	smallMobile: 320,
	mobile: 480,
	tablet: 768,
	desktop: 1024,
	largeDesktop: 1280,
};

type ViewportLimits = {
	smallMobile: number;
	mobile: number;
	tablet: number;
	desktop: number;
	largeDesktop: number;
};

type ViewportValidity =
	| {
			[K in keyof ViewportLimits]: boolean;
	  }
	| null;

type ComponentProps = {
	children: React.ReactNode;
} & Omit<
	ViewportLimits,
	'smallMobile' | 'mobile' | 'tablet' | 'desktop' | 'largeDesktop'
>;

// #endregion

// #region Context & Providers

const viewportContext = React.createContext<ViewportValidity>(null);

function compileViewportValidity(
	viewportLimits: ViewportLimits = DEFAULT_VIEWPORT_LIMITS
) {
	const width = window.innerWidth;

	const viewportValidity: ViewportValidity = {
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

export function ViewportProvider(props: ComponentProps) {
	const { children, ...limits } = props;

	const normalizedLimits = Object.assign(DEFAULT_VIEWPORT_LIMITS, limits);

	const [viewport, setViewport] = React.useState<ViewportValidity>({
		smallMobile: false,
		mobile: false,
		tablet: false,
		desktop: false,
		largeDesktop: false,
	});

	const [viewportLimits] = useState();

	useEffect(() => {
		const handleWindowResize = () => {
			setViewport(compileViewportValidity(normalizedLimits));
		};

		window.addEventListener('resize', handleWindowResize);
		handleWindowResize();

		return () => window.removeEventListener('resize', handleWindowResize);
	}, [
		normalizedLimits.smallMobile,
		normalizedLimits.mobile,
		normalizedLimits.tablet,
		normalizedLimits.desktop,
		normalizedLimits.largeDesktop,
	]);

	return (
		<viewportContext.Provider value={viewport}>
			{children}
		</viewportContext.Provider>
	);
}
// #endregion

// #region hooks

function useViewport() {
	const context = React.useContext(viewportContext);
	if (!context) {
		throw new Error('useViewport must be used within a ViewportProvider');
	}
	return context;
}

// #endregion
