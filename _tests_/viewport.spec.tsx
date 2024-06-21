import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyComponent from '../src/index';

test('renders hello world', () => {
	render(<MyComponent />);
	expect(screen.getByText('Hello, world!')).toBeInTheDocument();
});
