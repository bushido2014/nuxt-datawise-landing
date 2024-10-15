<script setup lang="ts">
import { onMounted } from 'vue';
const { gsap, ScrollToPlugin } = useGsap();

onMounted(() => {
  // Function to set smooth scroll based on a selector
  function setupSmoothScrolling(selector: string) {
    const links = document.querySelectorAll(selector);

    links.forEach((link) => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1); // Output "href"
        const targetElement = document.getElementById(targetId!);

        if (targetElement) {
          // Use GSAP for smooth scrolling
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: targetElement.offsetTop }, // Scroll to the section
          });
        }
      });
    });
  }

  // Apply smooth scrolling to all links in the main menu
  setupSmoothScrolling('#primary-menu a');
});

const isOpen = ref(false);
const closeMenu = () => {
  isOpen.value = false;
};
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});
</script>

<template>
  <header ref="header" class="header bg-background/95">
    <div class="container">
      <nav class="nav">
        <div class="flex gap-1 items-center">
          <span class="text-2xl font-bold mr-1">DataWise</span>
          <img src="/datawise-logo.png" />
        </div>
        <ul class="primary-menu" id="primary-menu">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#inno">Innovanion</a>
          </li>
          <li>
            <a href="#solution">Solution</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#future">Future</a>
          </li>
          <li>
            <a href="#faq">Faq</a>
          </li>
        </ul>
        <div class="lg:block hidden">
          <ClientOnly>
            <UButton
              :icon="
                isDark
                  ? 'i-heroicons-moon-20-solid'
                  : 'i-heroicons-sun-20-solid'
              "
              color="gray"
              variant="ghost"
              aria-label="Theme"
              @click="isDark = !isDark"
              class="mx-3 float:right"
            />
            <template #fallback>
              <div class="w-8 h-8" />
            </template>
          </ClientOnly>
        </div>
        <div class="lg:hidden flex items-center">
          <Icon
            name="nimbus:menu"
            size="32"
            @click="isOpen = true"
            class="cursor-pointer"
          />
          <ClientOnly>
            <UButton
              :icon="
                isDark
                  ? 'i-heroicons-moon-20-solid'
                  : 'i-heroicons-sun-20-solid'
              "
              color="gray"
              variant="ghost"
              aria-label="Theme"
              @click="isDark = !isDark"
              class="mx-3 float:right"
            />
            <template #fallback>
              <div class="w-8 h-8" />
            </template>
          </ClientOnly>
          <USlideover v-model="isOpen">
            <div class="p-5">
              <div class="p-1 text-left">
                <UButton
                  color="gray"
                  variant="ghost"
                  icon="i-heroicons-x-mark-20-solid"
                  class="-my-1"
                  @click="closeMenu"
                />
              </div>

              <ul class="mobile-menu border-t py-4">
                <li>
                  <a href="#top">Home</a>
                </li>
                <li>
                  <a href="#inno">Innovanion</a>
                </li>
                <li>
                  <a href="#solution">Solution</a>
                </li>
                <li>
                  <a href="#blogs">Blogs</a>
                </li>
                <li>
                  <a href="#future">Future</a>
                </li>
                <li>
                  <a href="#faq">Faq</a>
                </li>
              </ul>
            </div>
          </USlideover>
        </div>
      </nav>
    </div>
  </header>
</template>
<style scoped>
.header {
  @apply py-3  backdrop-blur border-b -mb-px sticky top-0 z-40 border-gray-200 dark:border-gray-800;
}
.nav {
  @apply flex items-center lg:justify-normal justify-between;
}
.primary-menu {
  @apply lg:flex gap-6 ml-auto text-xl capitalize hidden;
}

.mobile-menu {
  @apply border-t py-4;
}
.mobile-menu li {
  @apply py-2;
}
</style>
