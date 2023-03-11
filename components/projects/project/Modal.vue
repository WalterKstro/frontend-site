<script lang="ts" setup>
    import { ImagesCollectionItem, TechnologiesCollectionItem } from '~~/interfaces/ProjectInterface';


    const Container     =   defineAsyncComponent(()=>import('~/components/layout/Container.vue'))
    const Grid          =   defineAsyncComponent(()=>import('~/components/layout/Grid.vue'))
    const Slider        =   defineAsyncComponent(()=>import('~/components/home/projects/Slider.vue'));
    const showModal     =   inject<boolean>('showModal')

    interface IProps {
        title:string,
        extract:string,
        technologies: TechnologiesCollectionItem[],
        images: ImagesCollectionItem[],
        links: string[]
    }
    const props = defineProps<IProps>()
    provide('images',props.images)
</script>
<template>
    <aside class="fixed flex top-0 bottom-0 left-0 right-0 bg-dark/90 backdrop-blur-md" @click.self="()=> showModal = false">
        <Container class="m-auto">
            <Grid class="gap-y-4 md:gap-y-6">
                <Slider/>
                <div class="flex flex-col justify-between col-start-1 col-span-2 
                    md:col-start-2 md:col-span-4
                    lg:col-start-9 lg:col-span-4">
                    <h3 class="text-light font-semibold">{{ title }}</h3>
                    <p class="text-light whitespace-pre-line m-0">{{ extract }}</p>
                    <div class="flex flex-col justify-between sm:flex-row space-y-2 md:space-y-0">
                        <Button :path="links[0]" text="Código" target="_blank"/>
                        <Button v-if="links[1]" :path="links[1]" text="Demo" target="_blank"/>
                    </div>
                    <footer class="text-light flex gap-2 text-sm">
                        <span v-for="({technology}) in technologies" :key="technology" class="font-semibold"><Icon name="fa-brands:slack-hash" />{{ technology }}</span>
                    </footer>
                </div>
            </Grid>
        </Container>
    </aside>
</template>
