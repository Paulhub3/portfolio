<script setup>
import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
</script>

<template>
  <!-- Large Screen -->
  <Swiper
    class="hidden lg:flex w-[1200px] py-10"
    :slides-per-view="1"
    :space-between="50"
    :modules="[Pagination, A11y, Autoplay]"
    navigation
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: 7000,
      disableOnInteraction: false,
      disableOnTouch: false,
    }"
    grab-cursor
  >
    <!--- Grid Box Slider 1 --->
    <SwiperSlide data-aos="fade-up" data-aos-duration="3000"  class="lg:grid lg:grid-cols-3 lg:gap-5">
      <!--- Box 1--->
      <div class="feature-card w-[350px] bg-white">
        <div class="px-6 py-6 space-y-6">
          <p
            class="font-sans text-xs tracking-wider text-gray-700 group-hover:text-white"
          >
            Great professionalism how you handled the project, your delivery was uncanny.
            And your suggestions were just amazing 😊 . Highly recommended.
          </p>

          <div class="flex flex-row space-x-4">
            <div class="bg-center bg-cover">
              <img
                src="/images/pauline.jpg"
                class="h-10 mx-auto rounded-full w-11"
                alt="pfimage.jpg"
              />
            </div>

            <div class="">
              <h2 class="font-sans text-sm font-semibold text-gray-800">
                Pauline Ademola B.
              </h2>

              <p class="font-sans text-xs text-gray-700">Web developer,Influencer</p>
            </div>
          </div>
        </div>
      </div>
      <!--- // Box 1 --->

      <!--- Box 2--->
      <div class="feature-card w-[350px] h-44 bg-white">
        <div class="px-6 py-6 space-y-6">
          <p
            class="font-sans text-xs tracking-wider text-gray-700 group-hover:text-white"
          >
            Its amazing how you did exactly what I envisioned without much information and
            right on time. Bravo! you are my go-to developer from here on 😌
          </p>

          <div class="flex flex-row space-x-4">
            <div class="bg-center bg-cover">
              <img
                src="/images/James.jpg"
                class="h-10 mx-auto rounded-full w-11"
                alt="pfimage.jpg"
              />
            </div>

            <div class="">
              <h2 class="font-sans text-sm font-semibold text-gray-800">
                James Ekwueme P
              </h2>

              <p class="font-sans text-xs text-gray-700">Model</p>
            </div>
          </div>
        </div>
      </div>
      <!--- // Box 2 --->

      <!--- Box 3--->
      <div class="feature-card w-[350px] h-44 bg-white">
        <div class="px-6 py-6 space-y-6">
          <p
            class="font-sans text-xs tracking-wider text-gray-700 group-hover:text-white"
          >
            Its great collaborating with you, your contributions made our product stand
            out and our customers are excited about the new updates. Simply amazing, well
            done.
          </p>

          <div class="flex flex-row space-x-4">
            <div class="bg-center bg-cover">
              <img
                src="/images/aja.avif"
                class="h-10 mx-auto rounded-full w-11"
                alt="pfimage.jpg"
              />
            </div>

            <div class="">
              <h2 class="font-sans text-sm font-semibold text-gray-800">
                Ajah Ebuka joshua
              </h2>

              <p class="font-sans text-xs text-gray-700">Web developer</p>
            </div>
          </div>
        </div>
      </div>
      <!--- // Box 3 --->
    </SwiperSlide>
    <!--- // Grid Box Slider 1 --->

    <!--- Grid Box Slider 2 --->
    <SwiperSlide class="lg:grid lg:grid-cols-3 lg:gap-5">
      <!--- Box 1--->
      <div class="feature-card w-[350px] h-44 bg-white">
        <div class="px-6 py-6 space-y-6">
          <p
            class="font-sans text-xs tracking-wider text-gray-700 group-hover:text-white"
          >
            Its amazing how you did exactly what I envisioned without much information and
            right on time. Bravo! you are my go-to developer from here on 😌
          </p>

          <div class="flex flex-row space-x-4">
            <div class="bg-center bg-cover">
              <img
                src="/images/James.jpg"
                class="h-10 mx-auto rounded-full w-11"
                alt="pfimage.jpg"
              />
            </div>

            <div class="">
              <h2 class="font-sans text-sm font-semibold text-gray-800">
                James Ekwueme P
              </h2>

              <p class="font-sans text-xs text-gray-700">Model</p>
            </div>
          </div>
        </div>
      </div>
      <!--- // Box 1 --->

      <!--- Box 2--->
      <div class="feature-card w-[350px] h-44 bg-white">
        <div class="px-6 py-6 space-y-6">
          <p
            class="font-sans text-xs tracking-wider text-gray-700 group-hover:text-white"
          >
            Its great collaborating with you, your contributions made our product stand
            out and our customers are excited about the new updates. Simply amazing, well
            done.
          </p>

          <div class="flex flex-row space-x-4">
            <div class="bg-center bg-cover">
              <img
                src="/images/aja.avif"
                class="h-10 mx-auto rounded-full w-11"
                alt="pfimage.jpg"
              />
            </div>

            <div class="">
              <h2 class="font-sans text-sm font-semibold text-gray-800">
                Ajah Ebuka joshua
              </h2>

              <p class="font-sans text-xs text-gray-700">Web developer</p>
            </div>
          </div>
        </div>
      </div>
      <!--- // Box 2 --->

      <!--- Box 3--->
      <div class="feature-card w-[350px] h-44 bg-white">
        <div class="px-6 py-6 space-y-6">
          <p
            class="font-sans text-xs tracking-wider text-gray-700 group-hover:text-white"
          >
            Its been a great experience for my customers on the improvement you made on
            website. Personally I rate you 10 stars, even more if there is more to give 😇
            .
          </p>

          <div class="flex flex-row space-x-4">
            <div class="bg-center bg-cover">
              <img
                src="/images/pfimage.jpg"
                class="h-10 mx-auto rounded-full w-11"
                alt="pfimage.jpg"
              />
            </div>

            <div class="">
              <h2 class="font-sans text-sm font-semibold text-gray-800">
                Latifa Adekunke Funke
              </h2>

              <p class="font-sans text-xs text-gray-700">
                Content Creator and Influencer
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--- // Box 3 --->
    </SwiperSlide>
    <!--- // Grid Box Slider 2 --->

    <!--- Grid Box Slider 3 --->
    <SwiperSlide class="lg:grid lg:grid-cols-3 lg:gap-5">
      <!--- Box 1--->
      <div class="feature-card w-[350px] h-44 bg-white">
        <div class="px-6 py-6 space-y-6">
          <p
            class="font-sans text-xs tracking-wider text-gray-700 group-hover:text-white"
          >
            Its great collaborating with you, your contributions made our product stand
            out and our customers are excited about the new updates. Simply amazing, well
            done.
          </p>

          <div class="flex flex-row space-x-4">
            <div class="bg-center bg-cover">
              <img
                src="/images/aja.avif"
                class="h-10 mx-auto rounded-full w-11"
                alt="pfimage.jpg"
              />
            </div>

            <div class="">
              <h2 class="font-sans text-sm font-semibold text-gray-800">
                Ajah Ebuka joshua
              </h2>

              <p class="font-sans text-xs text-gray-700">Web developer</p>
            </div>
          </div>
        </div>
      </div>
      <!--- // Box 1 --->

      <!--- Box 2--->
      <div class="feature-card w-[350px] bg-white">
        <div class="px-6 py-6 space-y-6">
          <p
            class="font-sans text-xs tracking-wider text-gray-700 group-hover:text-white"
          >
            Great professionalism how you handled the project, your delivery was uncanny.
            And your suggestions were just amazing 😊 . Highly recommended.
          </p>

          <div class="flex flex-row space-x-4">
            <div class="bg-center bg-cover">
              <img
                src="/images/pauline.jpg"
                class="h-10 mx-auto rounded-full w-11"
                alt="pfimage.jpg"
              />
            </div>

            <div class="">
              <h2 class="font-sans text-sm font-semibold text-gray-800">
                Pauline Ademola B.
              </h2>

              <p class="font-sans text-xs text-gray-700">Web developer,Influencer</p>
            </div>
          </div>
        </div>
      </div>
      <!--- // Box 2 --->

      <!--- Box 3--->
      <div class="feature-card w-[350px] h-44 bg-white">
        <div class="px-6 py-6 space-y-6">
          <p
            class="font-sans text-xs tracking-wider text-gray-700 group-hover:text-white"
          >
            Its been a great experience for my customers on the improvement you made on
            website. Personally I rate you 10 stars, even more if there is more to give 😇
            .
          </p>

          <div class="flex flex-row space-x-4">
            <div class="bg-center bg-cover">
              <img
                src="/images/pfimage.jpg"
                class="h-10 mx-auto rounded-full w-11"
                alt="pfimage.jpg"
              />
            </div>

            <div class="">
              <h2 class="font-sans text-sm font-semibold text-gray-800">
                Latifa Adekunke Funke
              </h2>

              <p class="font-sans text-xs text-gray-700">
                Content Creator and Influencer
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--- // Box 3 --->
    </SwiperSlide>
    <!--- // Grid Box Slider 3 --->

    <!--- Grid Box Slider 4 --->
    <SwiperSlide class="lg:grid lg:grid-cols-3 lg:gap-5">
      <!--- Box 1--->
      <div class="feature-card w-[350px] h-44 bg-white">
        <div class="px-6 py-6 space-y-6">
          <p
            class="font-sans text-xs tracking-wider text-gray-700 group-hover:text-white"
          >
            Wow! you really are awesome with your work, your delivery is apt and precise
            to the last detail, I am loving every single part of it. Highly Recommended.
          </p>

          <div class="flex flex-row space-x-4">
            <div class="bg-center bg-cover">
              <img
                src="/images/avatar.jpg"
                class="h-10 mx-auto rounded-full w-11"
                alt="pfimage.jpg"
              />
            </div>

            <div class="">
              <h2 class="font-sans text-sm font-semibold text-gray-800">
                Bamidele Adekunle Princess
              </h2>

              <p class="font-sans text-xs text-gray-700">Model and Photography</p>
            </div>
          </div>
        </div>
      </div>
      <!--- // Box 1 --->

      <!--- Box 2--->
      <div class="feature-card w-[350px] h-40 bg-white">
        <div class="px-6 py-6 space-y-6">
          <p
            class="font-sans text-xs tracking-wider text-gray-700 group-hover:text-white"
          >
            I love what I am seeing, Great outcome, I never expected what I got. Awesome
            five stars.
          </p>

          <div class="flex flex-row space-x-4">
            <div class="bg-center bg-cover">
              <img
                src="/images/confidence.jpeg"
                class="h-10 mx-auto rounded-full w-11"
                alt="pfimage.jpg"
              />
            </div>

            <div class="">
              <h2 class="font-sans text-sm font-semibold text-gray-800">
                Confidence Esther U
              </h2>

              <p class="font-sans text-xs text-gray-700">
                UI/UX Designer,Content Creator
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--- // Box 2 --->

      <!--- Box 3--->
      <div class="feature-card w-[350px] h-44 bg-white">
        <div class="px-6 py-6 space-y-6">
          <p
            class="font-sans text-xs tracking-wider text-gray-700 group-hover:text-white"
          >
            You made Telling my stories and sharing work awesome, you did an amazing job.
            Worthy of every penny. Sure Dev. Plug 😌
          </p>

          <div class="flex flex-row space-x-4">
            <div class="bg-center bg-cover">
              <img
                src="/images/rexpro.jpg"
                class="h-10 mx-auto rounded-full w-11"
                alt="Rexpro"
              />
            </div>

            <div class="">
              <h2 class="font-sans text-sm font-semibold text-gray-800">RexPro Media</h2>

              <p class="font-sans text-xs text-gray-700">Photography</p>
            </div>
          </div>
        </div>
      </div>
      <!--- // Box 3 --->
    </SwiperSlide>
    <!--- // Grid Box Slider 4 --->
  </Swiper>
  <!-- // End Large Screen -->
</template>
