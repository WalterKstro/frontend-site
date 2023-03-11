<script lang="ts" setup>
    const brand = defineAsyncComponent(()=>import('./Brand.vue'));

    const itemsMenu = ref([
        {name:'Inicio',path:{name:'index'}},
        {name:'Proyectos',path:{name:'proyectos'}},
        {name:'Perfil',path:{name:'perfil'}},
    ])
</script>

<template>
    <nav class="max-w-xs w-full bg-dark absolute top-0 bottom-0 p-4 flex flex-col gap-4
                md:static md:max-w-none md:p-0 md:flex-row md:gap-12
    ">
        <brand class="md:hidden"/>
        <div v-for="({name,path}) in itemsMenu" :key="name">
            <NuxtLink activeClass="active" :to="path" 
                class="text-light py-2 inline-block w-full 
                         md:p-0 md:w-auto
            ">
                {{ name }}
            </NuxtLink>
        </div>
    </nav>
</template>