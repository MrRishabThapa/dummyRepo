import { Outlet } from "react-router-dom";
import Navbar from "../components/navBar";
import Footer from "../components/footer";
import React from "react";

interface LayoutProps {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Layout: React.FC<LayoutProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
