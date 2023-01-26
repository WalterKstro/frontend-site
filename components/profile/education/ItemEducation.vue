<script setup>
    const props = defineProps({
        career:String,
        date:String,
        institute:String
    })
</script>

<template>
    <li class="ml-8 mb-8 last:mb-0 text-dark">
        <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-2 bg-light ring-dark">
            <Icon name="zondicons:date-add" size="12"/>
        </span>
        <h3 class="text-lg font-semibold">{{ career }}</h3>
        <p class="text-sm font-semibold">{{ institute }}</p>
        <time class="block text-sm font-normal leading-none text-gray-500">{{ date }}</time>
    </li>
</template>