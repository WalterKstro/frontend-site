<script setup>
    import { profileQuery } from '~~/queries/profilePage';

    const SectionMe = defineAsyncComponent(()=>import('~~/components/profile/me/SectionMe.vue'))
    const SectionExperience = defineAsyncComponent(()=>import('~~/components/profile/experience/SectionExperience.vue'))
    
    const { data,pending }          =   await useAsyncQuery(profileQuery);
    const {me,educationsCollection,experiencesCollection} = data.value.profilePage


    provide('me',me)
    provide('experiences',experiencesCollection)
    
    useHead({
        title:'Perfil'
    })
</script>

<template>
    <SectionMe/>
    <SectionExperience/>
</template>