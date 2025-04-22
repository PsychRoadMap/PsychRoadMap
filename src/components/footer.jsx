import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        {/* footer text */}
        <span className="block text-sm text-gray-400 text-center">
          {/* link to home page */}
          Thank you for using <Link to="/" className="hover:underline">PsychRoadMap</Link>. 
          {/* link to admin login */}
          <Link to="/login" className="hover:underline"> Admin</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;