import { render, screen } from '@testing-library/react';
import { FlightCard } from '../FlightCard';


const flight = {
    links: { mission_patch_small: "//unsplash.it/200/200" },
    mission_name: "test-mission",
    flight_number: "1234",
    mission_id: [234],
    launch_year: 1997,
    launch_success: true,
    rocket: { first_stage: { cores: [{ land_success: false }] } }
};

const flight_launchFailed = {
    links: { mission_patch_small: "//unsplash.it/200/200" },
    mission_name: "test-mission2",
    flight_number: "4321",
    mission_id: [234, 567],
    launch_year: 2015,
    launch_success: false,
    rocket: { first_stage: { cores: [{ land_success: true }] } }
};

test('renders FlightCard- launch Success, landing failed', () => {
    render(<FlightCard flight={flight} />);
    const landStatus = screen.getByText(/Landing Failed/i);
    expect(landStatus).toBeInTheDocument();
    const launchStatus = screen.getByText(/Launch was a success/i);
    expect(launchStatus).toBeInTheDocument();
    const mission_name = screen.getByAltText(/test-mission/i);
    expect(mission_name).toBeInTheDocument();
});
test('renders FlightCard- launch failed, landing success', () => {
    render(<FlightCard flight={flight_launchFailed} />);
    const launchStatus = screen.getByText(/Launch Failed/i);
    expect(launchStatus).toBeInTheDocument();
    const landStatus = screen.getByText(/Landing was a success/i);
    expect(landStatus).toBeInTheDocument();
});
