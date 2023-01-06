<script setup>
    const props = defineProps({
        id:String,
        url:String
    })
</script>
<template>
    <nuxt-img provider="contentful" :src="url" placeholder preload loading="lazy" class="rounded-lg"/>
</template>