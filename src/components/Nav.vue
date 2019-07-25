<template>
<div id="nav" class="sticky top-0">
    <nav class="flex items-center justify-between flex-wrap p-4 bg-white border border-white shadow-lg">
      <div class="w-full flex items-center justify-center">
        <div class="text-sm flex items-center">
          <a href="#landing-section" class="text-blue-900 hover:text-red-500 font-black mr-4">
            <i class="fas fa-angle-double-up fa-lg"></i>
          </a>
          <router-link to="/projects" class="border-2 rounded-lg border-red-500 text-blue-900 text-lg font-black px-2 mr-2 sm:mr-4 link-active ">
            PROJECTS
          </router-link>
          <router-link to="/education" class="text-blue-900 text-sm hover:text-red-500 font-black mr-2 sm:mr-4">
            EDUCATION
          </router-link>
          <router-link to="/more" class="text-blue-900 text-sm hover:text-red-500 font-black">
            MORE
          </router-link>
        </div>
    <!-- <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download Resume</a>
    </div> -->
  </div>
</nav>
</div>
</template>

<style scoped>
.link-active {
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
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

