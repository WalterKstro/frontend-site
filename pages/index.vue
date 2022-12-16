<template>
    <SectionIntroduction v-if="pending">
        <template #titles><LazyTitle/></template>
        <template #extract><LazyExtract/></template>
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

    <SectionProjects :images="images"/>
</template>
<script lang="ts" setup>
    import { HomePage } from '../Interfaces/Interfaces';
    import { homeQuery } from '../queries/homePage';
    const SectionIntroduction = defineAsyncComponent(()=>import('../components/home/introduction/SectionIntroduction.vue'));
    const SectionProjects = defineAsyncComponent(()=>import('~/components/home/projects/SectionProjects.vue'));
    const LazyTitle = defineAsyncComponent(()=>import('~/components/skeleton/home/introduction/Titles.vue'));
    const LazyExtract = defineAsyncComponent(()=>import('~/components/skeleton/home/introduction/Extract.vue'));

    useHead({
        title:'Inicio'
    })
    const { data,pending } = await useLazyAsyncQuery<HomePage>(homeQuery);
    const images = data.value?.homePage.imagesCollection.items
</script>