<script setup>
import { supabase } from '@/lib/supabaseClient';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const todoLists = ref(null);

const getTodoList = async () => {
  const { data } = await supabase
    .from('todo')
    .select('*');

    todoLists.value = data;

  console.log(data);
}

const deleteTodo = async (id) => {
  await supabase
  .from('todo')
  .delete()
  .eq('id', id).then(()=>{
    console.log('Todo削除');
  });
}

onMounted(getTodoList);

</script>

<template>
  <div>
    <h1>Todo リスト</h1>
    <div>
      <ul>
        <li v-for="(todo) in todoLists" :key="todo.id">
          <RouterLink :to="`/todo/${todo.id}`">
            {{ todo.id }} : {{ todo.title }}
          </RouterLink>
          <button
            v-on:click="deleteTodo(todo.id)"
          >削除</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>

</style>
