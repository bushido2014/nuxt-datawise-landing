<script setup lang="ts">
import { onMounted } from 'vue';
const { gsap, ScrollTrigger } = useGsap();

onMounted(() => {
  const faqTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#faq',
      start: 'top 70%',
      toggleActions: 'restart none none none',
      //markers: true,
    },
  });

  faqTimeline.from('.faq-title', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
  });

  faqTimeline.from(
    '.faq-text',
    {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    },
    '-=0.5'
  );

  faqTimeline.from(
    '.faq-accordion',
    {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    },
    '-=0.5'
  );
});

const props = defineProps({
  sectionData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section id="faq">
    <div class="container mb-10">
      <div class="text-center pb-8">
        <span class="block mb-3 uppercase text-lg text-green-600">Faq</span>
        <h2 class="text-4xl faq-title">{{ sectionData.title }}</h2>
        <div class="mt-4">
          <p class="faq-text">
            {{ sectionData.text }}
          </p>
        </div>
      </div>
      <div class="max-w-4xl mx-auto">
        <UAccordion
          class="faq-accordion"
          open-icon="i-heroicons-plus"
          close-icon="i-heroicons-minus"
          color="white"
          variant="solid"
          size="xl"
          :items="sectionData.itemsFaq"
        />
      </div>
    </div>
  </section>
</template>
