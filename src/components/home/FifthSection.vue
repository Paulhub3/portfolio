<template>
    
    <div  class="flex flex-col items-center justify-center mt-24">

        <div class="space-y-16">

            <!--- Text Div Section --->
            <div data-aos="zoom-in-up" data-aos-duration="3000" class="space-y-3 ">

                <h3 style="font-family: 'Montserrat', sans-serif;" class="text-base text-center  font-medium text-[#114ba1] tracking-wider">
                    LOOK MY PROJECT & JUDGE
                </h3>

                <h1 style="font-family: 'Montserrat', sans-serif;" class="text-2xl font-bold tracking-wider text-center text-gray-800 md:text-6xl">
                    My Portfolio
                </h1>

            </div>


            <!--- Grid Box --->
            <div   class="grid grid-cols-1 gap-5 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-3 lg:gap-5">

                
                <!--- Box 1--->
                <div data-aos="fade-up" data-aos-duration="3000" v-for="grid in Grid"  class="feature-card w-[300px] height-[300px] md:w-[360px] md:height-[360px] bg-white">

                    <div class="px-6 py-3 my-10 space-y-6 md:py-4 md:px-9">

                        <!--- Images --->
                        <span class="shadow-inner">
                            <img :src="grid.img" class="w-56 mx-auto transition ease-in-out duration-400 hover:scale-105" :alt="grid.title">
                        </span>

                        <!--- Title --->
                    <h1 class="text-xl font-bold tracking-wider text-gray-800 group-hover:text-white">
                           {{ grid.title }}
                    </h1>

                    <!--- Description --->
                    <p class="font-sans text-xs font-medium tracking-wider text-gray-800 md:text-base group-hover:text-white">
                        {{ grid.description }}
                    </p>

                        <!--- Demo And Git Hub Button --->
                        <div class="flex flex-row space-x-8">

                            <!--- Demo Button --->
                            <a :href="grid.demo"  class="text-base text-center tracking-wide hover:text-white hover:bg-[#114ba1]  font-sans py-3 px-2 w-24 bg-slate-300 rounded-md  text-slate-900  font-medium">
                                DEMO
                            </a>

                            <!---  Git Hub Button --->
                            <a :href="grid.github"  class="text-base text-center tracking-wide font-sans py-3 px-2 w-24 bg-[#114ba1]  hover:bg-slate-400 hover:text-[#114ba1] transition-all ease-in-out duration-400  rounded-md text-white font-medium">
                                GitHub
                            </a>

                    </div>


                    </div>

                </div>

            </div>
            



        </div>

    </div>


</template>
<script>
export default {

    setup(){

        let Grid = [
            {
                img: '/images/myassence.png',
                title: 'Office Manager',
                description: 'Office Manager for management of inventory, clocking of staffs, schedules, and handling orders',
                demo: 'https://office.myassence.com/',
                github: 'https://github/sanCrystal/staff-management',
            },
            {
                img: '/images/election-blochain.png',
                title: 'Voting on the Blockchain.',
                description: 'Voting on the Blockchain. Experience voting with transparency and accountability like never before. Set up categories register voters, cast the votes ,and display results of winning candidates and more.',
                demo: 'https://zuri-school.vercel.app/',
                github: 'https://github.com/Blockgames-TeamB/ZuriSchool',
            },
            {
                img: '/images/school manager.png',
                title: 'School Manager',
                description: 'School Manager, For all schools. Manage attendances, computes results with ease, ease of communication with students parents, track students and teachers performances easily.',
                demo: 'https://projectx.com/',
                github: 'https://github/sanCrystal/projectx',
            },
            {
                img: '/images/portifiol.png',
                title: 'Portfolio',
                description: 'Portfolio For a Full Stack Developer fot both web2 and web3 applications.',
                demo: 'https://paulsomto.dev/',
                github: 'https://github/sanCrystal/portfolio',
            },
            {
                img: '/images/nestdrive.png',
                title: 'Library on the Blockchain.',
                description: 'Library on the Blockchain. Post contents (books,videos etc). Contents posted can be made publicly accessible to all, or a selected number of address. Inappropriate contents can be flagged and blacklisted if a number of threshold of address vote for it to be removed.',
                demo: 'https://nestdrive.surge.sh/',
                github: 'https://github.com/TeamResilient/NestDrive',
            },

            {
                img: '/images/resturant.png',
                title: 'Restaurant Manager',
                description: 'Restaurant School Manager for all restaurant. manage table reservation, get food menu, order food, and get food details, and track sells.',
                demo: 'https://Resturant.com',
                github: 'https://github.com/Paulhub3/-Resturant',
            },
        ]

        return{Grid}
        
    }
}
</script>

