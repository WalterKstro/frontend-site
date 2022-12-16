<template>
    <section class="py-16 my-40 bg-dark 
                    lg:my-48">
        <LayoutContainer>
            <LayoutGrid class="items-center">
                <HomeProjectsExtract/>
                <HomeProjectsSlider :images="images"/>
            </LayoutGrid>
        </LayoutContainer>
    </section>
</template>

<script lang="ts" setup>
    const LayoutContainer = defineAsyncComponent(()=>import('~/components/Layout/Container.vue'));
    const LayoutGrid = defineAsyncComponent(()=>import('~/components/Layout/Grid.vue'));
    const HomeProjectsExtract = defineAsyncComponent(()=>import('~/components/home/projects/Extract.vue'));
    const HomeProjectsSlider = defineAsyncComponent(()=>import('~/components/home/projects/Slider.vue'));

    defineProps({
        images:{
            require:true,
            type:Array,
            default:[]
        }
    })
</script>