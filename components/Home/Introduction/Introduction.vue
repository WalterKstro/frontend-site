<template>
    <section class="py-16 bg-gradient-to-b from-dark to-darken relative
                    md:py-24
                    lg:py-40">
        <HeroBackground class="absolute right-0 top-0"/>
        <LayoutContainer>
            <div class="grid grid-cols-2 gap-x-4 relative
                        md:grid-cols-6 md:gap-x-6
                        lg:grid-cols-12 lg:grid-rows-3">
                <div class="col-span-2 mb-8
                            md:col-span-4
                            lg:col-span-5">
                    
                    <h1 class="font-bold text-orange">
                        <span class="block text-2xl md:text-3xl text-light">{{ greeting }}</span>
                        {{ name }}
                        <span class="block text-2xl md:text-3xl text-light">{{ position }}</span>
                    </h1>
                    
                </div>
                <div class="col-span-2 mb-4 text-light
                            md:col-span-4
                            lg:col-span-5 lg:row-start-2"><p>{{ extract }}</p></div>
                <div class="col-span-2
                            md:col-span-4
                            lg:col-span-5 lg:row-start-3"><Button text="Ver mi perfil" :path="{name:'perfil'}"/></div>
            </div>
        </LayoutContainer>
        <Technologies class="absolute -bottom-20 md:-bottom-16 bg-dark text-light rounded-lg py-4 -translate-x-1/2 left-1/2 max-w-3xl min-[320px]:
                            w-full
                            lg:py-8"/>
    </section>
</template>

<script lang="ts" setup>
    import HeroBackground from '~/assets/img/hero background.svg';

    const LayoutContainer = defineAsyncComponent(()=>import('../../Layout/Container.vue'));
    const Technologies = defineAsyncComponent(()=>import('~/components/Home/Introduction/Technologies.vue'));
    
    defineProps({
        name:String,
        position:String,
        extract:String,
        greeting:String,
    })
</script>