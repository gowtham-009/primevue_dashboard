<template>
    <div class="w-full flex flex-col items-center h-full">
      <button
        @click="openIframe"
        class="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open Iframe
      </button>
  
      <iframe
        v-if="iframeVisible"
        :src="iframeSrc"
        frameborder="0"
        class="w-3/4 h-full"
      ></iframe>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'

  const iframeVisible = ref(false)
  const iframeSrc = ref('')

  const openIframe = () => {
    iframeSrc.value = `https://smartpayz.gwcindia.in/smartpayz/G1-Single.php?Ce=GZ10219`
    iframeVisible.value = true
  }
  </script>
  
  <style>

  </style>
  