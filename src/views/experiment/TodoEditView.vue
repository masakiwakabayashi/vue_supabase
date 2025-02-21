
<script setup>
import { supabase } from '@/lib/supabaseClient';
import { onMounted, ref } from 'vue';

const title = ref('');
const content = ref('');

const getTodo = async () => {
  const { data } = await supabase
    .from('todo')
    .select('*')
    .eq('id', 1)
    .single();

    title.value = data.title;
    content.value = data.content;
}

onMounted(getTodo)

const updateTodo = async () => {
  await supabase
    .from('todo')
    .update({
      title: title.value,
      content: content.value,
    })
    .eq('id', 1)
    .then(()=>{
      console.log('Todoを更新');
    });

    title.value = "";
    content.value = "";
}

</script>

<template>
  <div>
    <h2>Todoを編集</h2>
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
      v-on:click="updateTodo()"
    >送信</button>
  </div>
</template>

<style>

</style>
