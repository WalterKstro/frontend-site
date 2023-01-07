<script setup>
    const Container         =   defineAsyncComponent(()=>import('~/components/Layout/Container.vue'))
    const Grid              =   defineAsyncComponent(()=>import('~/components/Layout/Grid.vue'))
    const Card              =   defineAsyncComponent(()=>import('~~/components/projects/project/Card.vue'))
    const Modal             =   defineAsyncComponent(()=>import('~~/components/projects/project/Modal.vue'))

    const covers            =   inject('covers')
    const projects          =   inject('projects')
    const projectSelected   =   ref(null)
    const showModal         =   ref(false)

    const handlerClick  =   id => {
        const [project] =   projects.
                            filter( project => project.sys.id == id) 
                            .map( ({title, extract,technologiesCollection,imagesCollection,links}) => 
                                ({ 
                                    title,
                                    extract,
                                    technologies: technologiesCollection.items,
                                    images: imagesCollection.items,
                                    links 
                                }))

        projectSelected.value  =   project
        showModal.value = true
    }

    provide('showModal',showModal)

</script>
<template>
    <section class="bg-gradient-to-r from-dark to-darken py-16">
        <Container>
            <h2 class="text-light font-semibold mb-8">Proyectos</h2>
            <div class="grid grid-cols-responsive gap-4 md:gap-6">
                <Card v-for="cover in covers" :key="cover.id" :="cover" @click="handlerClick(cover.id)"/>
            </div>
            <Modal :="projectSelected" v-if="showModal"/>
        </Container>
    </section>
</template>