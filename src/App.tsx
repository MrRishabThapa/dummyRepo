import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/landing";
import Login from "./components/login";
import Signup from "./components/signup";
import Homepage from "./pages/homepage";
import Navbar from "./components/navBar";
import Footer from "./components/footer";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={
            <div className="flex flex-col min-h-screen">
              <Navbar
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
              <div className="flex-grow">
                <Homepage
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
