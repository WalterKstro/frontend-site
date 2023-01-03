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
            <span class="block text-2xl md:text-3xl text-light font-titles font-semibold">{{ data.homePage.greeting }}</span>
            <h1 class="font-bold text-orange">{{data?.homePage.name}}</h1>
            <span class="block text-2xl md:text-3xl text-light font-titles font-semibold">{{data.homePage.position}}</span>
        </div>
        </template>
        <template #extract>
            <div class="col-span-2 mb-4 text-light
                    md:col-span-4
                    lg:col-span-5 lg:row-start-2"><p>{{ data.homePage.extract }}</p></div>
        </template>
    </SectionIntroduction>

    <HomeSectionTechnologies/>
    <HomeSectionProjects/>
    <HomeAreasSectionAreas/>
    <HomeContactForm/>
</template>
<script setup>
    import { homeQuery } from '../queries/homePage';

    const SectionIntroduction = defineAsyncComponent(()=>import('~/components/home/introduction/SectionIntroduction.vue'))
    const HomeSectionProjects = defineAsyncComponent(()=>import('~/components/home/projects/SectionProjects.vue'));
    const LazyTitle = defineAsyncComponent(()=>import('~/components/skeleton/home/introduction/Titles.vue'));
    const LazyExtract = defineAsyncComponent(()=>import('~/components/skeleton/home/introduction/Extract.vue'));
    const HomeContactForm = defineAsyncComponent(()=>import('~/components/home/contact/Form.vue'));
    const HomeSectionTechnologies = defineAsyncComponent(()=>import('~/components/home/introduction/Technologies.vue'));
    const HomeAreasSectionAreas = defineAsyncComponent(()=>import('~/components/home/areas/SectionAreas.vue'));

    const { data,pending } = await useLazyAsyncQuery(homeQuery);
    
    const images = data.value.homePage.imagesCollection.items
    const functionsFrontend = data.value.homePage.frontend;
    const functionsBackend = data.value.homePage.backend;
    
    provide('functionsFrontend', functionsFrontend)
    provide('functionsBackend', functionsBackend)
    provide('images', images)
    
    useHead({
        title:'Inicio'
    })

</script>