import React from "react";

const Logo = () => {
  return (
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" className="w-16 rounded-full h-16"/>
      <span class="ml-3 text-3xl text-white">Github Finder</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 text-white hover:text-gray-600">Dark Mode Icon</a>
    </nav>
    <hr/>
  </div>
</header>
  );
};

export default Logo;
