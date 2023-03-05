<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "300px",
  },
  placeholder: {
    type: String,
    default: "",
  },
  error: {
    type: Array,
  },
});

const emit = defineEmits(["update:value"]);

const onChangeValue = (event: Event) => {
  const target = event.target as HTMLInputElement;

  emit("update:value", target.value);
};
</script>

<template>
  <div class="container" :style="{ width }">
    <input
      :class="{ 'input-text': true, err: error?.length }"
      :id="name"
      :name="name"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      @input="onChangeValue($event)"
    />
    <label class="label" :for="name">{{ props.label }}</label>
    <TransitionGroup>
      <div class="error" v-for="e in props.error" :key="e.$uid">
        {{ e.$message }}
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 2.5rem 0 1rem;
  position: relative;
}

.input-text {
  display: block;
  width: 100%;
  height: calc(3rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  color: #077381;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #dae2fa;
  border-radius: 0.6rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}

.input-text::placeholder {
  color: #212529;
  opacity: 0.4;
}

.input-text:focus {
  background-color: #fff;
  border-color: #069494;
  outline: 0;
  caret-color: auto;
}

.input-text:focus.err {
  border-color: rgb(236, 46, 46);
}

.input-text:disabled,
.input-text[readonly] {
  background-color: #f5f5f5;
  opacity: 1;
}

.label {
  position: absolute;
  top: 0;
  font-size: 1.6rem;
  color: #069494;
  opacity: 0;
  transition: 0.15s;
}

.input-text:focus + .label {
  opacity: 1;
}

.error {
  padding-top: 0.5rem;
  color: rgb(236, 46, 46);
  font-size: 1.3rem;
}
</style>
