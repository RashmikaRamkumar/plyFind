import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <footer>
        {/* Add your footer content here */}
        <div className="bg-wood-dark text-white py-4 text-center">
          <p>&copy; 2025 Rakesh Glass & Plywood. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
