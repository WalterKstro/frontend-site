<script setup>
    const Container = defineAsyncComponent(()=>import('~/components/Layout/Container.vue'))
    const Grid = defineAsyncComponent(()=>import('~/components/Layout/Grid.vue'))
    const SidebarTitle = defineAsyncComponent(()=>import('~/components/profile/experience/SidebarTitle.vue'))
    const ItemExperience = defineAsyncComponent(()=>import('~~/components/profile/experience/ItemExperience.vue'))

    const experiences = inject('experiences')
</script>

<template>
    <section class="py-4 lg:py-8">
        <Container>
            <Grid class="gap-y-4 md:gap-x-6">
                <SidebarTitle>
                    <h3>Experiencia</h3>
                </SidebarTitle>
                <TimeLine>
                    <ItemExperience v-for="(item, index) in experiences.items" :key="index" :="item"/>
                </TimeLine>
            </Grid>
        </Container>
    </section>
</template>