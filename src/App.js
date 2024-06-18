import React, { useEffect, useState } from "react";
import FilterButtons from "./components/FilterButtons";
import MachineList from "./components/MachineList";
import { machines } from "./data/machineList";
import { statuses } from "./data/statuses";

const App = () => {
  const [filter, setFilter] = useState(statuses[0]);
  const [filteredMachines, setFilteredMachines] = useState([]);

  useEffect(() => {
    const filtered = filter
      ? machines.filter((machine) => machine.status === filter.label)
      : machines;
    setFilteredMachines(filtered);
  }, [filter]);

  return (
    <div className="p-4 md:p-8">
      <FilterButtons setFilter={setFilter} />
      <div className="my-2 mt-2 font-bold text-md">Total machines: {machines.length}</div>
      <MachineList filter={filter} filteredMachines={filteredMachines} />
    </div>
  );
};

export default App;
