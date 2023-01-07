<template>
    <div class="col-start-1 col-span-2
                md:col-span-6
                lg:col-span-8">
        <swiper
            :pagination="true"
            :direction="'horizontal'"
            :mousewheel="true"
            :slides-per-view="1"
            :space-between="50"
            :modules="[Pagination,Mousewheel]">
            effect="cards"
            <swiper-slide v-for="({url}) in images" :key="url">
                <nuxt-img provider="contentful" :src="url" placeholder preload loading="lazy" class="rounded-lg"/>
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