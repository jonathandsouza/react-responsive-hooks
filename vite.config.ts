import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.tsx'),
			name: 'ReactResponsiveHooks',
			fileName: (format) => `react-responsive-hooks.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom'], // Add 'react' as external
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
});
