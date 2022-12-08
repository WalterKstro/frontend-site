
<template>
    <header class="bg-dark">
        <Container>
            <div class="flex flex-wrap justify-between py-3 gap-4 items-center">
                <Brand/>
                <Networks class="md:order-2"/>
                <Menu/>
            </div>
        </Container>
    </header>
</template>
<script setup>
    const Container = defineAsyncComponent(()=>import('../Layout/Container.vue'))
    const Menu = defineAsyncComponent(()=>import('../Header/Menu.vue'))
    const Networks = defineAsyncComponent(()=>import('../Header/Networks.vue'))
    const Brand = defineAsyncComponent(()=>import('../Header/Brand.vue'))

    const swicherStateMenuMobile = ref(false)
    provide( 'swicherStateMenuMobile', swicherStateMenuMobile )
</script>