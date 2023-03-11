<script lang="ts" setup>
    import { ExperiencesCollection } from '../../../interfaces/ProfileInterface';

    const Container = defineAsyncComponent(()=>import('~/components/layout/Container.vue'))
    const Grid = defineAsyncComponent(()=>import('~/components/layout/Grid.vue'))
    const ItemExperience = defineAsyncComponent(()=>import('~~/components/profile/experience/ItemExperience.vue'))

    const experiences = inject<ExperiencesCollection>('experiences') as ExperiencesCollection
</script>

<template>
    <section class="py-4 lg:py-8">
        <Container>
            <Grid class="gap-y-4 md:gap-x-6">
                <SidebarTitle>
                    <h3>Experiencia</h3>
                </SidebarTitle>
                <TimeLine>
                    <ItemExperience v-for="experience in experiences.items" :key="experience.company" :="experience"/>
                </TimeLine>
            </Grid>
        </Container>
    </section>
</template>