import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import navigation from "./navigation";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="text-3xl text-white lg:hidden"
      >
        {open ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {open && (
        <div className="absolute left-0 top-20 w-full border-t border-slate-800 bg-slate-950 lg:hidden">
          <ul className="flex flex-col gap-6 p-8">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-slate-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileMenu;