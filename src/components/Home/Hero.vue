<template>
    <section class="relative w-full h-screen -mt-15.5 bg-fixed bg-center bg-cover bg-no-repeat"
        :style="`background-image: url('${heroBg}')`">
        <div class="absolute inset-0 bg-gradient-to-tr from-[#140610]/50 to-[#0084D6]/40"></div>
        <div class="relative z-20 max-w-6xl mx-auto h-full grid grid-col-2 items-center text-white pt-44">
            <div class="col-span-1">
                <h1 class="text-6xl font-bold leading-normal scale-y-80">
                    EFFORTLESSLY BLEND<br />
                    COMFORT & STYLE!
                </h1>
            </div>
            <div class="col-span-1 flex items-center -mt-81">
                <router-link to="/everything"
                    class="bg-[#fceef5] text-[#0f172a] py-3 px-8 text-sm rounded-none shadow-lg font-semibold hover:bg-[#0f172a] hover:text-white">
                    SHOP NOW
                </router-link>
            </div>
        </div>
    </section>



</template>

<script setup>
import { useRoute } from 'vue-router'
import heroBg from '@/assets/jcf/jasmine_1_1920x1080.jpg'

const route = useRoute()

</script>

<style scoped>
#hero-img {
    height: 100%;
}

#hero-header {
    font-family: 'Montserrat', sans-serif;
}
</style>