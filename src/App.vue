<template>
  <div>
        <MainHomeSection />
        <Nav />
<!--     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import MainHomeSection from "@/components/MainHomeSection.vue";
import Nav from "@/components/Nav.vue";

export default {
  components: {
    MainHomeSection,
    Nav
  }
};
</script>


<style>

</style>
