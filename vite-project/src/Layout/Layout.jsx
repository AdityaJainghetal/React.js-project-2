import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar */}
      <header className="w-full shadow-sm bg-white sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 sm:px-6 lg:px-10 py-6 bg-gray-50">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t shadow-inner">
        <Footer />
      </footer>

    </div>
  );
};

export default Layout;
