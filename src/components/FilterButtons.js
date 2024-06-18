import React from "react";
import { machines } from "../data/machineList";
import { statuses } from "../data/statuses";

const FilterButtons = ({ setFilter }) => {
  const getCount = (type) => {
    return machines?.filter((machine) => machine.status === type).length;
  };

  return (
    <div className="flex flex-wrap space-x-2 space-y-2 md:space-y-0 md:flex-nowrap">
      {statuses.map((status) => (
        <button
          key={status.label}
          className={`text-white py-2 px-4 rounded ${status.bgColor}`}
          onClick={() => setFilter(status)}
        >
          {status.label} ({getCount(status.label)})
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
