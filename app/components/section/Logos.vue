<script setup lang="ts">
const items = [
  'https://i.postimg.cc/7L2qnz6w/logo1.png',
  'https://i.postimg.cc/SsLqwpCP/logo2.png',
  'https://picsum.photos/160/36',
  'https://picsum.photos/160/36',
  'https://picsum.photos/160/36',
  'https://picsum.photos/160/36',
  'https://i.postimg.cc/7L2qnz6w/logo1.png',
  'https://i.postimg.cc/SsLqwpCP/logo2.png',
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
