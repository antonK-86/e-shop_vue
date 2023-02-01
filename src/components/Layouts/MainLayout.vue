<template>
  <div class="container"><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 1440px;
  margin: auto;
}
</style>
