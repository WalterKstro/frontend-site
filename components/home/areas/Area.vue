<script setup>
defineProps({
    items: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="p-4  rounded-lg lg:p-8 shadow-sm bg-slate-100">
        <slot name="title"></slot>
        <ul class="list-none">
            <li v-for="item in items" :key="item" class="py-1">
                <svg class="w-5 h-5 text-dark inline-block" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg> {{ item }}
            </li>
        </ul>
    </div>
</template>