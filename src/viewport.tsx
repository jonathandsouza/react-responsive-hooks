import React, { useEffect } from 'react';

type viewportLimits = {
	smallMobile: number;
	mobile: number;
	tablet: number;
	desktop: number;
	largeDesktop: number;
} | null;

type viewportValidity = {
	[K in keyof viewportLimits]: boolean;
};

type props = {
	children: React.ReactNode;
} & viewportLimits;

const viewportContext = React.createContext<viewportLimits>(null);

const ViewportProvider = ({ children }: props) => {
	const [width, setWidth] = React.useState<viewportValidity>({
		smallMobile: false,
		mobile: false,
		tablet: false,
		desktop: false,
		largeDesktop: false,
	});

	useEffect(() => {
		const handleWindowResize = () => {};

		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return (
		<viewportContext.Provider value={{ width, height }}>
			{children}
		</viewportContext.Provider>
	);
};
