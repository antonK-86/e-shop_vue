<script setup lang="ts">
import { ref } from "vue";

import CheckboxVue from "@/components/CompositionApi/Checkbox/CheckboxVue.vue";
import CheckboxGroup from "@/components/CompositionApi/Checkbox/CheckboxGroup.vue";
import ButtonVue from "@/components/CompositionApi/ButtonVue.vue";
import SwitchVue from "@/components/CompositionApi/SwitchVue.vue";
import RadioButton from "@/components/CompositionApi/RadioButton.vue";

// Button
const clickBtn = () => {
  console.log("click");
};

// Checkbox
const checkedVal = ref(true);
const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);

// CheckboxGroup
const listItems = ref<Array<{ name: string; id: string }>>([
  { name: "Name1", id: "h1" },
  { name: "Name2", id: "h2" },
  { name: "Name3", id: "h3" },
  { name: "Name4", id: "h4" },
]);

const selectedItems = ref<Array<string> | []>([]);

// Switch
const isSwitchOn = ref<boolean>(false);

// RadioBtn
const itemlist = [
  { name: "Name R1", id: "r1" },
  { name: "Name R2", id: "r2" },
  { name: "Name R3", id: "r3" },
  { name: "Name R4", id: "r4" },
];

const selectedItem = ref<string>(itemlist[3]?.id || "");
</script>

<template>
  <div>
    <h1>UI KIT</h1>
    <div class="ui">
      <h3>Buttons</h3>
      <ButtonVue label="Button" @click="clickBtn" />
    </div>
    <div class="ui">
      <h3>Checkbox</h3>
      <div class="list">
        <CheckboxVue
          label="Active"
          id="checkboxActive"
          name="checkboxActive"
          v-model:checked="checkedVal"
        />
      </div>
      <div class="list">
        <CheckboxVue
          label="Disabled"
          id="checkboxDisable"
          name="checkboxDisable"
          :disabled="checkboxDisabled"
          v-model:checked="checkboxDisabledChecked"
        />
      </div>
      <div class="ui">
        <h3>Checkbox Group</h3>
        <p>Selected: {{ selectedItems }}</p>
        <div class="column">
          <CheckboxGroup
            :name="'CheckboxGroup'"
            :options="listItems"
            v-model:values="selectedItems"
          />
        </div>
      </div>
      <div class="ui">
        <h3>Switch</h3>
        <p>Switch: {{ isSwitchOn }}</p>
        <SwitchVue name="Switch" v-model:checked="isSwitchOn" />
      </div>
      <div class="ui">
        <h3>Radiobutton</h3>
        <div class="list">
          <p>Radiobutton: {{ selectedItem }}</p>
          <div class="column">
            <RadioButton
              v-for="item in itemlist"
              :key="item.id"
              :id="item.id"
              :name="item.name"
              :value="item.id"
              :disabled="item.id === 'r2'"
              v-model:checkedValue="selectedItem"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ui {
  padding: 10px;
  text-align: left;
}

.list {
  margin-bottom: 10px;
}

.column {
  display: flex;
  flex-direction: column;
}
</style>
