<template>
  <div class="home">
    <HeroBlock />
    <FeaturesBlock />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeroBlock from "@/components/HeroBlock.vue";
import FeaturesBlock from "@/components/FeaturesBlock.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HeroBlock,
    FeaturesBlock,
  },
});
</script>
