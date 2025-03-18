import React from "react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span class="block text-sm text-gray-400 text-center">Thank you for using <Link to="/" class="hover:underline">PsychRoadMap</Link>. <Link to="/admin" class="hover:underline">Admin</Link></span>
      </div>
      <script src="https://flowbite.com/docs/flowbite.min.js?v=3.1.2a"></script>
      <script src="https://flowbite.com/docs/docs.js?v=3.1.2a"></script>
    </footer>
  );
};

export default Footer;