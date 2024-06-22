import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ResponsiveHooks } from '../../src/index.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ResponsiveHooks.Provider>
			<App />
		</ResponsiveHooks.Provider>
	</React.StrictMode>
);
