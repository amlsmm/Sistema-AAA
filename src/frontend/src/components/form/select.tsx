import React, { HTMLAttributes, useEffect, useState } from "react";

import { HiChevronDown } from "react-icons/hi";

interface ItemProps {
  id: string;
  value: string;
}

export interface SelectProps extends HTMLAttributes<HTMLElement> {
  options: ItemProps[];
  selected: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  errors?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  selected,
  label,
  placeholder = "Selecione",
  disabled = false,
  errors,
  ...rest
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const selectedOption = options.filter((item) => item.id === selected)[0]
    ?.value;

  useEffect(() => {
    setIsOpened(false);
  }, [selected]);

  return (
    <div className="w-full">
      <h3
        className={`block text-sm font-medium ${
          disabled ? "text-gray-500" : "text-gray-700"
        }`}
      >
        {label}
      </h3>
      <div className="relative mt-2">
        <button
          type="button"
          className={`px-3 py-3 text-gray-600 relative bg-white rounded-2xl text-sm border outline-none focus:outline-none w-full transition duration-200 text-left ${
            errors
              ? "border-danger"
              : "border-gray-300 hover:border-gray-400 focus:border-primary"
          }`}
          onClick={() => setIsOpened(!isOpened)}
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
        >
          {selected !== "" ? (
            <span className="block truncate">{selectedOption}</span>
          ) : (
            <span className="block truncate text-gray-400">{placeholder}</span>
          )}
          <span className="absolute inset-y-0 right-2 flex items-center 2pointer-events-none">
            <HiChevronDown className="w-4 h-4 stroke-current" />
          </span>
        </button>

        {isOpened && (
          <ul
            className="absolute z-10 py-1 mt-1 overflow-auto text-sm bg-white rounded-md shadow-lg w-full max-h-60 border border-gray-50 focus:outline-none sm:text-sm animate-fade-in-down"
            tabIndex={-1}
            role="listbox"
            aria-labelledby="listbox-label"
          >
            {options.map((item) => (
              <li
                key={item.id}
                id={item.id}
                className={`text-gray-900 font-medium cursor-default select-none relative py-2 pl-3 pr-10 hover:bg-gray-100 transition duration-200 ${
                  selected === item.id && "bg-gray-100 text-primary"
                }`}
                role="option"
                aria-selected={selected === item.id}
                {...rest}
              >
                <span className="block font-normal truncate">{item.value}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
