<script setup>
    import { projectQuery } from '~/queries/projectPage'

    const ProjectsCiteSectionCite = defineAsyncComponent(()=>import('~/components/projects/cite/SectionCite.vue'))
    const { data,pending } = await useLazyAsyncQuery(projectQuery);
    const {cite} = data.value.projectsPage;

    provide('cite',cite)
    useHead({
        title:'Proyectos'
    })
</script>

<template>
    <h1 v-if="pending">Loading data...</h1>
    <ProjectsCiteSectionCite v-else/>    
</template>