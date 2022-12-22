<template>
        <aside class="relative">
    <LayoutContainer>
            <div class="absolute inset-0 grid" aria-hidden="true">
                <div class="bg-darken"></div>
                <div class="bg-light"></div>
            </div>
            <div class="isolate bg-dark text-light rounded-lg p-4 max-w-3xl min-[320px] mx-auto w-full
                            lg:p-8 flex gap-8 flex-col items-center">
                <h4 class="font-semibold">Mis principales herramientas</h4>
                <div class="flex gap-4 md:gap-8">
                    <Icon size="32" name="fa-brands:react" />
                    <Icon size="32" name="fa-brands:vuejs" />
                    <Icon size="32" name="NuxtIcon"/>
                    <Icon size="32" name="TailwindcssIcon" />
                    <Icon size="32" name="fa-brands:bootstrap" />
                </div>
            </div>
    </LayoutContainer>
        </aside>
</template>

<script setup>
    const LayoutContainer = defineAsyncComponent(()=>import('~/components/Layout/Container.vue'));
</script>