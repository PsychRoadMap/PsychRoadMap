import React from "react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="block text-sm text-gray-400 text-center">Thank you for using <Link to="/" className="hover:underline">PsychRoadMap</Link>. <Link to="/admin" className="hover:underline">Admin</Link></span>
      </div>
    </footer>
  );
};

export default Footer;