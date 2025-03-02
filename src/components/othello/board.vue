<script setup>
import { ref } from 'vue';

// 8×8のグリッドを初期化
const grid = ref(Array.from({ length: 8 }, () => Array(8).fill("")));

const player = ref({
  name: "",
  color: "white"
});

//　石をセット
const setCell = (y, x) => {
  if (grid.value[y][x] === "") {
    grid.value[y][x] = player.value.color  === "white" ? "⚪️" : "⚫️";
  }
};

const changePlayerColor = () => {
  // プレイヤーの色を交互に切り替える
  player.value.color = player.value.color === "white" ? "black" : "white";
}

</script>

<template>
  <div >
    <div 
      v-for="(row, y) in grid"
      class="flex"
    >
      <div
        v-for="(cell, x) in row"
        class="w-[100px] h-[100px] bg-green-400 border border-black flex items-center justify-center"
      >
        <div @click="()=>{
          setCell(y, x);
          changePlayerColor();
        }" class="w-full h-full flex items-center justify-center">
          <span class="text-6xl">{{ cell }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
