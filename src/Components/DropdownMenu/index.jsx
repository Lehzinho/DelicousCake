import React, { useState } from "react";
import { DropdownButton, DropdownList, DropdownListItem } from "./styles";

const Dropdown = ({ options, handleRecheioChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    handleRecheioChange(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption || "Select an option"}
        <span>{isOpen ? "▲" : "▼"}</span>
        {isOpen && (
          <DropdownList>
            {options.map((option) => (
              <DropdownListItem
                key={option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </DropdownListItem>
            ))}
          </DropdownList>
        )}
      </DropdownButton>
    </div>
  );
};

export default Dropdown;
