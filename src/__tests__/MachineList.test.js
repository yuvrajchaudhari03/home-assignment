import React from 'react';
import { render, screen } from '@testing-library/react';
import { machines } from '../data/machineList';
import { statuses } from '../data/statuses';
import MachineList from '../components/MachineList';

describe('MachineList', () => {
  const filter = statuses[0];
  const filteredMachines = machines.filter(machine => machine.status === filter.label);

  test('renders filtered machine list', () => {
    render(<MachineList filter={filter} filteredMachines={filteredMachines} />);

    filteredMachines.forEach((machine) => {
      expect(screen.getByText(machine.name)).toBeInTheDocument();
      expect(screen.getByText(`Status: ${machine.status}`)).toBeInTheDocument();
    });
  });

  test('applies correct border class to machines', () => {
    render(<MachineList filter={filter} filteredMachines={filteredMachines} />);

    filteredMachines.forEach((machine) => {
      const machineElement = screen.getByText(machine.name).closest('div');
      expect(machineElement).toHaveClass(filter.border);
    });
  });
});
