import Button from "@components/elements/button";
import { Cadastrar } from "@utils/AppConfig";
import React from "react";
import { HiX } from "react-icons/hi";

interface FormProps {
  form: "input" | "select";
  type: string;
  id: string;
  label?: string;
  placeholder?: string;
}

export interface ModalProps {
  type: "cadastrar" | "excluir" | "editar";
  id: string;
  button: string;
}

const Modal: React.FC<ModalProps> = ({ id, type, button }) => {
  const [showModal, setShowModal] = React.useState(false);

  const content = Cadastrar.find((item) => item.id === id);

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        {button}
      </Button>
      {showModal && content ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-full max-w-lg">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between gap-4 p-4 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold text-gray-700">{content?.title}</h3>
                  <button onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-gray-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <HiX />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form>
                  <div className="grid gap-3 px-4 py-6">
                    {content?.form.map((item) => (
                      <>
                        {item.form == "input" ? (
                          <div className="mb-3 pt-0">
                            <label htmlFor={item.id}>{item.label}</label>
                            <input
                              type={item.type}
                              placeholder={item.placeholder}
                              id={item.id}
                              className="mt-2 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded-2xl text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                            />
                          </div>
                        ) : (
                          <div>
                          </div>
                        )}
                      </>
                    ))}
                  </div>
                </form>
                {/*footer*/}
                <div className="flex items-center justify-end gap-2 p-4 border-t border-solid border-slate-200 rounded-b">
                  <Button
                    variant="secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </Button>
                  {type == "cadastrar" && (
                    <Button
                      variant="success"
                      onClick={() => setShowModal(false)}
                    >
                      Salvar
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
