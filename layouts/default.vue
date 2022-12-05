<template>
    <div>
        <Header/>
        <slot />
    </div>
</template>
<script setup>
    const Header = defineAsyncComponent(()=>import('../components/Header/Header.vue'))
</script>