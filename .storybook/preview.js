import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		viewport: {
			viewports: {
				...INITIAL_VIEWPORTS,
				...MINIMAL_VIEWPORTS,
			}, // newViewports would be an ViewportMap. (see below for examples)
			defaultViewport: 'responsive',
		},
	},
};

export default preview;
