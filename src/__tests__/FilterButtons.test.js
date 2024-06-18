import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterButtons from '../components/FilterButtons';
import { statuses } from '../data/statuses';
import { machines } from '../data/machineList';

describe('FilterButtons', () => {
  const setFilter = jest.fn();

  test('renders filter buttons with correct counts', () => {
    render(<FilterButtons setFilter={setFilter} />);

    statuses.forEach((status) => {
      const button = screen.getByText(`${status.label} (${machines.filter(machine => machine.status === status.label).length})`);
      expect(button).toBeInTheDocument();
    });
  });

  test('calls setFilter with correct status on button click', () => {
    render(<FilterButtons setFilter={setFilter} />);

    statuses.forEach((status) => {
      const button = screen.getByText(`${status.label} (${machines.filter(machine => machine.status === status.label).length})`);
      fireEvent.click(button);
      expect(setFilter).toHaveBeenCalledWith(status);
    });
  });
});
