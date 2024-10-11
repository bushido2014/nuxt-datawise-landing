<script setup lang="ts">
import { onMounted } from 'vue';
const { gsap, ScrollTrigger } = useGsap();
onMounted(() => {
  gsap.set('.solution-card', { opacity: 0, y: 20 });
  ScrollTrigger.batch('.solution-card', {
    start: '-250px center',
    end: 'top center',
    scrub: true,
    // markers: true,
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, autoAlpha: 1, stagger: 0.15 }),
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
  <section id="solution">
    <div class="container">
      <div class="max-w-sm mx-auto text-center mb-10">
        <span class="block mb-3 uppercase text-lg text-green-600">{{
          sectionData.beforeTitle
        }}</span>
        <h2 class="text-4xl">
          {{ sectionData.title }}
        </h2>
      </div>
      <div class="grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div
          class="solution-card"
          v-for="(item, idx) in sectionData.itemsCards"
          :key="idx"
        >
          <img :src="item.image" class="my-4" />
          <h3 class="text-2xl">{{ item.title }}</h3>
          <div class="py-4">
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.solution-card {
  @apply opacity-0 py-6 border-t duration-300 hover:border-green-500;
}
</style>
