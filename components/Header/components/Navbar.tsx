import Link from "next/link";
import { NAV_LINK } from "@/utils/nav";

export const Navbar = () => {
  return (
    <ul className="p-5 flex flex-col gap-5 justify-center items-center z-40">
      {NAV_LINK.map((nav) => (
        <li key={nav.id}>
          <Link
            href={nav.link}
            className="py-2 px-5 rounded-full hover:bg-hover-nav transition duration-300 ease-in-out"
          >
            {nav.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
