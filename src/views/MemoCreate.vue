<script setup>
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';

const title = ref('');
const content = ref('');
const message = ref('');

// メモを作成する処理
const createMemo = async () => {
  const { error } = await supabase
    .from('memos')
    .insert([{ title: title.value, content: content.value }]);

  if (error) {
    message.value = `エラー: ${error.message}`;
    console.error(error);
  } else {
    message.value = 'メモが正常に作成されました！';
    // 入力値をクリア
    title.value = '';
    content.value = '';
  }
};
</script>

<template>
  <div class="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
    <h3 class="text-xl font-bold mb-4 text-center">メモ作成</h3>
    <form @submit.prevent="createMemo" class="space-y-4">
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700">タイトル:</label>
        <input
          id="title"
          v-model="title"
          type="text"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label for="content" class="block text-sm font-medium text-gray-700">内容:</label>
        <textarea
          id="content"
          v-model="content"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
      >
        作成
      </button>
    </form>
    <p v-if="message" class="mt-4 text-center text-sm text-green-600">{{ message }}</p>
  </div>
</template>
