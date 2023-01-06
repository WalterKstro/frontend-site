<template>
    <div class="p-4  rounded-lg lg:p-8 shadow-sm bg-slate-100">
        <slot name="title"></slot>
        <ul class="list-none">
            <li v-for="item in items" :key="item" class="py-1">
                <Icon name="bi:check-all"/> {{ item }}
            </li>
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