<script setup>
    const Container     =   defineAsyncComponent(()=>import('~/components/Layout/Container.vue'))
    const Grid          =   defineAsyncComponent(()=>import('~/components/Layout/Grid.vue'))
    const Slider        =   defineAsyncComponent(()=>import('~/components/home/projects/Slider.vue'));
    const showModal     =   inject('showModal')

    const props = defineProps({
        title:String,
        extract:String,
        technologies: Array,
        images: Array,
        links:Array
    })
    provide('images',props.images)
</script>
<template>
    <aside class="fixed flex top-0 bottom-0 left-0 right-0 bg-darken/90 backdrop-blur-md" @click.self="()=> showModal = false">
        <Container class="m-auto">
            <Grid>
                <Slider/>
                <div class="col-start-1 col-span-2 lg:col-start-9 lg:col-span-4">
                    <h3 class="text-light font-semibold mb-4">{{ title }}</h3>
                    <p class="text-light whitespace-pre-line">{{ extract }}</p>
                </div>
            </Grid>
        </Container>
    </aside>
</template>
