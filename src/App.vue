<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import { supabase } from './lib/supabaseClient';

// console.log(supabase);
</script>

<template>
  <header class="bg-blue-600 text-white shadow-md">
    <div class="wrapper max-w-7xl mx-auto px-4 py-3">
      <nav class="flex justify-between items-center">
        <div class="text-lg font-bold">My App</div>
        <div class="space-x-4">
          <RouterLink
            to="/"
            class="hover:text-blue-200 transition-colors duration-200"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/about"
            class="hover:text-blue-200 transition-colors duration-200"
          >
            About
          </RouterLink>
          <RouterLink
            to="/sample"
            class="hover:text-blue-200 transition-colors duration-200"
          >
            Sample
          </RouterLink>
          <RouterLink
            to="/login"
            class="hover:text-blue-200 transition-colors duration-200"
          >
            Login
          </RouterLink>
          <RouterLink
            to="/todo"
            class="hover:text-blue-200 transition-colors duration-200"
          >
            Todo List
          </RouterLink>
          <RouterLink
            :to="`/todo/1`"
            class="hover:text-blue-200 transition-colors duration-200"
          >
            Todo
          </RouterLink>
          <RouterLink
            to="/todo/create"
            class="hover:text-blue-200 transition-colors duration-200"
          >
            Create Todo
          </RouterLink>
          <RouterLink
            :to="`/todo/edit/1`"
            class="hover:text-blue-200 transition-colors duration-200"
          >
            Edit Todo
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
