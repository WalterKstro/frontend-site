<template>
    <Container>
        <aside class="bg-section-cite
          text-dark rounded-lg p-8 mt-8
          md:py-16
          lg:py-32">
                <Grid>
                    <slot name="cite" :cite="cite"></slot>
                </Grid>
            </aside>
    </Container>
</template>

<script setup>
    const Container = defineAsyncComponent(()=>import('~/components/Layout/Container.vue'))
    const Grid = defineAsyncComponent(()=>import('~/components/Layout/Grid.vue'))

    const cite = inject('cite')
</script>