<script lang="ts" setup>
import BrandIcon from '~/assets/img/logo.svg';
</script>

<template>
    <div>
        <NuxtLink :to="{ name: 'index' }">
            <BrandIcon />
        </NuxtLink>
    </div>
</template>