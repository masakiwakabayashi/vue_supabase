<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import { supabase } from './lib/supabaseClient';

// console.log(supabase);
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/sample">Sample</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <!-- <RouterLink to="/todo">Todo List</RouterLink>
        <RouterLink :to="`/todo/1`">Todo</RouterLink> -->
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style>

</style>
