<template>
    <Suspense>
        <template #default><HomeIntroduction :="propertiesHomeIntroduction" /></template>
        <template #fallback>Loading..</template>
    </Suspense>
</template>

<script lang="ts" setup>
    import { HomePage } from '../Interfaces/Interfaces';
    import { homeQuery } from '../queries/homePage';
    
    const HomeIntroduction = defineAsyncComponent(()=>import('../components/Home/Introduction/Introduction.vue'))

    useHead({
        title:'Inicio'
    })

    const { data,pending } = await useAsyncQuery<HomePage>(homeQuery)
    const propertiesHomeIntroduction = {
        name: data.value?.homePage.name,
        position: data.value?.homePage.position,
        extract: data.value?.homePage.extract,
        greeting: data.value?.homePage.greeting
    }
    
</script>