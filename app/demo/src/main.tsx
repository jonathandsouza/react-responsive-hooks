import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Breakpoint } from '@react-responsive/breakpoint';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Breakpoint.Provider>
			<App />
		</Breakpoint.Provider>
	</React.StrictMode>
);
