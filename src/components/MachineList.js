import React from "react";

const MachineList = ({ filter, filteredMachines }) => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4">
      {filteredMachines.map((machine) => (
        <div
          key={machine.id}
          className={`p-4 bg-white shadow mb-2 rounded border-2 ${filter.border}`}
        >
          <h3 className="text-lg font-bold">{machine.name}</h3>
          <p>Status: {machine.status}</p>
        </div>
      ))}
    </div>
  );
};

export default MachineList;
