<template>
    <footer class="bg-white text-black bottom-0 left-0 relative w-full">
        <div class="mx-auto w-full py-19 border-solid border-0 px-0 border-t-1 border-t-[#dddd]">
            <div class="grid grid-col-3 gap-6 place-items-center pr-5">
                <div class="col-span-1">
                    <div class="flex justify-between items-center">
                        <div class="grid grid-cols-2 place-items-start">
                            <div class="col-span-1">
                                <div class="grid grid-col-2 gap-10 pt-3">
                                    <img :src="JCF" alt="JCF logo" class="col-span-1 w-[189px] h-[63px]">
                                    <div class="col-span-1 text-2xl font-bold text-[#0f172a]">
                                        <h1>The best look anytime, anywhere.</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-1 text-[40px] mb-28px font-bold leading-[1.2em] scale-y-90"
                                id="footer-text">
                                <h1>SHOP FASHIONABLE GYM &<br> NIGHT WEARS AND<br> ACCESSORIES.</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="justify-center mt-16 col-span-1 w-full flex border-solid font-normal border-0 px-0 border-t-1 border-t-[#dddd] py-5"
                    id="footer-btm">
                    <div class="block isolate pt-7">
                        <div class="grid max-w-[1200px] pt-10 mx-auto place-items-center grid-cols-2">
                            <div class="col-span-1 pr-38 text-[#454F5E] text-[15px]" id="footer-text">
                                <p class="tracking-tight">Copyright © 2025 jasminecozyfits. Powered by jasminecozyfits.
                                </p>
                            </div>
                            <div class="col-span-1 text-[17px] flex gap-9 mr-40 pr-5 justify-between ">
                                <div class="flex justify-between items-center gap-2 hover:text-pink-500">
                                    <div class="w-[18px] h-[18px] pb-6"><i class="pi pi-instagram"></i></div>
                                    <a href="https://www.instagram.com/jasmine_cozyfits_/?igsh=b3gycnU0bmtmczE5&utm_source=qr#"
                                        target="_blank">Instagram</a>
                                </div>
                                <div class="flex justify-between items-center gap-2 hover:text-pink-500">
                                    <div class="w-[18px] h-[18px] pb-6"><i class="pi pi-tiktok"></i></div>
                                    <a href="https://www.tiktok.com/@jasmine.cozyfits?_t=ZM-8wbmqoP5joD&_r=1"
                                        target="_blank">TikTok</a>
                                </div>
                                <div class="flex justify-between items-center gap-2 hover:text-pink-500">
                                    <div class="w-[18px] h-[18px] pb-6"><i class="pi pi-whatsapp"></i></div>
                                    <a href="https://api.whatsapp.com/send?phone=wa.me/2348080240140"
                                        target="_blank">Whatsapp</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import JCF from '../assets/jasmine180x60.png'
</script>

<style scoped>
#footer-text {
    font-family: 'Montserrat', sans-serif;
}

#footer-btm {
    font-family: 'Source Sans Pro', sans-serif;
}
</style>