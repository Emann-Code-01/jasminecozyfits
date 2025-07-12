<template>
  <nav :class="navbarClass">
    <div class="mx-auto max-w-8xl text-nowrap pt-0.5 pb-5 sm:px-6 md:px-8 bg-[#00000012]">
      <div class="flex justify-between items-center uppercase mt-4" id="nav">
        <nav class="flex items-center text-sm font-bold">
          <router-link to="/" :class="[
            route.path === '/' ? 'invert brightness-200' : '',
            'outline-none ring-0 focus:outline-none focus:ring-0']">
            <img :src="HeaderPic" alt="Logo" class="w-37 h-17 border-0 outline-none ring-0 shadow-none" />
          </router-link>

          <ul class="flex gap-6 pl-9 list-none md:gap-3">
            <li><router-link to="/everything"
                :class="[isActiveLink('/everything') ? 'text-black' : ' hover:text-pink-300']">everything</router-link>
            </li>
            <li><router-link to="/gym-wear"
                :class="[isActiveLink('/gym-wear') ? 'text-black' : ' hover:text-pink-300']">gym-wears</router-link>
            </li>
            <li><router-link to="/accessories"
                :class="[isActiveLink('/accessories') ? 'text-black' : ' hover:text-pink-300']">accessories</router-link>
            </li>
            <li><router-link to="/night-wear"
                :class="[isActiveLink('/night-wear') ? 'text-black' : ' hover:text-pink-300']">night-wears</router-link>
            </li>
          </ul>
        </nav>
        <nav class="flex items-center text-[13px] mr-5">
          <ul class="flex gap-8 list-none">
            <li class="text-[13px]"><router-link to="/contact"
                :class="[isActiveLink('/everything') ? 'text-black' : ' hover:text-pink-300']">contact us</router-link>
            </li>
            <div class="cart"><i class="fa fa-shopping-bag"></i>
              <span class="absolute bg-white text-black font-bold -mt-1 text-xs rounded-full px-1.5 -mr-1.5">
                {{ cart.cartItemCount }}
              </span>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script setup>
import HeaderPic from "../assets/jasmine180x60.png";
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import { useCartStore } from '../stores/CartStores'

const route = useRoute()

const cart = useCartStore()

const navbarClass = computed(() =>
  route.path === '/'
    ? 'absolute top-0 left-0 w-full z-30 bg-transparent text-white'
    : route.path === '/about'
      ? 'absolute top-0 left-0 w-full z-30 bg-transparent text-white'
      : 'fixed top-0 left-0 w-full z-50 bg-white shadow-md text-black'
)


const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>


<style scoped>
#nav {
  @apply transition-colors delay-300
}
</style>
