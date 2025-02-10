<script setup>
import { supabase } from '@/lib/supabaseClient';
import { onMounted, ref } from 'vue';

const user = ref(null);

const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error('ユーザー情報取得エラー:', error.message);
  }
  console.log(data.user);
  user.value = data.user;
}

onMounted(getCurrentUser);

</script>

<template>
  <div>
    <h1 class="p-3">Top Page</h1>
    <p>{{ user?.email }}</p>
  </div>
</template>
