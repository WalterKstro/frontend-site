// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss','@nuxt/image-edge','@nuxtjs/apollo','nuxt-icon'],
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://graphql.contentful.com/content/v1/spaces/lco53k7tma7a?access_token=U-8FsjTxYtJIMrKKGsz-Ae4zS-EZ3oCenI2Q7mP5D2Q',
            }
        }
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        viewer: false,
    }
})
