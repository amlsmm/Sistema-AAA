import { HiAcademicCap, HiMenu, HiUserCircle, HiX } from "react-icons/hi";
import { NavbarLinks } from "@utils/data";
import { useState } from "react";
import Link from "next/link";
import Dropdown from "@components/elements/dropdown";

export default function Navbar() {
  const [opened, setOpened] = useState(false);

  return (
    <nav
      className={`w-full z-max fixed top-0 bg-primary text-white transition duration-300`}
    >
      <div className="container text-lg text-center">
        <div className="flex justify-between gap-4 p-4">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <HiAcademicCap size={32} />
            </div>
            <div className="hidden lg:ml-6 lg:flex lg:items-center">
              {NavbarLinks.map((item) => (
                <Link href={item.href} key={item.id}>
                  <a className="h-full inline-flex items-center py-2 px-4">
                    {item.title}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden lg:ml-6 lg:flex lg:items-center gap-4">
            <Dropdown
              id="account"
              textColor="current"
              textSize="lg"
              options={[
                {
                  id: "sair",
                  title: "Sair",
                  href: "/autenticacao/login",
                },
              ]}
            >
              <HiUserCircle size={32} />
            </Dropdown>
          </div>
          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg  hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setOpened(!opened)}
            >
              <span className="sr-only">Open main menu</span>
              {opened ? (
                <HiX class-name="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu class-name="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {opened && (
        <section className="lg:hidden bg-white shadow-lg py-8 text-gray-700 animate-fade-in">
          <div className="space-y-1 px-2 font-bold">
            {NavbarLinks.map((item) => (
              <Link href={item.href} key={item.id}>
                <a className="block px-4 py-2 text-lg">{item.title}</a>
              </Link>
            ))}
            <Dropdown
              id="account"
              textColor="current"
              textSize="lg"
              options={[
                {
                  id: "blog",
                  title: "Blog",
                  href: "/",
                },
                {
                  id: "ajuda",
                  title: "Central de Ajuda",
                  href: "/",
                },
              ]}
            >
              <HiUserCircle size={32} />
              <span>Perfil</span>
            </Dropdown>
          </div>
        </section>
      )}
    </nav>
  );
}
