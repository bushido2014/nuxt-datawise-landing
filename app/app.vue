<script setup>
import { ref, onBeforeMount, onMounted } from 'vue';
  
import { contentData } from '@/helpers/contentData';  
const showHideSpinner = ref(true);

onBeforeMount(() => {
  showHideSpinner.value = true;
});

onMounted(() => {
  setTimeout(() => {
    showHideSpinner.value = false;
  }, 1500);
});
useSeoMeta({
  title: 'Nuxt Datawise Landing Page',
  description: 'Nuxt Datawise Landing Page',
});
</script>

<template>
  <div id="top">
    <TheHeader />
    <PreLoader v-if="showHideSpinner" />
    <SectionPowerData :section-data="contentData.powerdata" />
    <SectionLogos />
    <SectionInnovation :section-data="contentData.innovation" />
    <SectionSolution :section-data="contentData.solution" />
    <SectionBlogs :section-data="contentData.blog" />
    <SectionFuture :section-data="contentData.future" />
    <SectionFaq :section-data="contentData.faq" />
    <TheFooter />
  </div>
</template>
