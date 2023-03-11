<template>
    <Container>
        <aside class="bg-section-cite
          text-dark rounded-lg p-8 my-8
          md:py-16
          lg:py-32">
                <Grid>
                    <slot name="cite" :cite="cite"></slot>
                </Grid>
            </aside>
    </Container>
</template>

<script setup>
    const Container = defineAsyncComponent(()=>import('~/components/layout/Container.vue'))
    const Grid = defineAsyncComponent(()=>import('~/components/layout/Grid.vue'))

    const cite = inject('cite')
</script>