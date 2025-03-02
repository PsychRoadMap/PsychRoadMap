import React from "react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <span class="block text-sm text-gray-400 text-center">Thank you for using <Link to="/" class="hover:underline">PsychRoadMap</Link>. <a href="#" class="hover:underline">Admin.</a></span>
      </div>
    </footer>
  );
};

export default Footer;