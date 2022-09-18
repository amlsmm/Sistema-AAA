import React, { HTMLAttributes, useState, useEffect, useRef } from "react";

interface ItemProps {
  id: string;
  title: string;
  href?: string;
}

export interface DropdownProps extends HTMLAttributes<HTMLElement> {
  id: string;
  options: ItemProps[];
  textColor?: string;
  textSize?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  id,
  options,
  textColor = "gray-800",
  textSize = "base",
  children,
}) => {
  const [openedItem, setOpenedItem] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  /**
   * Hook that alerts clicks outside of the passed ref
   */
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenedItem(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside, { passive: true });
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <div ref={wrapperRef} className="relative flex-shrink-0">
      <div>
        <button
          type="button"
          className={`inline-flex items-center gap-1 py-2 px-4 text-sm font-medium rounded-full focus:outline-none focus:ring-none text-${textColor} text-${textSize}`}
          id={id}
          aria-expanded="false"
          aria-haspopup="true"
          onClick={() => setOpenedItem(!openedItem)}
        >
          {children}
        </button>
      </div>

        {openedItem && (
          <div
            className="z-50 absolute right-0 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-lg border border-gray-100 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby={`user-menu-${id}`}
          >
            {options.map((option) => (
              <a
                key={option.id}
                id={option.id}
                href={option.href}
                className="flex gap-2 items-center px-4 py-2 text-gray-700 border-none hover:bg-gray-50 transition duration-200"
              >
                {option.title}
              </a>
            ))}
          </div>
        )}
    </div>
  );
};

export default Dropdown;
