<script setup>


</script>

<template>
  <div>
    <div 
      v-for="i in 8"
      class="flex"
    >
      <div
        v-for="i in 8"
        class="w-[100px] h-[100px] bg-green-400 border border-black"
      ></div>
    </div>
  </div>
</template>
