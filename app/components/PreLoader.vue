<template>
  <div class="preloader">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
.preloader {
  @apply flex fixed items-center justify-center top-0 left-0 bg-white w-screen h-screen;
  z-index: 9999;
}

.spinner {
  @apply h-[80px] w-[80px] bg-green-700 rounded-full;
  animation: sk-scaleout 1s infinite ease-in-out;
}

@keyframes sk-scaleout {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
