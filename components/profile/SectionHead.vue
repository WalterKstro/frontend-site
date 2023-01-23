<script setup>
    const Container = defineAsyncComponent(()=>import('~/components/Layout/Container.vue'))
    const Grid = defineAsyncComponent(()=>import('~/components/Layout/Grid.vue'))

    const me = inject('me')
</script>

<template>
    <section class="bg-dark py-4 lg:py-8">
        <Container>
            <Grid class="place-items-center">
                <nuxt-img 
                    provider="contentful" 
                    :src="me.photo.url" 
                    placeholder 
                    preload 
                    loading="lazy" 
                    class="col-start-2 w-3/4
                        md:col-start-4 md:col-span-2
                        lg:col-start-8 lg:col-span-2 lg:w-auto"/>
                        
                    <div class="text-light col-start-1 col-span-1 row-start-1
                        md:col-start-2 md:col-span-2
                        lg:col-start-4 lg:col-span-3">
                        <h3 class="font-semibold">{{me.name}}</h3>
                        <p class="font-semibold">{{me.position}}</p>
                    </div>
            </Grid>
        </Container>
    </section>
</template>