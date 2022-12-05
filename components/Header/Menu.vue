<template>
    <div>
        <Button @click="showOrHiddenMenu"/>
        <Navigaitor/>
    </div>
</template>
<script setup>
    const Button = defineAsyncComponent(()=>import('./Button.vue'))
    const Navigaitor = defineAsyncComponent(()=>import('./Navigaitor.vue'))

    const swicherStateMenuMobile = inject('swicherStateMenuMobile')
    const showOrHiddenMenu = () => swicherStateMenuMobile.value = !swicherStateMenuMobile.value
</script>