<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import { supabase } from './lib/supabaseClient';

// console.log(supabase);
</script>

<template>
  <header class="bg-blue-600 text-white shadow-md">
    <div class="wrapper max-w-7xl mx-auto px-4 py-3">
      <nav class="text-xl flex justify-between items-center">
        <div class="font-bold text-2xl">My App</div>
        <div class="space-x-4">
          <RouterLink
            to="/habit_tracker"
            class="hover:text-blue-200 transition-colors duration-200"
          >
            Habit Tracker
          </RouterLink>
          <RouterLink
            to="/othello"
            class="hover:text-blue-200 transition-colors duration-200"
          >
            Othello
          </RouterLink>
          <RouterLink
            to="/"
            class="hover:text-blue-200 transition-colors duration-200"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/login"
            class="hover:text-blue-200 transition-colors duration-200"
          >
            Login
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
