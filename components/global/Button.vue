<template>
    <NuxtLink class="py-4 px-16 bg-orange rounded-full font-semibold text-dark inline-block
                    hover:bg-light" 
             :to="path">{{ text }}
    </NuxtLink>
</template>

<script lang="ts" setup>
    defineProps({
        path:{
            type:Object,
            required:true
        },
        text:{
            type:String,
            required:true
        }
    })
</script>