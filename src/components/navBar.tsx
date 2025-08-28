// import React from 'react';
import { Leaf } from "lucide-react";

type NavbarProps = {
  currentPage: string;
  setCurrentPage: (page: string) => void;
};

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "opportunities", label: "Opportunities" },
    { id: "news", label: "News" },
    { id: "map", label: "Map" },
    { id: "leaderboard", label: "Leaderboard" },
  ];

  return (
    <nav className="flex items-center justify-between bg-green-600 text-white px-6 py-4 shadow-md">
      <div className="flex items-center space-x-2">
        <Leaf className="h-8 w-8 text-green-200" />
        <div className="text-2xl font-bold tracking-wide">Volcomm.</div>
      </div>
      <ul className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer transition-colors ${
              currentPage === item.id
                ? "text-yellow-300 font-semibold border-b-2 border-yellow-300"
                : "hover:text-yellow-200"
            }`}
            onClick={() => setCurrentPage(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <button className="md:hidden text-2xl focus:outline-none">☰</button>
    </nav>
  );
}
