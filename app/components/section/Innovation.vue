<script setup>
import { onMounted } from 'vue';
const { gsap, ScrollTrigger } = useGsap();

onMounted(() => {
  let innoTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#inno',
      start: 'top 80%',
      toggleActions: 'play none none reset', // Play animation on first spawn and reset on exit
    },
  });

  innoTimeline
    .from('.before-title', {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'power3.out',
    })

    .from(
      '.inno-title',
      {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.5'
    )
    .from('.inno-text', {
      opacity: 0,
      y: 50, // From the bottom up
      duration: 1,
      ease: 'power3.out',
      stagger: 0.3, // They are displayed one at a time
    })

    .from('.count-up-block', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.3, // Display each block in turn
    });
});

const props = defineProps({
  sectionData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section id="inno">
    <div class="container">
      <span class="before-title">{{ sectionData.beforeTitle }}</span>
      <h2 class="inno-title">{{ sectionData.innoTitle }}</h2>
      <div class="my-4">
        <p class="inno-text">
          {{ sectionData.p1 }}
        </p>
        <p class="inno-text">
          {{ sectionData.p2 }}
        </p>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10"
      >
        <div
          class="py-3 count-up-block"
          v-for="(item, idx) in sectionData.items"
          :key="idx"
        >
          <div class="text-4xl font-bold mb-3 flex">
            <span v-if="item.plus">{{ item.plus }}</span>
            <count-up
              :options="{ enableScrollSpy: true }"
              :end-val="item.number"
              :autoplay="true"
              :duration="10"
              :delay="idx * 1000"
            ></count-up>
          </div>
          <div>
            <span>{{ item.title }} </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.before-title {
  @apply block mb-3 uppercase text-lg text-green-600;
}
.inno-title {
  @apply text-4xl;
}
</style>
