
<script setup>
import { supabase } from '@/lib/supabaseClient';
import { onMounted, ref } from 'vue';

const title = ref("");
const content = ref("");

const createTodo = async () => {
  console.log(title.value);
  console.log(content.value);

  await supabase.from('todo').insert({
    title: title.value,
    content: content.value,
  }).then(()=>{
    console.log("Todoを作成");
  });

  title.value = "";
  content.value = "";
}

</script>

<template>
  <div>
    <h2>todoを作成する</h2>
    <!-- タイトル -->
    <div>
      <label for="">タイトル</label>
      <input
        id=""
        type="text"
        v-bind:value="title"
        v-on:input="title = $event.target.value"
      >
    </div>
    <!-- 中身 -->
    <div>
      <label for="">中身</label>
      <input
        id=""
        type="text"
        v-bind:value="content"
        v-on:input="content = $event.target.value"
      >
    </div>
    <!-- 送信ボタン -->
    <button
      v-on:click="createTodo()"
    >送信</button>
  </div>
</template>

<style>

</style>

