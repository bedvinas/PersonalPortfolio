<template>
  <div id="landing-section" class="flex flex-col justify-center items-center intro-bg w-full h-screen p-6">
    <div class="flex justify-center w-full pb-2">
      <!-- <img
        src="../assets/cv-photo.png"
        class="h-40 w-40 my-2 mx-4 rounded-full border"
        alt
      > -->
      <img
        src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
        class="h-40 w-40 my-2 mx-4 rounded-full border"
        alt
      >
    </div>
    <!--       <p class="text-white text-2xl font-bold pb-6">EDVINAS BUZAS</p> -->
    <div class="text-center border border-white rounded-lg p-2">
      <p class="text-white text-2xl font-bold">EDVINAS BUZAS</p>
      <p class="text-blue-900 text-2xl font-black">FULL-STACK WEB DEVELOPER</p>
      <div class="text-gray-300 flex text-center items-center border-t border-gray-200 border-dashed mt-2 p-2">
        <p class="text-xs sm:text-sm p-1 sm:p-2">HTML / CSS / JS</p>
        <p class="text-xs sm:text-sm p-1 sm:p-2">Angular / Vue / React</p>
        <p class="text-xs sm:text-sm p-1 sm:p-2">NodeJS & ExpressJS</p>
        <p class="text-xs sm:text-sm p-1 sm:p-2">MongoDB</p>
      </div>
      <!-- Social area -->
      <div class="flex flex-col mt-2 p-2">
        <div class="flex text-white hover:underline text-xs sm:text-sm justify-center items-center">
          <a href="https://github.com/bedvinas" target="_blank" class="flex justify-center items-center"><i class="text-blue-900 fab fa-github fa-2x mr-2"></i>github.com/bedvinas</a>
        </div>
        <div class="flex text-white text-xs sm:text-sm justify-center items-center">
          <i class="text-blue-900 fas fa-envelope fa-2x mr-2"></i>edvix08@gmail.com
        </div>
        <div class="flex text-white text-xs sm:text-sm justify-center items-center">
          <i class="text-blue-900 fas fa-mobile-alt fa-2x -ml-6 mr-3"></i>+45 91 81 33 11
        </div>
      </div>
    </div>
    <a
      href="#nav"
      class="flex items-center bg-transparent hover:bg-blue-900 text-blue-900 font-bold hover:text-white border border-blue-900 rounded m-10 p-2 shadow-lg"
    ><i class="fas fa-angle-double-down mr-2"></i>View portfolio</a>

    <!-- <div class="flex flex-col sm:flex-row items-center w-full border shadow-lg rounded-lg pt-2 pb-4">
          <div class="">
            <img src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png" 
            class=" h-40 w-40 my-2 mx-4 rounded-full border" alt="">
          </div>
          <div class="text-center sm:text-left">
              <p class="text-gray-200 text-lg font-bold">EDVINAS BUZAS</p>
              <p class="text-blue-800 text-lg font-bold">FULL-STACK WEB DEVELOPER</p>
              <p class="text-gray-400 text-sm">edvix08@gmail.com</p>
              <p class="text-gray-400 text-sm">+45 9181 3311</p>
          </div>
    </div>-->
  </div>
</template>

<style>
.intro-bg {
  background: #f12711; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f5af19,
    #f12711
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f5af19,
    #f12711
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
