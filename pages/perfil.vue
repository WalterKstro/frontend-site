<script setup>
    import { profileQuery } from '~~/queries/profilePage';

    const SectionHead = defineAsyncComponent(()=>import('~/components/profile/SectionHead.vue'))
    const { data,pending }          =   await useAsyncQuery(profileQuery);
    const {me,educationsCollection,experiencesCollection} = data.value.profilePage


    provide('me',me)
    useHead({
        title:'Perfil'
    })
</script>

<template>
    <SectionHead/>
    <h4 class="text-center">Estoy en esto ahora 🙏</h4>
</template>