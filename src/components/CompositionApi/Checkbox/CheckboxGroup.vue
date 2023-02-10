<script setup lang="ts">
import { defineProps, defineEmits, PropType } from "vue";

import CheckboxVue from "./CheckboxVue.vue";

const props = defineProps({
  name: {
    type: String,
    require: true,
  },
  values: {
    type: Object as PropType<Array<string>> | [],
    require: true,
  },
  options: {
    type: Object as PropType<Array<{ name: string; id: string }>>,
    require: true,
    validator: (value: Array<{ name: string; id: string }>) => {
      const hasNameKey = value.every((option) =>
        Object.keys(option).includes("name")
      );
      const hasIdKey = value.every((option) =>
        Object.keys(option).includes("id")
      );

      return hasNameKey && hasIdKey;
    },
  },
});

const emits = defineEmits(["update:values"]);

const selectItems = ({
  selectedId,
  checked,
}: {
  selectedId: string;
  checked: boolean;
}) => {
  // @ts-ignore
  const selecteditems = [...props.values];

  if (checked) {
    selecteditems.push(selectedId);
  } else {
    selecteditems.splice(
      selecteditems.findIndex((i) => i === selectedId),
      1
    );
  }

  emits("update:values", selecteditems);
};
</script>

<template>
  <CheckboxVue
    v-for="option in props.options"
    :key="option.id"
    :id="option.id"
    :name="option.name"
    :label="option.name"
    :value="option.id"
    :checked="props.values?.includes(option.id)"
    :isGroup="true"
    @updateCheckGroup="selectItems"
  />
</template>

<style lang="scss" scoped></style>
