<template>
    <section class="py-16">
        <LayoutContainer>
            <LayoutGrid class="gap-y-4 md:gap-y-6">
                <h3 class="col-start-1 col-span-2 font-semibold text-dark text-center
                           md:col-start-1 md:col-span-6
                           lg:col-start-1 lg:col-span-12">En qué areas y qué puedo aportar</h3>
               <Area 
                    :items="functionsFrontend" 
                    class="col-start-1 col-span-2
                           md:col-start-1 md:col-span-3
                           lg:col-start-1 lg:col-span-6">
                    <template #title>
                        <h4 class="font-semibold text-dark mb-4">Frontend</h4>
                    </template>
               </Area> 

               <Area 
                    :items="functionsBackend" 
                    class="col-start-1 col-span-2
                            md:col-start-4 md:col-span-3
                            lg:col-start-7 lg:col-span-6">
                    <template #title>
                        <h4 class="font-semibold text-dark mb-4">Backend</h4>
                    </template>
               </Area> 
            </LayoutGrid>
        </LayoutContainer>
    </section>
</template>
<script setup>
    const LayoutContainer = defineAsyncComponent(()=>import('~/components/Layout/Container.vue'));
    const LayoutGrid = defineAsyncComponent(()=>import('~/components/Layout/Grid.vue'));
    const Area = defineAsyncComponent(()=>import('~/components/home/areas/Area.vue'));

    const functionsFrontend = inject('functionsFrontend');
    const functionsBackend = inject('functionsBackend');
</script>