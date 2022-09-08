import React from "react";
import Button from "@components/elements/button";

export interface FooterModalProps {
  submit: string;
  variant: "danger" | "success" | "primary";
  setClose(str: boolean): void;
}

const FooterModal: React.FC<FooterModalProps> = ({
  submit,
  variant = "primary",
  setClose,
}) => {
  return (
    <div className="flex items-center justify-end gap-2 p-4 border-t border-solid border-slate-200 rounded-b">
      <Button variant="secondary" onClick={() => setClose(false)}>
        Cancelar
      </Button>
      <Button type="submit" variant={variant}>
        {submit}
      </Button>
    </div>
  );
};

export default FooterModal;
