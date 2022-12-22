<template>
    <section class="py-16 bg-dark">
        <LayoutContainer>
            <LayoutGrid class="gap-y-4 md:gap-y-6">
                <h2 class="text-light font-semibold md:col-start-2 md:col-span-4 lg:col-start-4 lg:col-span-6">Contacto</h2>
                <FormKit 
                    type="form"
                    @submit="handlerSubmit"
                    :classes="{
                        form:'col-start-1 col-span-2 md:col-start-2 md:col-span-4 lg:col-start-4 lg:col-span-6 grid gap-6 sm:grid-cols-1 lg:grid-cols-6'
                    }"
                    :actions="false"
                    #default="{ state: { valid } }"
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
                                label="Enviar mensaje"
                                :classes="{
                                    outer:'$reset lg:col-start-1 lg:col-span-3',
                                    input:'py-4 px-16 bg-orange rounded-full font-semibold text-dark hover:bg-light'
                                }"
                                :disabled="!valid"
                            />

                </FormKit>
            </LayoutGrid>
        </LayoutContainer>
    </section>
</template>

<script setup>
    const LayoutContainer = defineAsyncComponent(()=>import('~/components/Layout/Container.vue'));
    const LayoutGrid = defineAsyncComponent(()=>import('~/components/Layout/Grid.vue'));
    const handlerSubmit = async data => {
        await new Promise(resolve => {
            setTimeout(()=>{
                resolve(data)
            }, 2000)
        })
        console.log(data)
    }
</script>