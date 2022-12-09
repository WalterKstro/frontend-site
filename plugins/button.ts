import Button from '~/components/global/Button.vue';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('Button',Button)
})
  