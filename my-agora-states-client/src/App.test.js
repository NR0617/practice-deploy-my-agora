// import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/My Agora States/i);
    expect(linkElement).toBeInTheDocument();
});