<template>
  <nav>
    <router-link v-for="route in routes" :key="route.name" :to="route.path">
      {{ route.name }}
    </router-link>
    <!-- <router-link to="/about">About</router-link> -->
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { routes } from "../router/index";

export default defineComponent({
  name: "NavView",

  data() {
    return {
      routes,
    };
  },
});
</script>

<style lang="scss" scoped></style>
