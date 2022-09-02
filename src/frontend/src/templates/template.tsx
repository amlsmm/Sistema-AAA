import Footer from "@components/footer/footer";
import Navbar from "@components/navigation/navbar";
import React, { ReactNode } from "react";

type ITemplateProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Template = (props: ITemplateProps) => (
  <>
    {props.meta}

    <div className="pt-12 min-h-screen flex flex-col justify-between">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  </>
);

export { Template };
