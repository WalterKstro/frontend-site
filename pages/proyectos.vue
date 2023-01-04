<script setup>
    import { projectQuery } from '~/queries/projectPage'
    
    const ProjectsCiteSectionCite   =   defineAsyncComponent(()=>import('~/components/projects/cite/SectionCite.vue'))
    const { data,pending }          =   await useLazyAsyncQuery(projectQuery);
    const cite = ref({})

    setTimeout(()=>{
        cite.value =   data.value.projectsPage.cite;
    },100)

    provide('cite',cite)

    useHead({
        title:'Proyectos'
    })
</script>

<template>
        <ProjectsCiteSectionCite/>
</template>