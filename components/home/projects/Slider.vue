<template>
    <div class="col-start-1 col-span-2
                md:col-start-1 md:col-span-6
                lg:col-start-5 lg:col-span-8">
        <swiper
            :pagination="true"
            :direction="'horizontal'"
            :mousewheel="true"
            :slides-per-view="1"
            :space-between="50"
            :modules="[Pagination,Mousewheel]">
            effect="cards"
            <swiper-slide v-for="({url}) in images" :key="url">
                <img class="rounded-lg" :src="url" alt="foto proyecto">
            </swiper-slide>
        </swiper>
    </div>
</template>


<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import {Pagination,Mousewheel} from 'swiper'
    import 'swiper/css/bundle';
    const images = inject('images')
</script>