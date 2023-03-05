<script setup lang="ts">
import { ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import {
  minLength,
  maxLength,
  numeric,
  email,
  sameAs,
  required,
  helpers,
} from "@vuelidate/validators";

import CheckboxVue from "@/components/CompositionApi/Checkbox/CheckboxVue.vue";
import CheckboxGroup from "@/components/CompositionApi/Checkbox/CheckboxGroup.vue";
import ButtonVue from "@/components/CompositionApi/ButtonVue.vue";
import SwitchVue from "@/components/CompositionApi/SwitchVue.vue";
import RadioButton from "@/components/CompositionApi/RadioButton.vue";
import ProgressBar from "@/components/CompositionApi/ProgressBar.vue";
import Input from "@/components/CompositionApi/Input/InputVue.vue";
import TabsVue from "@/components/CompositionApi/TabsVue.vue";
import TableVue from "@/components/CompositionApi/TableVue.vue";

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

//Progress bar
const percent = ref<number>(40);

const clickAdd = () => {
  const newValue = percent.value + 10;
  if (newValue > 100) return;
  percent.value = newValue;
};

const clickDec = () => {
  const newValue = percent.value - 10;
  if (newValue < 0) return;
  percent.value = newValue;
};

// Input
const nameField = ref("");
const emailField = ref("");
const numField = ref("");
const passField = ref("");
const confirmPassField = ref("");
const customField = ref("");

const submitForm = () => {
  v.value.$touch();
  if (v.value.$error) return;
  console.log("submit");
};

// validation
const customRules = (value: string) => {
  return value.includes("Hello");
};

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage("Lenght 3 simbols", minLength(3)),
  },
  emailField: {
    email: helpers.withMessage("Email is bad", email),
    required,
  },
  numField: {
    maxLength: helpers.withMessage("Max length  3 simbols", maxLength(2)),
    numeric: helpers.withMessage("Only numbers", numeric),
  },
  confirmPassField: {
    sameAsPassword: helpers.withMessage("Password wrong", sameAs(passField)),
  },
  customField: {
    customField: helpers.withMessage("Custom rules include Hello", customRules),
  },
}));

const v = useVuelidate(rules, {
  nameField,
  emailField,
  numField,
  confirmPassField,
  customField,
});

// Tabs
const tabs = [
  { name: "Name1", label: "label 1", content: "dfejjjrwejtjerwikjikowgnmro" },
  { name: "Name2", label: "label 2", content: "pofolgmlmtmg[trmgmre]" },
  {
    name: "Name3",
    label: "label 3",
    content: "op5kotrkgotrm jgmt tijgkotrmgmwrt nmtgowpr",
  },
];

const selectTab = ref(tabs[0].name);

const changeTab = (tab: string) => {
  selectTab.value = tab;
};
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
        <p class="sub">Selected: {{ selectedItems }}</p>
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
        <p class="sub">Switch: {{ isSwitchOn }}</p>
        <SwitchVue name="Switch" v-model:checked="isSwitchOn" />
      </div>
      <div class="ui">
        <h3>Radiobutton</h3>
        <div class="list">
          <p class="sub">Radiobutton: {{ selectedItem }}</p>
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
      <div class="ui">
        <h3>ProgressBar</h3>
        <p class="sub">Percent: {{ percent }}%</p>
        <ButtonVue label="+" @click="clickAdd" />
        <ButtonVue label="-" @click="clickDec" />
        <ProgressBar :percent="percent" />
      </div>
      <div class="ui">
        <h3>Inputs</h3>
        <p class="sub">Value: {{ nameField }}</p>
        <form @submit.prevent="submitForm">
          <Input
            :name="'InputText'"
            :label="'Label1'"
            :placeholder="'Placeholder'"
            v-model:value="v.nameField.$model"
            :error="v.nameField.$errors"
          />

          <Input
            :type="'email'"
            :name="'Email'"
            :label="'Email'"
            :placeholder="'Email'"
            v-model:value="v.emailField.$model"
            :error="v.emailField.$errors"
          />

          <Input
            :name="'Numeric'"
            :label="'Numeric'"
            :placeholder="'Numeric'"
            v-model:value="v.numField.$model"
            :error="v.numField.$errors"
          />

          <Input
            :type="'password'"
            :name="'Password'"
            :label="'Password'"
            :placeholder="'Password'"
            v-model:value="passField"
          />
          <Input
            :type="'password'"
            :name="'Confirm password'"
            :label="'Confirm password'"
            :placeholder="'Confirm password'"
            v-model:value="v.confirmPassField.$model"
            :error="v.confirmPassField.$errors"
          />

          <Input
            name="Custom field"
            label="Custom field"
            placeholder="Custom field"
            v-model:value="v.customField.$model"
            :error="v.customField.$errors"
          />

          <ButtonVue label="Submit" type="submit" />
        </form>
      </div>
      <div class="ui">
        <h3>Tabs</h3>
        <p class="sub">SelectTab: {{ selectTab }}</p>
        <TabsVue :tabs="tabs" :selectTab="selectTab" @onSelect="changeTab" />
      </div>
      <div class="ui end">
        <h3>Table</h3>
        <TableVue />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/vars.scss";
.ui {
  padding: 10px;
  text-align: left;
}

.end {
  margin-bottom: 30rem;
}

.sub {
  font-size: 1.2rem;
  font-weight: 600;
}

.list {
  margin-bottom: 10px;
}

.column {
  display: flex;
  flex-direction: column;
}
</style>
