<template>
    <div class="p-4 bg-slate-100 rounded-lg lg:p-8 shadow-sm">
        <slot name="title"></slot>
        <ul class="list-disc list-inside">
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