<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  width: {
    type: String,
    default: "500px",
  },
  percent: {
    type: Number,
    default: 0,
    required: true,
  },
  color: {
    type: String,
    default: "primary",
  },
});
</script>

<template>
  <div class="container">
    <div class="line" :style="{ width }">
      <div class="line-progress" :style="{ width: `${percent}%` }"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/vars.scss";
.container {
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  margin: 10px;
}

.line {
  height: 15px;
  border-radius: 8px;
  background-color: $primary;

  &-progress {
    background-color: #78c2df;
    height: 100%;
    border-radius: 8px;
    transition: 0.3s;
  }
}
</style>
