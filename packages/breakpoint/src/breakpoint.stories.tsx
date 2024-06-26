import { Breakpoint, DEFAULT_VIEWPORT_LIMITS } from './breakpoint';
import { BreakpointLimits } from '../dist';

function Test(props: Partial<BreakpointLimits>) {
	return (
		<Breakpoint.Provider {...props}>
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

export default {
	title: 'Breakpoint/InView',

	component: Test,

	parameters: {
		layout: 'centered',
	},

	argTypes: {
		smallMobile: { control: 'number' },
		mobile: { control: 'number' },
		tablet: { control: 'number' },
		desktop: { control: 'number' },
		largeDesktop: { control: 'number' },
	},
};

export const Primary = {
	args: {
		...DEFAULT_VIEWPORT_LIMITS,
	},
};
