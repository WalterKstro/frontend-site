<script lang="ts" setup>

    import { Profile } from '../interfaces/ProfileInterface';
    import { profileQuery } from '~~/queries/profilePage';

    const SectionMe = defineAsyncComponent(()=>import('~~/components/profile/me/SectionMe.vue'))
    const SectionExperience = defineAsyncComponent(()=>import('~~/components/profile/experience/SectionExperience.vue'))
    const SectionEducation = defineAsyncComponent(()=>import('~~/components/profile/education/SectionEducation.vue'))
    
    const { data }  =   await useAsyncQuery<Profile>(profileQuery);

    provide('me',data.value!.profilePage.me)
    provide('experiences',data.value!.profilePage.experiencesCollection)
    provide('education', data.value!.profilePage.educationsCollection)
    
    useHead({
        title:'Perfil'
    })
</script>

<template>
    <SectionMe/>
    <SectionExperience/>
    <SectionEducation/>
</template>