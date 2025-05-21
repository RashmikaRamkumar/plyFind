import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; 

const Layout = () => {
  return (
    <div>
      <header>
        
        <Navbar />
      </header>
      <main>
       
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
