


<template>
    <div class="w-full h-full">
        <iframe class="w-full h-full" :src="'https://smartpayz.gwcindia.in/smartpayz/G1-Single.php?ce=' + customCode" />
    </div>
  </template>
  
  <script setup>
  const customCode = "GZ10219";
  </script>