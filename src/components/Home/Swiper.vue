<template>
        <section class="relative bg-white object-cover my-20 mx-40">
                <Swiper :modules="[Autoplay, Navigation]" :loop="true"
                        :autoplay="{ delay: 3000, disableOnInteraction: false }" :slides-per-view="5" :space-between="0"
                        navigation :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange"
                        class="mySwiper">
                        <SwiperSlide v-for="(img, idx) in images" :key="idx">
                                <img :src="img.url" :alt="img.alt" :class="img.class" />
                        </SwiperSlide>
                </Swiper>
        </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const images = [
        {
                url: new URL("@/assets/jcf/jasmine-removebg-preview.png", import.meta.url).href,
                class: "w-26 h-7 my-26 ml-20",
                alt: "jcf"
        },
        {
                url: new URL("@/assets/jcf/jasmine-removebg-preview_optimized (2) (1) (1).png", import.meta.url).href,
                class: "my-13 ml-20",
                alt: "jcf-optimized"
        },
        {
                url: new URL("@/assets/jcf/jasmine-removebg-preview.png", import.meta.url).href,
                class: "w-26 h-7 my-26 ml-20",
                alt: "jcf"
        },
        {
                url: new URL("@/assets/jcf/jasmine-removebg-preview_optimized (2) (1) (1).png", import.meta.url).href,
                class: "my-13 ml-20",
                alt: "jcf-optimized"
        },
        {
                url: new URL("@/assets/jcf/jasmine-removebg-preview.png", import.meta.url).href,
                class: "w-26 h-7 my-26 ml-20",
                alt: "jcf"
        },
        {
                url: new URL("@/assets/jcf/jasmine-removebg-preview_optimized (2) (1) (1).png", import.meta.url).href,
                class: "my-13 ml-20",
                alt: "jcf-optimized"
        },
];

const onSwiper = (swiper) => {
        console.log(swiper);
};
const onSlideChange = () => {
        console.log('slide change');
};
</script>