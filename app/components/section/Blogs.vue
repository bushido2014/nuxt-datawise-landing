<script setup lang="ts">
import { onMounted } from 'vue';
const { gsap, ScrollTrigger } = useGsap();

onMounted(() => {
  gsap.set('.blog-article', { opacity: 0, y: 20 });
  ScrollTrigger.batch('.blog-article', {
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
  <section id="blogs">
    <div class="container">
      <div class="max-w-3xl mx-auto text-center mb-10">
        <span class="block mb-3 uppercase text-lg">Blogs</span>
        <h2 class="text-4xl">{{ sectionData.title }}</h2>
        <div class="py-4">
          <p>
            {{ sectionData.text }}
          </p>
        </div>
      </div>
      <div class="grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <article
          class="blog-article py-4"
          v-for="(item, idx) in sectionData.itemsArticle"
          :key="idx"
        >
          <img :src="item.img" class="rounded-md w-full" />
          <div class="py-3">
            <div class="uppercase text-sm">{{ item.cat }}</div>
            <p>{{ item.title }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog-article {
  @apply opacity-0;
}
</style>
