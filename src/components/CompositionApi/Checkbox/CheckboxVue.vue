<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
console.log("render");

const emits = defineEmits(["update:checked", "updateCheckGroup"]);

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  label: {
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
  isGroup: {
    type: Boolean,
    default: false,
  },
});

const changed = (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (props.isGroup) {
    emits("updateCheckGroup", {
      selectedId: props.id,
      checked: target.checked,
    });
  } else {
    emits("update:checked", target.checked);
  }
};
</script>

<template>
  <div class="container">
    <input
      class="checkbox"
      type="checkbox"
      :name="name"
      :id="id"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @input="changed($event)"
    />
    <label :for="id">{{ props.label }}</label>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: inline-flex;
  align-items: center;
}
.checkbox {
  width: 24px;
  height: 24px;
  margin-right: 10px;

  & + label {
    font-size: 1.8rem;
    user-select: none;
  }
}
</style>
