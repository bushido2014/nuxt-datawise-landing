<script setup lang="ts">
const items = [
  '/partners/logo1.png',
  '/partners/logo2.png',
  '/partners/logo3.png',
  '/partners/logo4.png',
  '/partners/logo5.png',
  '/partners/logo6.png',
];
</script>

<template>
  <section id="partners">
    <div class="container">
      <div class="my-16 block">
        <NuxtMarquee :speed="20" :pauseOnHover="false" :autoFill="true">
          <NuxtImg
            :src="item"
            v-for="(item, index) in items"
            :key="index"
            loading="lazy"
            fit="contain"
            quality="80"
            class="mx-8"
            width="160"
          />
        </NuxtMarquee>
      </div>
    </div>
  </section>
</template>
