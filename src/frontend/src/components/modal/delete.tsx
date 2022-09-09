import React, { useState } from "react";
// components
import Button from "@components/elements/button";
// modal

import moment from "moment";
import Modal from "./modal";
import HeaderModal from "./header";
import { HiOutlineTrash } from "react-icons/hi";

export interface ExcluirProps {
  title: string;
  description: string;
  onClick: () => void;
}

const Excluir: React.FC<ExcluirProps> = ({ onClick, title, description }) => {
  const [show, setShow] = useState(false);

  const handleDelete = () => {
    onClick();
    
    setShow(false);
  };
  return (
    <>
      <button
        type="button"
        className="text-danger p-1 hover:bg-gray-50 rounded-full transition duration-200"
        onClick={() => setShow(true)}
      >
        <HiOutlineTrash size={18} />
      </button>
      {show && (
        <Modal>
          <HeaderModal title={title} setClose={() => setShow(false)} />
          <div className="px-4 py-6">
            <p className="text-gray-500 text-base">{description}</p>
          </div>
          <div className="flex items-center justify-end gap-2 p-4 border-t border-solid border-slate-200 rounded-b">
            <Button variant="secondary" onClick={() => setShow(false)}>
              Cancelar
            </Button>
            <Button type="button" variant="danger" onClick={handleDelete}>
              Excluir
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Excluir;
