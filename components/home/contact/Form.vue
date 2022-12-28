<template>
    <section class="py-16 bg-dark">
        <LayoutContainer>
            <LayoutGrid class="gap-y-4 md:gap-y-6">
                <h3 class="text-light font-semibold md:col-start-2 md:col-span-4 lg:col-start-4 lg:col-span-6">Aquí 👇 puedes contactarme</h3>
                <FormKit 
                    type="form"
                    @submit="handlerSubmit"
                    :classes="{
                        form:'sm:grid-cols-1 mb-4 col-start-1 col-span-2 md:col-start-2 md:col-span-4 lg:col-start-4 lg:col-span-6 grid gap-6 lg:grid-cols-6'
                    }"
                    :actions="false"
                    #default="{ state: { valid } }"
                    id="contacto"
                    >
                        <FormKit
                            type="text" 
                            name="name" 
                            label="Nombre" 
                            id="name"
                            validation="required"
                            :validation-messages="{required:'Este campo es requerido'}"
                            :classes="{
                                outer:'$reset lg:col-start-1 lg:col-span-3',
                                label: 'block text-light mb-4',
                                input:'bg-light block w-full p-2.5 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500',
                                messages:'text-light text-sm'
                            }"
                            />

                        <FormKit 
                            type="email" 
                            name="email" 
                            label="Correo" 
                            id="email"
                            validation="required|email"
                            :validation-messages="{
                                    required:'Este campo es requerido',
                                    email:'Debe ser un correo válido'
                                }"
                            :classes="{
                                outer:'$reset lg:col-start-4 lg:col-span-3 lg:m-0',
                                label: 'block text-light mb-4',
                                input:'bg-light block w-full p-2.5 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500',
                                messages:'text-light text-sm'
                            }"
                            />

                        <FormKit 
                            type="textarea"
                            rows="5"
                            name="message" 
                            label="Mensaje" 
                            id="message"
                            validation="required"
                            :validation-messages="{required:'Este campo es requerido'}"
                            :classes="{
                                outer:'$reset lg:col-start-1 lg:col-span-6',
                                label: 'block text-light mb-4',
                                input:'bg-light block w-full p-2.5 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500',
                                messages:'text-light text-sm'
                            }"
                            />

                            <FormKit
                                type="submit"
                                :classes="{
                                    outer:'$reset lg:col-start-1 lg:col-span-3',
                                    input:'py-4 px-16 bg-orange rounded-full font-semibold text-dark hover:bg-light inline-flex gap-2'
                                }"
                                v-if="valid"
                            >
                                <Spiner v-if="submited"/> Enviar mensaje
                            </FormKit>
                </FormKit>
            </LayoutGrid>
            <Alert v-if="status"/>
        </LayoutContainer>
    </section>
</template>

<script setup>
    import axios from 'axios'
    import { reset } from '@formkit/core'

    const LayoutContainer = defineAsyncComponent(()=>import('~/components/Layout/Container.vue'));
    const LayoutGrid = defineAsyncComponent(()=>import('~/components/Layout/Grid.vue'));
    const Spiner = defineAsyncComponent(()=>import('~/components/home/contact/Spiner.vue'));
    const Alert = defineAsyncComponent(()=>import('~/components/home/contact/Alert.vue'));
    

    const config = useRuntimeConfig();
    const submited = ref(false)
    const status = ref(false)

    const handlerSubmit = async input => {
        submited.value = true
        const {status:result} = await axios.post(config.public.urlContacto,{...input})
        status.value = (result == 200) ? true : false
        reset('contacto')
        submited.value = false
        clearAlert()
    }
    const clearAlert = () => {
        setTimeout(()=>{
            status.value = false
        },5000)
    }
</script>