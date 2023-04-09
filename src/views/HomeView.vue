<script setup>
import SecondSection from "../components/home/SecondSection.vue";
import ThirdSection from "../components/home/ThirdSection.vue";
import FourthSection from "../components/home/FourthSection.vue";
import FifthSection from "../components/home/FifthSection.vue";
import SixthSection from "../components/home/SixthSection.vue";
import SeventhSection from "../components/home/SeventhSection.vue";
import EightSection from "../components/home/EightSection.vue";
import AOS from 'aos';
AOS.init();
</script>

<template>
  <div id="home" class="relative z-30 w-full bg-center bg-cover w-fixed h-96">
    <!-- Image --->
    <img
      src="/images/background.jpg"
      alt="background"
      class="w-full h-[500px] md:h-[550px] bg-no-repeat object-cover absolute mix-blend-overlay"
    />

    <!-- Text Div --->
    <div
      class="absolute z-40 w-full px-3 text-justify rounded-lg space-y-9 lg:space-y-12 md:px-44 py-14 top-4"
    >
      <div class="space-y-4">
        <h3 class="text-base font-medium tracking-wider text-slate-400">
          HELLO, MY NAME IS
        </h3>

        <div class="bg-slate-300 w-20 h-0.5"></div>
      </div>

      <div class="space-y-2">
        <div>
          <h1
            style="font-family: 'Montserrat', sans-serif"
            class="font-sans text-4xl font-bold tracking-wide text-white d-md-flex:text-5xl"
          >
            Paul
          </h1>

          <h1
            style="font-family: 'Montserrat', sans-serif"
            class="font-sans text-5xl font-bold tracking-wide text-white md:text-6xl"
          >
            Somto
          </h1>
        </div>

        <h3
          style="font-font-family: 'Montserrat', sans-serif"
          class="text-4xl font-medium tracking-wider md:text-5xl text-slate-300"
        >
          Web Developer
        </h3>
      </div>

      <div class="flex flex-row space-x-6">
        <div>
          <a href="" class="px-4 py-2 font-medium text-white rounded-md button w-80">
            Resume
          </a>
        </div>

        <div>
          <a href="" class="px-4 py-2 font-medium text-white rounded-md button w-80">
            Portfolio
          </a>
        </div>
      </div>

      <!---- Social Media Link Button  ---->
      <div class="flex flex-row space-x-6">
        <div
          class="px-2 py-2 transition duration-300 rounded-md shadow-2xl bg-slate-300 w-9 h-9 drop-shadow-2xl hover:scale-75"
        >
          <a href="https://www.instagram.com/icromguy/">
            <img
              src="/icons/EntypoSocialInstagram.svg"
              class="w-6 mx-auto"
              alt="SkillIconsInstagram"
            />
          </a>
        </div>

        <div
          class="px-2 py-2 transition duration-300 rounded-md shadow-2xl bg-slate-300 w-9 h-9 drop-shadow-2xl hover:scale-75"
        >
          <a href="https://www.linkedin.com/in/paul-somto-21461224a/">
            <img
              src="/icons/EntypoSocialLinkedin.svg"
              class="w-6 mx-auto"
              alt="EntypoSocialLinkedin"
            />
          </a>
        </div>

        <div
          class="px-2 py-2 transition duration-300 rounded-md shadow-2xl bg-slate-300 w-9 h-9 drop-shadow-2xl hover:scale-75"
        >
          <a href="https://twitter.com/PaulSomto404">
            <img
              src="/icons/EntypoSocialTwitter.svg"
              class="w-6 mx-auto"
              alt="EntypoSocialTwitter"
            />
          </a>
        </div>

        <div
          class="px-2 py-2 transition duration-300 rounded-md shadow-2xl bg-slate-300 w-9 h-9 drop-shadow-2xl hover:scale-75"
        >
          <a href="https://github.com/Paulhub3">
            <img
              src="/icons/SkillIconsGithubDark.svg"
              class="w-6 mx-auto"
              alt="SkillIconsGithubDark.svg"
            />
          </a>
        </div>
      
      </div>
    </div>
  </div>

  <!-- Home Second Layout Section -->
  <main id="about">
    <SecondSection />
  </main>

  <div  class="ml-4 md:ml-8 lg:ml-14 bg-slate-300 w-11/12 mt-20 h-0.5"></div>

  <!-- Home Third Layout Section -->
  <main id="skill">
    <ThirdSection />
  </main>

  <div class="ml-4 md:ml-8 lg:ml-14 bg-slate-300 w-11/12 mt-20 h-0.5"></div>

  <!-- Home Fourth Layout Section -->
  <main id="services">
    <FourthSection />
  </main>

  <div class="ml-4 md:ml-8 lg:ml-14 bg-slate-300 w-11/12 mt-20 h-0.5"></div>

  <!-- Fifth Layout Section -->
  <main id="portfolio">
    <FifthSection />
  </main>

  <div class="ml-4 md:ml-8 lg:ml-14 bg-slate-300 w-11/12 mt-20 h-0.5"></div>

  <!-- Sixth Layout Section -->
  <main >
    <SixthSection />
  </main>

  <div class="ml-4 md:ml-8 lg:ml-14 bg-slate-300 w-11/12 mt-20 h-0.5"></div>

  <main>
    <SeventhSection />
  </main>

  <div class="ml-4 md:ml-8 lg:ml-14 bg-slate-300 w-11/12 mt-20 h-0.5"></div>

  <main id="contact">
    <EightSection />
  </main>

  
</template>
