<script lang="ts" setup>

    interface Props {
        id:string,
        url:string
    }
    const props = defineProps<Props>()
</script>

<template>
    <nuxt-img 
        provider="contentful" 
        :src="url" 
        placeholder 
        preload 
        loading="lazy" 
        class="rounded-lg cursor-pointer"/>
</template>