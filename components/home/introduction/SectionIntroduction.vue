<template>
    <section class="py-16 bg-gradient-to-b from-dark to-darken relative
                    md:py-24
                    lg:py-40">
        <HeroBackground class="absolute right-0 top-0"/>
        <LayoutContainer>
            <LayoutGrid>
                <slot name="titles"></slot>
                <slot name="extract"></slot> 
                <div class="col-span-2
                            md:col-span-4
                            lg:col-span-5 lg:row-start-3"><Button text="Ver mi perfil" :path="{name:'perfil'}"/></div>
            </LayoutGrid>
        </LayoutContainer>
        
    </section>
</template>

<script lang="ts" setup>
    import HeroBackground from '~/assets/img/hero background.svg';

    const LayoutContainer = defineAsyncComponent(()=>import('../../Layout/Container.vue'));
    const LayoutGrid = defineAsyncComponent(()=>import('~/components/Layout/Grid.vue'));
    
    
</script>