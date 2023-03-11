<script lang="ts" setup>
    import { IProjectSelected } from '~~/interfaces/CustomInterfaces';
    import { ProjectsCollectionItem } from '~~/interfaces/ProjectInterface';

    const Container         =   defineAsyncComponent(()=>import('~/components/layout/Container.vue'))
    const Card              =   defineAsyncComponent(()=>import('~~/components/projects/project/Card.vue'))
    const Modal             =   defineAsyncComponent(()=>import('~~/components/projects/project/Modal.vue'))

    const covers            =   inject<{id:string,url:string}[]>('covers')
    const projects          =   inject('projects') as ProjectsCollectionItem[]
    const projectSelected   =   ref<IProjectSelected>({title:'',extract:'string',technologies: [],images: [],links: []})

    const showModal         =   ref<boolean>(false)

    const handlerClick  =   (id:string, projects:ProjectsCollectionItem[]) => {
        projectSelected.value = useFilterMap( id, projects )
        showModal.value = true
    }

    provide('showModal',showModal)

</script>
<template>
    <section class="bg-gradient-to-r from-dark to-darken py-16">
        <Container>
            <h2 class="text-light font-semibold mb-8">Proyectos</h2>
            <div class="grid grid-cols-responsive gap-4 md:gap-6">
                <Card v-for="cover in covers" :key="cover.id" :="cover" @click="handlerClick(cover.id,projects)"/>
            </div>
            <Modal :="projectSelected" v-if="showModal"/>
        </Container>
    </section>
</template>