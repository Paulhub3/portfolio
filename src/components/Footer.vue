<template>
    <footer class="flex flex-col items-center justify-center mt-32 bg-[#000000]">
        <div class="flex flex-col items-center justify-center space-y-16 mt-24 mb-16 px-4">
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="grid grid-cols-3 gap-4 md:grid md:grid-cols-6 md:gap-8">
                <div v-for="link in Links">
            
                    <a  :href="link.link"  class="text-base lg:text-xl font-sans font-medium transition duration-300 ease-in-out text-slate-300 hover:text-[#114ba1]">
                        {{link.name}}
                    </a>
                
                </div>
            </div>

            <!---- Social Media Link Button  ---->
            <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="grid grid-cols-5 gap-5 md:gap-8">
                <div
                class="px-2 py-2 transition duration-300 rounded-md shadow-2xl bg-slate-300 w-9 h-9 md:w-12 md:h-12 drop-shadow-2xl hover:scale-75"
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
                class="px-2 py-2 transition duration-300 rounded-md shadow-2xl bg-slate-300 w-9 h-9 md:w-12 md:h-12   drop-shadow-2xl hover:scale-75"
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
                class="px-2 py-2 transition duration-300 rounded-md shadow-2xl bg-slate-300 w-9 h-9 md:w-12 md:h-12  drop-shadow-2xl hover:scale-75"
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
                class="px-2 py-2 transition duration-300 rounded-md shadow-2xl bg-slate-300 w-9 h-9 md:w-12 md:h-12  drop-shadow-2xl hover:scale-75"
                >
                <a href="https://github.com/Paulhub3">
                    <img
                    src="/icons/SkillIconsGithubDark.svg"
                    class="w-6 mx-auto"
                    alt="SkillIconsGithubDark"
                    />
                </a>
                </div>

                <div
                class="px-2 py-2 transition duration-300 rounded-md shadow-2xl bg-slate-300 w-9 h-9 md:w-12 md:h-12 drop-shadow-2xl hover:scale-75"
                >
                <a href="https://www.facebook.com/profile.php?id=100084051482978">
                    <img
                    src="/icons/EntypoSocialFacebook.svg"
                    class="w-6 mx-auto"
                    alt="EntypoSocialFacebook"
                    />
                </a>
                </div>
            </div>
        </div>

        <!--- White Line --->
        <div class="bg-white w-full  h-0.5"></div>

         <!--- Write up div --->
        <div class="mb-3 mt-3">
            <h6 class="text-sm lg:text-base text-center font-medium text-white tracking-wider">2023 Paul Somto © All Rights Reserved</h6>
        </div>
    </footer>
</template>
<script>
export default {

    setup(){
        let Links = [
            {name: 'Home', link: '/#home'},
            {name: 'About', link: '/#about'},
            {name: 'Skill', link: '/#skill'},
            {name: 'Services', link: '/#services'},
            {name: 'Portfolio', link: '/#portfolio'},
            {name: 'Contact', link: '/#contact'},
        ]
        return{Links}
        
    }
}
</script>