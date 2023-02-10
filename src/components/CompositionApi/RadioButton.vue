<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const emits = defineEmits(["update:checkedValue"]);

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "radioId",
  },
  checkedValue: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const changed = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits("update:checkedValue", target.value);
};
</script>

<template>
  <div class="container">
    <input
      class="radio"
      type="radio"
      :name="name"
      :id="id"
      :value="value"
      :checked="checkedValue === value"
      :disabled="disabled"
      @input="changed($event)"
    />
    <label :for="id">{{ props.name }}</label>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: inline-flex;
  align-items: center;
  font-size: 2rem;
}

.radio {
  padding: 0;
  margin: 0;
  margin-right: 15px;
  width: 2rem;
  height: 2rem;
}
</style>
