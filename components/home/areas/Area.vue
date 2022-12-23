<template>
    <div class="p-4  rounded-lg lg:p-8 shadow-sm bg-gradient-to-r from-slate-100 to-light">
        <slot name="title"></slot>
        <ul class="list-disc list-inside divide-y-2">
            <li v-for="item in items" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>
<script setup>
    defineProps({
        items: {
            type:Array,
            required:true
        }
    })
</script>