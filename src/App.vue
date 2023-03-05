<template>
  <MainLayout>
    <HeaderView>
      <NavView />
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
@import "@/styles/vars.scss";

*,
*::before,
*::after {
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
  font-size: 3.6rem;
}

h2 {
  font-size: 3.2rem;
  font-weight: 400;
}

h3 {
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 1.4;
}

h4 {
  font-size: 2rem;
  font-weight: 400;
}

#app {
  font-family: $fontSatoshi;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $colorTitle;
  caret-color: transparent;
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
