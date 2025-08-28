import { Leaf } from "lucide-react";
import { NavLink } from "react-router-dom";

type NavbarProps = {
  currentPage: string;
  setCurrentPage: (page: string) => void;
};

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const navItems = [
    { id: "home", label: "Home", path: "/dashboard" },
    { id: "opportunities", label: "Opportunities", path: "/opportunities" },
    { id: "news", label: "News", path: "/news" },
    { id: "map", label: "Map", path: "/map" },
    { id: "leaderboard", label: "Hall Of Fame", path: "/hall-of-fame" },
  ];

  return (
    <nav className="flex items-center justify-between bg-green-600 text-white px-6 py-4 shadow-md">
      <div className="flex items-center space-x-2">
        <Leaf className="h-8 w-8 text-green-200" />
        <div className="text-2xl font-bold tracking-wide">Volcomm.</div>
      </div>

      <ul className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              onClick={() => setCurrentPage(item.id)}
              className={({ isActive }) =>
                `cursor-pointer transition-colors ${
                  isActive || currentPage === item.id
                    ? "text-yellow-300 font-semibold border-b-2 border-yellow-300"
                    : "hover:text-yellow-200"
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button className="md:hidden text-2xl focus:outline-none">☰</button>
    </nav>
  );
}
