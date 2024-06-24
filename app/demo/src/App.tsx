import { useBreakpoint } from '@react-responsive/breakpoint';

function App() {
	const { smallMobile, mobile, tablet, desktop, largeDesktop } =
		useBreakpoint();

	return (
		<>
			<h1>React responsive hooks: Breakpoints</h1>

			{smallMobile && <h1>Small mobile</h1>}

			{tablet && <h1>Tablet</h1>}

			{desktop && <h1>Desktop</h1>}

			{largeDesktop && <h1>Large desktop</h1>}

			{mobile && <h1>Mobile</h1>}
		</>
	);
}

export default App;
