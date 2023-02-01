<template>
  <MainLayout>
    <HeaderView>
      <NavView></NavView>
    </HeaderView>
    <router-view />
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainLayout from "@/components/Layouts/MainLayout.vue";
import HeaderView from "@/components/HeaderView.vue";
import NavView from "@/components/NavView.vue";

export default defineComponent({
  name: "App",
  components: {
    MainLayout,
    HeaderView,
    NavView,
  },
});
</script>

<style lang="scss">
@import url("https://fonts.cdnfonts.com/css/satoshi");
@import url("https://fonts.cdnfonts.com/css/clash-display");

$colorText: #726e8d;
$colorTitle: #2c3e50;
$colorActive: #42b983;

* {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
p {
  padding: 0;
  margin: 0;
}

html {
  font-size: 10px;
}

h1 {
  font-size: 2.4rem;
}

#app {
  font-family: "Satoshi", sans-serif;
  /* font-family: "Clash Display", sans-serif; */

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $colorTitle;
}

nav {
  display: flex;
  justify-content: center;
  gap: 4.4rem;
  padding: 2rem;

  a {
    font-weight: bold;
    font-size: 1.6rem;
    color: $colorText;
    text-decoration: none;

    &.router-link-exact-active {
      color: $colorActive;
    }
  }
}
</style>
