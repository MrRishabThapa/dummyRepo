import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/landing";
import Login from "./components/login";
import Signup from "./components/signup";
import Maps from "./pages/maps";
import Homepage from "./pages/homepage";
import Opportunities from "./pages/opp";
import News from "./pages/news";
import HallOfFame from "./pages/leaderboard";
import Layout from "./pages/layout";
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
          element={
            <Layout currentPage={currentPage} setCurrentPage={setCurrentPage} />
          }
        >
          <Route
            path="/dashboard"
            element={
              <Homepage
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            }
          />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/news" element={<News />} />
          <Route path="/hall-of-fame" element={<HallOfFame />} />
          <Route path="/map" element={<Maps />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
