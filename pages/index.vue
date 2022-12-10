<template>
    <SectionIntroduction v-if="pending">
        <template #titles>
            <div role="status" class="col-span-2 mb-8 animate-pulse
                    md:col-span-4
                    lg:col-span-5">
                <div class="h-4 bg-gray-200 rounded-full dark:bg-light w-48"></div>
                <div class="h-8 bg-gray-200 rounded-full dark:bg-light my-4"></div>
                <div class="h-4 bg-gray-200 rounded-full dark:bg-light mb-8"></div>
            </div>
        </template>
        <template #extract>
            <div role="status" class="col-span-2 mb-4 text-light
                                md:col-span-4
                                lg:col-span-5 lg:row-start-2 animate-pulse">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-light mb-2"></div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-light mb-2"></div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-light mb-2"></div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-light mb-2"></div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-light"></div>
            </div>
        </template>
    </SectionIntroduction>
    
    <SectionIntroduction v-else>
        <template #titles>
            <div class="col-span-2 mb-8
                    md:col-span-4
                    lg:col-span-5">
            <span class="block text-2xl md:text-3xl text-light">{{ data?.homePage.greeting }}</span>
            <h1 class="font-bold text-orange">{{data?.homePage.name}}</h1>
            <span class="block text-2xl md:text-3xl text-light">{{data?.homePage.position}}</span>
        </div>
        </template>
        <template #extract>
            <div class="col-span-2 mb-4 text-light
                    md:col-span-4
                    lg:col-span-5 lg:row-start-2"><p>{{ data?.homePage.extract }}</p></div>
        </template>
    </SectionIntroduction>
</template>
<script lang="ts" setup>
    import { HomePage } from '../Interfaces/Interfaces';
    import { homeQuery } from '../queries/homePage';
    import {SkeletonText} from 'skeleton-elements/vue';

    import 'skeleton-elements/css/skeleton-elements.css'
    const SectionIntroduction = defineAsyncComponent(()=>import('../components/home/introduction/SectionIntroduction.vue'))

    useHead({
        title:'Inicio'
    })

    const { data,pending } = await useLazyAsyncQuery<HomePage>(homeQuery); 
</script>