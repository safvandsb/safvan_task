import React from "react";
import './SortDropDown.css';


interface SortingDropdownProps {
  onChange: (value: string) => void;
}

const SortingDropdown: React.FC<SortingDropdownProps> = ({ onChange }) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onChange(value);
  };

  const handleSort = (value: string) => {
    onChange(value);
  };

  return (
    <select
    onChange={handleSortChange}
    className="sort-dropdown"
  >
      <option value="">Select Sorting Option</option>
      <option value="asc">A to Z</option>
      <option value="desc">Z to A</option>
    </select>
  );
};

export default SortingDropdown;