import React from "react";
import { HiX } from "react-icons/hi";

export interface HeaderModalProps {
  title: string;
  setClose(str: boolean): void;
}

const HeaderModal: React.FC<HeaderModalProps> = ({ title, setClose }) => {
  return (
    <>
      <div className="flex items-center justify-between gap-4 p-4 border-b border-solid border-slate-200 rounded-t">
        <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
        <button
          type="button"
          onClick={() => setClose(false)}
        >
          <span className="bg-transparent text-gray-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
            <HiX />
          </span>
        </button>
      </div>
    </>
  );
};

export default HeaderModal;
