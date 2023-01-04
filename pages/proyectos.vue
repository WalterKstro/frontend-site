<script setup>
    import { projectQuery } from '~/queries/projectPage'
    
    const ProjectsCiteSectionCite   =   defineAsyncComponent(()=>import('~/components/projects/cite/SectionCite.vue'))
    const LazyCite                  =   defineAsyncComponent(()=>import('~/components/skeleton/projects/cite/Cite.vue'))
    const { data,pending }          =   await useLazyAsyncQuery(projectQuery);
    const cite = ref({})

    setTimeout(()=>{
        cite.value  =   data.value.projectsPage.cite;
    },100)
    
    provide('cite',cite)


    useHead({
        title:'Proyectos'
    })
</script>

<template>
        <ProjectsCiteSectionCite>
            <template #cite v-if="pending">
                <LazyCite/>
            </template>
            <template v-else #cite="{cite}">
                <p class="col-start-1 col-span-2 text-2xl font-semibold
                    md:col-span-3
                    lg:col-start-2 lg:col-span-5">
                        <Icon name="bx:bxs-quote-left" />
                            {{ cite.cite }}
                        <Icon name="bxs:quote-right" />
                    </p>
                    <p class="col-start-1 col-span-1
                    lg:col-start-2 lg:col-span-1">{{cite.author}}</p>    
            </template>
        </ProjectsCiteSectionCite>
</template>