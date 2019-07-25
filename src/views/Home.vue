<template>
  <div>
    <Projects />
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
import MainHomeSection from "@/components/MainHomeSection.vue";
import Nav from "@/components/Nav.vue";
import Projects from "@/components/Projects.vue";

export default {
  name: "home",
  components: {
    MainHomeSection,
    Nav,
    Projects
  }
};
</script>

<style>
html {
	scroll-behavior: smooth;
}
</style>

