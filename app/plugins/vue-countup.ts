import { defineNuxtPlugin } from '#app';
import VueCountUp from 'vue-countup-v3';

export default defineNuxtPlugin((nuxtApp) => {
  // Înregistrăm componenta globală
  nuxtApp.vueApp.component('CountUp', VueCountUp);
});
