<script setup lang="ts">
import { onMounted } from 'vue';
const { gsap, ScrollTrigger } = useGsap();

onMounted(() => {
  setTimeout(() => {
    // Timeline for elements on the left (title, text, buttons)
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#powerData', // Trigger for the entire section
        start: 'top 80%', // Trigger time
        toggleActions: 'play none none none',
      },
    });

    // Animation for title, text and left buttons to appear
    timeline
      .from('.power-title', {
        opacity: 0,
        x: -100, // It appears from the left
        duration: 1.5,
        ease: 'power3.out',
      })
      .from(
        '.power-text',
        {
          opacity: 0,
          x: -100,
          duration: 1.5,
          ease: 'power3.out',
        },
        '-=1'
      ) // Light overlay for fluidity
      .from(
        '.buttons',
        {
          opacity: 0,
          x: -100,
          duration: 1.5,
          ease: 'power3.out',
        },
        '-=1'
      );

    // Animation for the right image div
    gsap.from('.images-container', {
      scrollTrigger: {
        trigger: '#powerData',
        start: 'top 80%',
      },
      opacity: 0,
      x: 100, // It appears from the right
      duration: 1.5,
      ease: 'power3.out',
    });
  }, 1700); // Fires after the preloader
});

const props = defineProps({
  sectionData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section id="powerData">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-3/5">
          <h1 class="power-title">
            {{ sectionData.title }}
          </h1>
          <div class="py-6 power-text">
            <p>
              {{ sectionData.text }}
            </p>
          </div>
          <div class="buttons">
            <UButton size="xl" class="mr-3">Start Your Free Trial</UButton>
            <UButton size="xl" color="white" variant="solid"
              >Learn more</UButton
            >
          </div>
        </div>

        <div class="images-container">
          <div class="images-container_inner">
            <img src="https://i.postimg.cc/rssnHKQ2/img-wrapp.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.power-title {
  @apply text-4xl md:text-6xl;
}
.buttons {
  @apply py-4 flex flex-col md:flex-row gap-4;
}
.images-container {
  @apply w-full lg:w-2/5;
}
.images-container_inner {
  @apply flex my-3 gap-3 justify-end overflow-hidden;
}
</style>
