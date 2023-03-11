<script lang="ts" setup>
const Header = defineAsyncComponent(() => import('../components/navigaitor/Header.vue'))
</script>

<template>
    <div>
        <Header />
        <slot />
    </div>
</template>