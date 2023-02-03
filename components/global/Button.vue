<script lang="ts" setup>
    interface IProps {
        path: string,
        text:string
    }
    defineProps<IProps>()
</script>

<template>
    <NuxtLink class="py-4 px-12 bg-orange rounded-full font-semibold text-dark inline-block
                    hover:bg-light text-center" 
             :to="path">{{ text }}
    </NuxtLink>
</template>
