import React, { useEffect, useState } from 'react';

const DEFAULT_VIEWPORT_LIMITS = {
	smallMobile: 320,
	mobile: 480,
	tablet: 768,
	desktop: 1024,
	largeDesktop: 1280,
};

type viewportLimits = {
	smallMobile: number;
	mobile: number;
	tablet: number;
	desktop: number;
	largeDesktop: number;
};

type viewportValidity =
	| {
			[K in keyof viewportLimits]: boolean;
	  }
	| null;

type componentProps = {
	children: React.ReactNode;
} & Omit<
	viewportLimits,
	'smallMobile' | 'mobile' | 'tablet' | 'desktop' | 'largeDesktop'
>;

const viewportContext = React.createContext<viewportValidity>(null);

function useViewport() {
	const context = React.useContext(viewportContext);
	if (!context) {
		throw new Error('useViewport must be used within a ViewportProvider');
	}
	return context;
}

function compileViewportValidity(
	viewportLimits: viewportLimits = DEFAULT_VIEWPORT_LIMITS
) {
	const width = window.innerWidth;

	const viewportValidity: viewportValidity = {
		smallMobile: width >= viewportLimits.smallMobile,
		mobile: width >= viewportLimits.mobile,
		tablet: width >= viewportLimits.tablet,
		desktop: width >= viewportLimits.desktop,
		largeDesktop: width >= viewportLimits.largeDesktop,
	};

	return viewportValidity;
}

export const ViewportProvider = (...props: props){ => {
	const [viewport, setViewport] = React.useState<viewportValidity>({
		smallMobile: false,
		mobile: false,
		tablet: false,
		desktop: false,
		largeDesktop: false,
	});

	const [viewportLimits, setViewportLimits] = useState(
		Object.assign(props, DEFAULT_VIEWPORT_LIMITS)
	);

	useEffect(() => {
		const handleWindowResize = () => {};
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return (
		<viewportContext.Provider value={viewport}>
			{children}
		</viewportContext.Provider>
	);
};
