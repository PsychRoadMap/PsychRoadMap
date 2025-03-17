import React from "react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span class="block text-sm text-gray-400 text-center">Thank you for using <Link to="/" class="hover:underline">PsychRoadMap</Link>. <Link to="/admin" class="hover:underline">Admin</Link></span>
      </div>
      <script src="../../node_modules/flowbite/dist/flowbite.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/prism.min.js" integrity="sha512-axJX7DJduStuBB8ePC8ryGzacZPr3rdLaIDZitiEgWWk2gsXxEFlm4UW0iNzj2h3wp5mOylgHAzBzM4nRSvTZA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <script src="https://flowbite.com/docs/flowbite.min.js?v=3.1.2a"></script>
      <script src="https://flowbite.com/docs/docs.js?v=3.1.2a"></script>
    </footer>
  );
};

export default Footer;