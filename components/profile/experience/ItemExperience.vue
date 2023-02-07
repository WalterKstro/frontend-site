<script lang="ts" setup>
    interface Props {
        position: string;
        company: string;
        functions: string[];
        date: string;
        __typename: string;
    }
    const props = defineProps<Props>()

</script>

<template>
    <li class="ml-8 mb-8 last:mb-0 text-dark">
        <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-2 bg-light ring-dark">
            <Icon name="zondicons:date-add" size="12"/>
        </span>
        <h3 class="text-lg font-semibold">{{ position }}</h3>
        <p class="text-sm font-semibold">{{ company }}</p>
        <time class="block mb-4 text-sm font-normal leading-none text-gray-500">{{ date }}</time>

        <ul class="space-y-1 list-inside w-full">
            <li class="flex"  v-for="item in functions" :key="item">
                <svg class="w-4 h-4 mr-1.5 text-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                {{item}}
            </li>
        </ul>

    </li>
</template>