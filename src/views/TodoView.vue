
<script setup>
import { supabase } from '@/lib/supabaseClient';
import { onMounted, ref } from 'vue';

const todo = ref(null);

const getTodo = async () => {
  const { data } = await supabase
    .from('todo')
    .select('*')
    .eq('id', 1)
    .single();

  console.log(data);
  todo.value = data;
}

onMounted(getTodo);

</script>

<template>
  <div>
    <h3>{{ todo?.title }}</h3>
    <p>{{ todo?.content }}</p>
  </div>
</template>

<style>

</style>
