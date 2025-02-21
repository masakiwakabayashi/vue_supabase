<script setup>
import { supabase } from '@/lib/supabaseClient';
import { onMounted, ref } from 'vue';

const memos = ref(null);

const getMemos = async () => {
  const { data } = await supabase
    .from('memos')
    .select('*');

  console.log(data);
  memos.value = data;
}

onMounted(getMemos);

</script>

<template>
  <div>
    <h3>Memos</h3>
    <div v-for="memo in memos" class="memo">
      <p>{{ memo.title }}</p>
      <p>{{ memo.content }}</p>
    </div>
  </div>
</template>

<style>
.memo {
  padding: 10px 0;
}

</style>