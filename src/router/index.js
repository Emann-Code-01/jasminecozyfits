import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EverythingView from '../views/EverythingView.vue';
import GymWearView from '../views/GymWearView.vue';
import AccesoriesView from '../views/AccessoriesView.vue';
import NightWearView from '../views/NightWearView.vue'
import ContactUs from '../components/pages/ContactUs.vue';

const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/everything',
            name: 'everything',
            component: EverythingView,
        },
        {
            path: '/gym-wear',
            name: 'gym-wear',
            component: GymWearView,
        },
        {
            path: '/accessories',
            name: 'accessories',
            component: AccesoriesView,
        },
        {
            path: '/night-wear',
            name: 'night-wear',
            component: NightWearView,
        },
        {
            path: '/contact-us',
            name: 'contact-us',
            component: ContactUs,
        }
    ],
});

export default router;