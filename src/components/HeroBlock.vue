<template>
  <div class="hero">
    <img alt="hero" src="../assets/background/hero.jpg" />
    <div class="luxury">
      <div class="text">
        <h2>Luxury homeware for people who love timeless design quality</h2>
        <p>Shop the new Spring 2022 collection today</p>
      </div>
      <CustomButton @click="handleClick" :width="'170px'"
        >View collection</CustomButton
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomButton from "@/components/customComponents/CustomButton.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HeroBlock",
  components: {
    CustomButton,
  },
  methods: {
    handleClick() {
      console.log("hello");
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/vars.scss";
.hero {
  position: relative;

  img {
    display: block;
  }
}

.luxury {
  width: 630px;
  height: 444px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 130px;
  right: 80px;
  padding: 4.8rem 6rem;
  background-color: $colorBase;

  .text {
    text-align: start;

    h2 {
      font-family: $fontClash;
      line-height: 4.4rem;
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.8rem;
      line-height: 1.5;
    }
  }
}
</style>
