<template>
    <div>
        <Burger @click="showOrHiddenMenu"/>
        <Navigaitor/>
    </div>
</template>
<script setup>
    const Burger = defineAsyncComponent(()=>import('./Burger.vue'))
    const Navigaitor = defineAsyncComponent(()=>import('./Navigaitor.vue'))

    const swicherStateMenuMobile = inject('swicherStateMenuMobile')
    const showOrHiddenMenu = () => swicherStateMenuMobile.value = !swicherStateMenuMobile.value
</script>