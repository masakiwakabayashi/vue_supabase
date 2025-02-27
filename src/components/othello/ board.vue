<script setup>


</script>

<template>
  <div>
    <div 
      v-for="n in 8"
      class="flex"
    >
      <div
        v-for="i in 8"
        class="w-[100px] h-[100px] bg-green-400 border border-black flex items-center justify-center"
      >
        <div v-if="n == 4 && i == 4" class="w-full h-full flex items-center justify-center">
          <span class="text-6xl">⚪️</span>
        </div>
        <div v-if="n == 4 && i == 5" class="w-full h-full flex items-center justify-center">
          <span class="text-6xl">⚫️</span>
        </div>
        <div v-if="n == 5 && i == 4" class="w-full h-full flex items-center justify-center">
          <span class="text-6xl">⚫️</span>
        </div>
        <div v-if="n == 5 && i == 5" class="w-full h-full flex items-center justify-center">
          <span class="text-6xl">⚪️</span>
        </div>
      </div>
    </div>
  </div>
</template>
