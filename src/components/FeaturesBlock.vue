<template>
  <div class="features">
    <h3>What makes our brand different</h3>
    <div class="features-list">
      <div class="feature">
        <div class="header">icon</div>
        <div class="title">Next day as standard</div>
        <div class="description">
          Order before 3pm and get your order the next day as standard
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//import HeroBlock from "@/components/HeroBlock.vue";

export default defineComponent({
  name: "FeaturesBlock",
  //   components: {
  //     HeroBlock,
  //   },
});
</script>

<style lang="scss" scoped>
@import "@/styles/vars.scss";

.features {
  padding: 80px;
  color: $darkPrimary;
}

.features-list {
  margin-top: 3.6rem;
}
</style>
