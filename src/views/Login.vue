
<script setup>
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const doLogin = async () => {
  console.log(email.value);
  console.log(password.value);

  // Supabaseにリクエストを送る
  await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  }).then((res) => {
    console.log(res);
    // ホームにリダイレクト
    router.push('/');
  });
}

</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <!-- メールアドレス -->
      <div class="form-block">
        <label for="email" class="block text-sm font-medium text-gray-700">メールアドレス</label>
        <input
          id="email"
          type="email"
          placeholder="email"
          v-bind:value="email"
          v-on:input="email = $event.target.value"
          class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
      </div>
      <!-- パスワード -->
      <div class="form-block">
        <label for="password" class="block text-sm font-medium text-gray-700">パスワード</label>
        <input
          id="password"
          type="password"
          placeholder="password"
          v-bind:value="password"
          v-on:input="password = $event.target.value"
          class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
      </div>
      <!-- 送信ボタン -->
      <div>
        <button
          v-on:click="doLogin()"
          class="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >送信</button>
      </div>
    </div>
  </div>
</template>
