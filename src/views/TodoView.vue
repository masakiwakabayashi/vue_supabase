
<script setup>
import { supabase } from '@/lib/supabaseClient';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const todo = ref(null);

const getTodo = async () => {
  const { data } = await supabase
    .from('todo')
    .select('*')
    .eq('id', route.params.id)
    .single();

  // console.log(data);
  todo.value = data;
}

onMounted(getTodo);

</script>

<template>
  <div>
    <h3>{{ todo?.title }}</h3>
    <p>{{ todo?.content }}</p>
    <p>{{ route.params.id }}</p>
  </div>
</template>

<style>

</style>
