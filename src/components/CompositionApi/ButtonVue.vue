<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "Click me",
    required: false,
  },
  bgColor: {
    type: String,
    default: "primary",
  },
});

const emit = defineEmits(["click"]);

const handleClick = () => {
  emit("click");
};
</script>

<template>
  <button :class="['btn', `btn_${bgColor}`]" @click="handleClick">
    {{ props.label }}
  </button>
</template>

<style lang="scss" scoped>
@import "@/styles/vars.scss";
.btn {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 20px;
  height: 40px;
  color: #fff;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: 0.2s;

  &_primary {
    background: $primary;
  }
}
</style>
