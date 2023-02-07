<script lang="ts" setup>
    import { EducationsCollection } from '../../../interfaces/ProfileInterface';

    const Container = defineAsyncComponent(()=>import('~/components/Layout/Container.vue'))
    const Grid = defineAsyncComponent(()=>import('~/components/Layout/Grid.vue'))
    const ItemEducation = defineAsyncComponent(()=>import('~/components/profile/education/ItemEducation.vue'))
    
    const educations = inject<EducationsCollection>('education') as EducationsCollection
</script>
<template>
    <section class="py-4 lg:py-8">
        <Container>
            <Grid class="gap-y-4 md:gap-x-6">
                <SidebarTitle>
                    <h3>Formación</h3>
                </SidebarTitle>
                <TimeLine>
                    <ItemEducation v-for="(item,index) in educations.items" :key="index" :="item"/>
                </TimeLine>
            </Grid>
        </Container>
    </section>
</template>