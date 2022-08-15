import React, { ReactNode } from 'react';

type ITemplateProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Template = (props: ITemplateProps) => (
  <div className="relative w-full antialiased text-gray-900 bg-white overflow-hidden font-sourcesans">
    {props.meta}

    {props.children}
  </div>
);

export { Template };
