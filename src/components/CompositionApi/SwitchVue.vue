<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const emits = defineEmits(["update:checked"]);

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const changed = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits("update:checked", target.checked);
};
</script>

<template>
  <div class="container">
    <label class="switch">
      <input
        type="checkbox"
        :id="id"
        :checked="checked"
        :disabled="disabled"
        @input="changed($event)"
      />
      <span class="slider round"></span>
    </label>
    <div class="name">{{ props.name }}</div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: inline-flex;
  align-items: flex-end;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.name {
  height: 100%;
  margin-left: 15px;
  font-size: 3rem;
  line-height: 1;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: 0.2s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  border-radius: 50%;
  transition: 0.2s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  transform: translateX(26px);
}
</style>
