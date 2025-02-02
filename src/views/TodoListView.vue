<script setup>
import { supabase } from '@/lib/supabaseClient';
import { onMounted, ref } from 'vue';

const todoLists = ref(null);

const getTodoList = async () => {
  const { data } = await supabase
    .from('todo').select('*');

    todoLists.value = data;

  console.log(data);
}

onMounted(getTodoList);

</script>

<template>
  <div>
    <h1>Todo リスト</h1>
    <div>
      <ul>
        <li v-for="(todo) in todoLists" :key="todo.id">
          {{ todo.id }} : {{ todo.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>

</style>
