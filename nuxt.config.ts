// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss','@nuxt/image-edge','@nuxtjs/apollo','nuxt-icon','nuxt-svgo','@formkit/nuxt'],
    apollo: {
        clients: {
            default: {
                httpEndpoint: `${process.env.NUXT_PUBLIC_API_BASE}content/v1/spaces/${process.env.NUXT_SPACE}?access_token=${process.env.NUXT_ACCESS_TOKEN}`,
            }
        },
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        viewer: false
    },
    image: {
        contentful: {
            baseURL:'https://images.ctfassets.net'
        }
    },
    runtimeConfig: {
        public: {
            urlContacto: process.env.NUXT_URL_CONTACT,
        }
    }
})
