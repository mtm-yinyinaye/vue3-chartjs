<template>
  <Header />
  <Nav />
  <router-view />
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import Header from "./components/common/Header.vue";
import Nav from "./components/common/NavBar.vue";
</script>
<style lang="sass">
#app
  background-color: rgba(0, 0, 0, 0.1),
  min-height: calc(100vh - 87px),
</style>
