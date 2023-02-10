<template>
  <button class="btn" :style="{ width }" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomButton",
  emits: ["click"],
  props: {
    width: String,
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/vars.scss";
.btn {
  padding: 1.6rem 3.2rem;
  border: none;
  border-radius: 2px;
  background-color: $lightGrey;
  font-size: 1.6rem;
  color: $colorBtnText;
}

.btn:hover {
  background-color: $lightGreyHover;
}
</style>
