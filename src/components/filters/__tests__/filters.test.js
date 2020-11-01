import { render, screen } from '@testing-library/react';
import Filters from '../Filters';

test('renders Filters', () => {
    render(<Filters yearFilter={null} launchFilter={null} landingFilter={null} />);
    const launchYearsLabel = screen.getByText(/Launch Years/i);
    expect(launchYearsLabel).toBeInTheDocument();
});
