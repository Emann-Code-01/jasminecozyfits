<template>
    <section class="relative w-ful min-h-full overflow-hidden pb-56">
        <img src="../../assets/jcf/jasmine_1_1920x1080.jpg" alt="Hero Background"
            class="fixed top-0 left-0 w-full h-full object-cover z-0" style="min-height: 100%; height: 100%;" />
        <div class="relative z-1">
            <div class="grid grid-col-2 gap-5 items-center pt-32 text-white px-1 max-w-6xl mx-auto">
                <Transition name="fade" mode="in-out" duration="300">
                    <div class="col-span-1 leading-0 mt-24">
                        <h1 class="text-5xl font-bold leading-normal scale-y-90" id="hero-header">EFFORTLESSLY BLEND<br>
                            COMFORT &
                            STYLE!</h1>
                    </div>
                </Transition>
                <div class="col-span-1 flex items-center">
                    <router-link to="/everything"
                        class="bg-[#fceef5] text-[#0f172a] py-3 px-8 text-sm rounded-none shadow-lg font-semibold hover:bg-[#0f172a] hover:text-white">
                        SHOP NOW
                    </router-link>
                </div>
            </div>
        </div>
        <div
            class="absolute top-0 left-0 w-full h-full inset-0 bg-gradient-to-tr from-[#140610]/50 to-[#0084D6]/40  bg-transparent pointer-events-none">

        </div>
    </section>


</template>

<script setup>
import { useRoute } from 'vue-router'

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