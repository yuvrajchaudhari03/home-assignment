import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { machines } from '../data/machineList';
import { statuses } from '../data/statuses';

describe('App', () => {
  test('renders filter buttons and machine list', () => {
    render(<App />);

    statuses.forEach((status) => {
      const button = screen.getByText(`${status.label} (${machines.filter(machine => machine.status === status.label).length})`);
      expect(button).toBeInTheDocument();
    });

    const totalMachines = screen.getByText(`Total machines: ${machines.length}`);
    expect(totalMachines).toBeInTheDocument();
  });

  test('filters machines correctly when filter button is clicked', () => {
    render(<App />);

    statuses.forEach((status) => {
      const button = screen.getByText(`${status.label} (${machines.filter(machine => machine.status === status.label).length})`);
      fireEvent.click(button);

      const filteredMachines = machines.filter(machine => machine.status === status.label);
      filteredMachines.forEach((machine) => {
        expect(screen.getByText(machine.name)).toBeInTheDocument();
        expect(screen.getByText(`Status: ${machine.status}`)).toBeInTheDocument();
      });

      // Check that machines not matching the filter are not displayed
      const nonFilteredMachines = machines.filter(machine => machine.status !== status.label);
      nonFilteredMachines.forEach((machine) => {
        expect(screen.queryByText(machine.name)).not.toBeInTheDocument();
      });
    });
  });
});
