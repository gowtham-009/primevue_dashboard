<!-- <script setup>
import { ref, watch } from 'vue';

const phpBaseUrl = "https://smartpayz.gwcindia.in/smartpayz/G1-Single.php";
const customCode = ref("GZ10219");
const iframeSrc = ref(`${phpBaseUrl}?ce=${customCode.value}`);

watch(customCode, (newCode) => {
  iframeSrc.value = `${phpBaseUrl}?ce=${newCode}`;
});
</script>

<template>
  <div>
    <h2>PHP Page in iFrame</h2>
    <input v-model="customCode" placeholder="Enter custom code" />
    <iframe :src="iframeSrc" width="100%" height="600px" frameborder="0"></iframe>
  </div>
</template> -->


<template>
    <div class="w-full h-full">
        <iframe class="w-full h-full" :src="'https://smartpayz.gwcindia.in/smartpayz/G1-Single.php?ce=' + customCode" />
    </div>
  </template>
  
  <script setup>
  const customCode = "GZ10219";
  </script>