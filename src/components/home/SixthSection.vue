<template>
  <div class="flex flex-col items-center justify-center mt-24">
    <div class="space-y-4 lg:space-y-12">
      <!--- Text Div Section --->
      <div data-aos="zoom-in-up" data-aos-duration="3000" class="space-y-3">
        <h3
          style="font-family: 'Montserrat', sans-serif"
          class="text-base text-center font-medium text-[#114ba1] tracking-wider"
        >
          WHAT CLIENTS SAY
        </h3>

        <h1
          style="font-family: 'Montserrat', sans-serif"
          class="text-2xl font-bold tracking-wider text-center text-gray-800 md:text-6xl"
        >
          Testimonial
        </h1>
      </div>

      <Carousel />

      <MobileCarousel />
    </div>
  </div>
</template>

<script setup>
import Carousel from "../Carousel.vue";
import MobileCarousel from "../MobileCarousel.vue";
</script>

<style></style>
