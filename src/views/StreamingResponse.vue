<script setup>
import { ref } from 'vue';
import { fetchChatStream } from '@/repositories/ChatRepository';

const message = ref('');

async function startChat() {
  message.value = '';
  const messages = [
    { role: 'system', content: 'あなたは親切なアシスタントです。' },
    { role: 'user', content: 'こんにちは！' },
  ];
  
  await fetchChatStream(messages, (text) => {
    message.value += text; // 文字が届くたびに追加していく
  });
}
</script>

<template>
  <div class="p-4">
    <div class="whitespace-pre-wrap border p-4 rounded">
      {{ message }}
    </div>
    <button @click="startChat" class="mt-4 p-2 bg-blue-500 text-white rounded">チャット開始</button>
  </div>
</template>
