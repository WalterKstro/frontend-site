<script setup>
    import { projectQuery } from '~/queries/projectPage'
    
    const SectionCite               =   defineAsyncComponent(()=>import('~/components/projects/cite/SectionCite.vue'))
    const SectionProjects           =   defineAsyncComponent(()=>import('~/components/projects/project/SectionProjects.vue'))
    const SectionExercise           =   defineAsyncComponent(()=>import('~/components/projects/exercise/SectionExercise.vue'))
    const LazyCite                  =   defineAsyncComponent(()=>import('~/components/skeleton/projects/cite/Cite.vue'))
    const { data,pending }          =   await useAsyncQuery(projectQuery);
    
    const cite      =   data.value.projectsPage.cite;
    const projects  =   data.value.projectsPage.projectsCollection.items;
    const covers    =   projects.map( ({sys,imagesCollection}) => ({id:sys.id,url:imagesCollection.items[0].url}))

    provide('cite',cite)
    provide('projects',projects)
    provide('covers', covers)

    useHead({
        title:'Proyectos'
    })
</script>

<template>
        <SectionCite>
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
        </SectionCite>
        <SectionProjects/>
</template>