<template>
  <div class="wrapper">
    <Navbar/>
    <div class="main">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script setup>
import Navbar from "@/components/navbar/Navbar.vue"
import Footer from "@/components/footer/Footer.vue"
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
}
</style>