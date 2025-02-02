
<script setup>
import { supabase } from '@/lib/supabaseClient';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const route = useRouter();

const todo = ref(null);

console.log(route);
// console.log(this.$route.params.id);

const getTodo = async () => {
  const id = route.params;
  console.log(id);

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
    <h3>{{ todo.title }}</h3>
    <p>{{ todo.content }}</p>
  </div>
</template>

<style>

</style>
