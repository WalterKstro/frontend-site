<template>
    <section class="py-16 bg-dark">
        <LayoutContainer>
            <LayoutGrid class="items-center">
                <HomeProjectsExtract/>
                <HomeProjectsSlider/>
            </LayoutGrid>
        </LayoutContainer>
    </section>
</template>

<script setup>
    const LayoutContainer = defineAsyncComponent(()=>import('~/components/Layout/Container.vue'));
    const LayoutGrid = defineAsyncComponent(()=>import('~/components/Layout/Grid.vue'));
    const HomeProjectsExtract = defineAsyncComponent(()=>import('~/components/home/projects/Extract.vue'));
    const HomeProjectsSlider = defineAsyncComponent(()=>import('~/components/home/projects/Slider.vue'));
</script>