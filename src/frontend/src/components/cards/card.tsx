import Button from "@components/elements/button";
import Link from "next/link";
import { IconBaseProps } from "react-icons";

export interface CardProps {
  title: string;
  href: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Card: React.FC<CardProps> = ({ title, href, icon: Icon }) => {
  return (
    <>
      <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-lg text-gray-700 py-6 px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gray-200 rounded-full p-4 text-primary">
            <Icon size={24} />
          </div>
          <div className="w-full bg-white p-6 flex flex-col items-center gap-2">
            <p className="text-xl font-semibold text-gray-900">{title}</p>
            <hr className="w-full py-4"/>
            <Button variant="outline">
              <Link href={href}>
                Gerenciar
              </Link>
            </Button>
            <Button variant="primary">Cadastrar</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
