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
        class="w-[100px] h-[100px] bg-green-400 border border-black"
      >
        <div v-if="n == 4 && i == 4" >⚫️</div>
        <div v-if="n == 4 && i == 5" >⚫️</div>
        <div v-if="n == 5 && i == 4" >⚫️</div>
        <div v-if="n == 5 && i == 5" >⚫️</div>
      </div>
    </div>
  </div>
</template>
