import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { supabase } from '@/lib/supabaseClient'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/experiment/AboutView.vue'),
    },
    // ルーティングはここにどのコンポーネントを使うかを登録する
    {
      path: '/sample',
      name: 'sample',
      component: () => import('../views/experiment/SampleView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/othello',
      name: 'othello',
      component: () => import('../views/othello/Othello.vue'),
    },
    {
      path: '/todo',
      name: 'todoList',
      component: () => import('../views/experiment/TodoListView.vue'),
    },
    {
      path: '/todo/:id',
      name: 'todo',
      component: () => import('../views/experiment/TodoView.vue'),
    },
    {
      path: '/todo/create',
      name: 'todoCreate',
      component: () => import('../views/experiment/TodoCreateView.vue'),
    },
    {
      path: '/todo/edit/:id',
      name: 'todoEdit',
      component: () => import('../views/experiment/TodoEditView.vue'),
    },
    {
      path: '/memo/create',
      name: 'memoCreate',
      component: () => import('../views/MemoCreate.vue'),
    },
    {
      path: '/memo/edit',
      name: 'memoEdit',
      component: () => import('../views/MemoEdit.vue'),
    },
    {
      path: '/habit_tracker',
      name: 'HabitTracker',
      component: () => import('../views/HabitTracker.vue'),
    },
  ],
});

// // ログイン判定
// router.beforeEach(async (to, from, next) => {
//   const { data: { session } } = await supabase.auth.getSession();
//   // 認証が必要なページへのアクセス時にログインしていない場合、ログインページにリダイレクト
//   if (to.meta.requiresAuth && !session) {
//     next('/login');
//   }
//   // ログインページにアクセスする際、すでにログインしている場合はダッシュボードへリダイレクト
//   else if (to.path === '/' && session) {
//     next('/');
//   }
//   else {
//     next();
//   }
// });

export default router
