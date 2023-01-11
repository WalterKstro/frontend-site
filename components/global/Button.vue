<template>
    <NuxtLink class="py-4 px-12 bg-orange rounded-full font-semibold text-dark inline-block
                    hover:bg-light text-center" 
             :to="path">{{ text }}
    </NuxtLink>
</template>

<script lang="ts" setup>
    defineProps({
        path:{
            type:Object,String,
            required:true
        },
        text:{
            type:String,
            required:true
        }
    })
</script>