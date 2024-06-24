import { useBreakpoint } from '@react-responsive/breakpoint';

function App() {
	const {
		isDesktop,
		isExtraLargeDesktop,
		isLargeDesktop,
		isMobile,
		isSmallMobile,
		isTablet,
	} = useBreakpoint();

	return (
		<>
			<h1>React responsive hooks: Breakpoints</h1>

			{isSmallMobile && <h1>Small mobile</h1>}

			{isMobile && <h1>Mobile</h1>}

			{isTablet && <h1>Tablet</h1>}

			{isDesktop && <h1>Desktop</h1>}

			{isLargeDesktop && <h1>Large desktop</h1>}

			{isExtraLargeDesktop && <h1>Large desktop</h1>}
		</>
	);
}

export default App;
