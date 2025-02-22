<script setup>
import { supabase } from '@/lib/supabaseClient';
import { onMounted, ref } from 'vue';

const user = ref(null);
const memos = ref(null);

const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error('ユーザー情報取得エラー:', error.message);
  }
  console.log(data.user);
  user.value = data.user;
}

const getMemos = async () => {
  const { data } = await supabase
    .from('memos')
    .select('*');

  console.log(data);
  memos.value = data;
}

onMounted(()=>{
  getCurrentUser();
  getMemos();
});

</script>

<template>
  <div class="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold text-gray-800 p-3 border-b border-gray-300">Top Page</h1>
    
    <p class="text-gray-700 mt-4">{{ user?.email }}</p>
    
    <div class="mt-6">
      <div>
        <h3 class="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
        <span class="mr-4">Memos</span>
        <RouterLink
          to="/memo/create"
          class="hover:text-blue-200 transition-colors duration-200"
        >
          <i class="fa-solid fa-plus fa-lg"></i>
        </RouterLink>
        </h3>
      </div>
      <div v-for="memo in memos" :key="memo.id" class="bg-white p-4 mt-4 shadow-sm rounded-md border border-gray-200">
        <div>
          <p class="text-lg font-medium text-gray-900">{{ memo.title }}</p>
          <p class="text-gray-700 mt-1">{{ memo.content }}</p>
        </div>
        <div class="flex space-x-2 justify-end">
          <button @click="editMemo(memo)" class="text-blue-500 hover:text-blue-700">
            <i class="fas fa-edit fa-2x"></i>
          </button>
          <button @click="deleteMemo(memo.id)" class="text-red-500 hover:text-red-700">
            <i class="fas fa-trash fa-2x"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
</style>
