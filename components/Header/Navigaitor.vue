<template>
    <div 
    :class="showOrHiddenMenu"
    class=" bg-darken/50 w-full fixed top-0 bottom-0
    md:static
    "
    @click="() => swicherStateMenuMobile = false">
        <Nav/>
    </div>
</template>
<script setup>
    const Nav = defineAsyncComponent(()=>import('./Nav.vue'))

    const swicherStateMenuMobile = inject('swicherStateMenuMobile')
    const showOrHiddenMenu = computed(()=> swicherStateMenuMobile.value ? 'left-0' : '-left-full')
</script>