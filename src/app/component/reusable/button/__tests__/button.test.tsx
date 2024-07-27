import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../button'; 

describe('Button component', () => {
    const defaultProps = {
        currency: 'GBP',
        id: 'btn-1',
        orderTotal: 200,
    };
    it('renders without crashing', () => {
        const { getByRole } = render(<Button {...defaultProps} />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });

    it('displays the correct currency', () => {
        const { getByText } = render(<Button {...defaultProps} />);
        const buttonElement = screen.getByText(/GBP/i);
        expect(buttonElement).toBeInTheDocument();
    });
    
    it('renders the button element with correct class and text', () => {
        const { container } = render(<Button {...defaultProps} />);
        const buttonElement = container.querySelector('button');
        expect(buttonElement).toHaveClass('button');
    });
});
