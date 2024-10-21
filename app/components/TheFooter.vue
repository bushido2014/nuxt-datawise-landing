<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="py-5 container border-t border-gray-200">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <span class="text-2xl font-bold mr-1">DataWise</span>

         <img src="/datawise-logo.png" />
        </div>
        <div>
          <NuxtLink to="https://www.figma.com/@wblekhoa" target="_blank"
            ><span><UIcon name="logos:figma" class="w-8 mr-1" /></span>
            <span class="text-gray-500 underline"
              >Designer. Khoa “JAK”</span
            ></NuxtLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>
