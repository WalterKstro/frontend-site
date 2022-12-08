import Button from '~/components/UI/Button.vue';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('Button',Button)
})
  