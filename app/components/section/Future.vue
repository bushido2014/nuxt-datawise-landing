<script setup lang="ts">
import { onMounted } from 'vue';
const { gsap, ScrollTrigger } = useGsap();

onMounted(() => {
  let futureTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#future', // Trigger for the entire section
      start: 'top 80%', // The moment the animation starts
      toggleActions: 'play none none reset', // Resets on exit for replay
      //markers: true, // Enable debugging flags (optional)
    },
  });

  // Animation for `future-content' from left to right
  futureTimeline.from('.future-content', {
    opacity: 0,
    x: -100,
    duration: 1.5,
    ease: 'power3.out',
  });

  // Animation for `future-img` from right to left
  futureTimeline.from(
    '.future-img',
    {
      opacity: 0,
      x: 100,
      duration: 1.5,
      ease: 'power3.out',
    },
    '-=1.5'
  ); // We overlap the two animations to start simultaneously
});
const props = defineProps({
  sectionData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section id="future" class="bg-slate-100 dark:bg-neutral-900">
    <div class="container">
      <div class="grid gap-10 grid-cols-1 lg:grid-cols-2">
        <div class="pr-16  future-content">
          <h2 class="text-4xl">{{ sectionData.title }}</h2>
          <div class="py-6">
            <p>{{ sectionData.description }}</p>
            <div class="py-4">
              <ul>
                <li
                  class="py-2"
                  v-for="(item, idx) in sectionData.itemsList"
                  :key="idx"
                >
                  <span
                    ><UIcon name="ph:circles-three-plus-duotone" class="w-5"
                  /></span>
                  <span>
                    {{ item.text }}
                  </span>
                </li>
              </ul>

              <div class="py-4">
                <UButton size="xl" class="mr-3">Start your free trial</UButton>
              </div>
            </div>
          </div>
        </div>

        <div class="future-img">
          <div class="p-6 border rounded-2xl relative">
            <img src="/future-img.png" class="rounded-2xl w-full" />
            <div class="absolute z-10 left-0 bottom-0 bg-white rounded-2xl p-3">
              <div class="flex items-center space-x-4">
                <USkeleton
                  class="h-12 w-12 bg-gray-500"
                  :ui="{ rounded: 'rounded-full' }"
                />
                <div class="space-y-2">
                  <USkeleton class="h-4 w-[250px] bg-gray-600" />
                  <USkeleton class="h-4 w-[200px] bg-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
