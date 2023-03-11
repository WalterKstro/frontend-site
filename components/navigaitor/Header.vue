
<script lang="ts" setup>
const Container = defineAsyncComponent(() => import('../layout/Container.vue'))
const Menu = defineAsyncComponent(() => import('./Menu.vue'))
const Networks = defineAsyncComponent(() => import('./Networks.vue'))
const Brand = defineAsyncComponent(() => import('./Brand.vue'))

const swicherStateMenuMobile = ref(false)
provide('swicherStateMenuMobile', swicherStateMenuMobile)

</script>

<template>
    <header class="bg-dark">
        <Container>
            <div class="flex flex-wrap justify-between py-3 gap-4 items-center">
                <Brand />
                <Networks class="md:order-2" />
                <Menu />
            </div>
        </Container>
    </header>
</template>