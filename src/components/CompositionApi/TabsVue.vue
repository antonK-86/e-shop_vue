<script setup lang="ts">
import { defineProps, defineEmits, PropType } from "vue";

const props = defineProps({
  tabs: {
    type: Object as PropType<
      Array<{ name: string; label: string; content: string }>
    >,
    required: true,
  },
  selectTab: {
    type: String,
  },
  content: {
    type: String,
  },
});

const emits = defineEmits(["onSelect"]);

const changed = (tab: string) => {
  if (tab === props.selectTab) return;
  emits("onSelect", tab);
};
</script>

<template>
  <div class="container">
    <span
      :class="{ tab: true, selected: selectTab === tab.name }"
      v-for="tab in tabs"
      :key="tab.name"
      @click="changed(tab.name)"
      >{{ tab.label }}</span
    >
    <div
      class="content"
      v-for="tab in tabs"
      :key="tab.name"
      v-show="selectTab === tab.name"
    >
      {{ tab.content }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.tab {
  box-sizing: border-box;
  padding: 4px 8px;
  border: 1px solid rgb(104, 56, 56);
  margin-right: 6px;
  font-size: 1.6rem;
  line-height: 2;
  background-color: rgb(196, 195, 195);
  cursor: pointer;
  user-select: none;
  opacity: 0.5;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.selected {
  background-color: #fff;
  opacity: 1;
  position: relative;
}

.selected::after {
  content: "";
  display: inline-block;
  width: 100%;
  height: 3px;
  background-color: #fff;
  position: absolute;
  bottom: -3px;
  left: 0;
  z-index: 1000;
}

.content {
  position: relative;
  top: -2px;
  height: 200px;
  border: 1px solid rgb(104, 56, 56);
  padding: 8px;
  font-size: 1.6rem;
  border-radius: 3px;
}
</style>
