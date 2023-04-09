<template>

    <nav class="sticky top-0 z-50 mx-auto">
        <div class="bg-[#000000] py-1.5 md:py-3.5 px-4 shadow md:flex justify-between items-center">

            <!-- LOGO -->
            <div class="flex items-center">
                <a href="/#home">
                    <img src="/images/logo.png" class="w-16" alt="logo">
                </a>
            </div>

            <span @click="MenuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-5xl text-[#114ba1]">
                <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
            </span>

            <ul class="absolute flex flex-col items-center justify-center w-full px-10 pb-10 duration-700 ease-out bg-black md:flex md:flex-row md:items-center md:px-0 md:pb-0 md:sticky md:w-auto top-16" :class="[open ? 'left-0' : 'left-[-100%]']">
            
                <li class="my-4 md:mx-4 md:my-0" v-for="link in Links">
                
                    <a  :href="link.link"  class="text-xl font-sans font-medium transition duration-300 ease-in-out text-slate-300 hover:text-[#114ba1]">
                        {{link.name}}
                    </a>
                    
                </li>
            
                <div>
                    <a href="https://wa.me/message/3VGQEXEDKGNFF1" rel="noopener noreferrer">
                        <button class="text-base  py-4 px-5 bg-[#114ba1] rounded-md transition duration-300 ease-in-out text-slate-300 shadow-2xl drop-shadow-2xl font-medium">
                             Let's Talk
                        </button>
                    </a>
                </div>
            </ul>
            
        </div>
    </nav>

</template>

<script>
import { ref } from 'vue'
export default {

    setup(){

        let open = ref(false)
        let Links = [
            {name: 'Home', link: '/#home'},
            {name: 'About', link: '/#about'},
            {name: 'Skill', link: '/#skill'},
            {name: 'Services', link: '/#services'},
            {name: 'Portfolio', link: '/#portfolio'},
            {name: 'Contact', link: '/#contact'},
        ]


        function MenuOpen(){
            open.value = !open.value
        }

        return{Links,open,MenuOpen}
        
    }
}
</script>


<style scoped>
    
</style>