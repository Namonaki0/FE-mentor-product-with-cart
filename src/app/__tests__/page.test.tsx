import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../page';

describe('Home component', () => {
  it('renders the main element with correct class and text', () => {
    const { getByText } = render(<Home />);
    const mainElement = getByText('test');

    expect(mainElement).toBeInTheDocument();
    
    expect(mainElement).toHaveClass('flex min-h-screen flex-col items-center justify-between p-24');
  });
});
