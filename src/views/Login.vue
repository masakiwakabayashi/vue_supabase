
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
  <div>
    <!-- メールアドレス -->
    <div class="form-block">
      <label for="email">メールアドレス</label><br>
      <input
        id="email"
        type="email"
        placeholder="email"
        v-bind:value="email"
        v-on:input="email = $event.target.value"
      >
    </div>
    <!-- パスワード -->
    <div class="form-block">
      <label for="password">パスワード</label><br>
      <input
        id="password"
        type="password"
        placeholder="password"
        v-bind:value="password"
        v-on:input="password = $event.target.value"
      >
    </div>
    <!-- 送信ボタン -->
    <div>
      <button
        v-on:click="doLogin()"
      >送信</button>
    </div>
  </div>
</template>


<style>


</style>
