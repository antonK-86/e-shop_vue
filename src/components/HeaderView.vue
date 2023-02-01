<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-search">
        <img alt="Search" src="@/assets/icons/search.svg" />
      </div>
      <h1>Avion</h1>
      <div class="header-top-right">
        <img class="header-icon" alt="Cart" src="@/assets/icons/cart.svg" />
        <img class="header-icon" alt="Avatar" src="@/assets/icons/user.svg" />
      </div>
    </div>
    <slot></slot>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderView",
});
</script>

<style lang="scss" scoped>
.header {
  height: 132px;
  padding: 0 2.8rem;
  background: #fff;
  caret-color: transparent;

  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  &-top-right {
    display: flex;
    gap: 16px;
  }

  &-icon {
    width: 1.6rem;
    height: 1.6rem;
  }
}
</style>
