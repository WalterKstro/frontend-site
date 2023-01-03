<template>
    <Container>
        <aside class="bg-section-cite
          text-dark rounded-lg p-8 mt-8
          md:py-16
          lg:py-32">
                <Grid>
                    <p class="col-start-1 col-span-2 text-2xl font-semibold
                    md:col-span-3
                    lg:col-start-2 lg:col-span-5">
                        <Icon name="bx:bxs-quote-left" />
                            {{ cite.cite }}
                        <Icon name="bxs:quote-right" />
                    </p>
                    <p class="col-start-1 col-span-1
                    lg:col-start-2 lg:col-span-1">{{cite.author}}</p>    
                </Grid>
            </aside>
    </Container>
</template>

<script setup>
    const Container = defineAsyncComponent(()=>import('~/components/Layout/Container.vue'))
    const Grid = defineAsyncComponent(()=>import('~/components/Layout/Grid.vue'))

    const cite = inject('cite')
</script>