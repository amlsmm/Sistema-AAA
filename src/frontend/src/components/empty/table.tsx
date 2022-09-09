import React from "react";

import { IconBaseProps } from "react-icons";

export interface EmptyTableProps {
  title: string;
  description: string;
  icon: React.ComponentType<IconBaseProps>;
}

export const EmptyTable: React.FC<EmptyTableProps> = ({
  title,
  description,
  icon: Icon,
}) => (
  <div className="relative w-full max-h-52 flex flex-col items-center justify-center gap-2 border border-gray-200 border-dashed rounded-lg px-4 py-6 text-gray-500 text-center">
    <Icon size="40" color="current" className="relative z-10" />

    <div>
      <h3 className="text-base font-semibold text-gray-700">{title}</h3>
      <div className="mt-2 text-sm text-gray-500">
        <p>{description}</p>
      </div>
    </div>
  </div>
);
