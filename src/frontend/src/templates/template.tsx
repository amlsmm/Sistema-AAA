import React, { ReactNode } from "react";

type ITemplateProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Template = (props: ITemplateProps) => (
  <>
    {props.meta}

    {props.children}
  </>
);

export { Template };
