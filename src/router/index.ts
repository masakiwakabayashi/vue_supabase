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
      meta: { requiresAuth: true },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/experiment/AboutView.vue'),
      meta: { requiresAuth: true },
    },
    // ルーティングはここにどのコンポーネントを使うかを登録する
    {
      path: '/sample',
      name: 'sample',
      component: () => import('../views/experiment/SampleView.vue'),
      meta: { requiresAuth: true },
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
      meta: { requiresAuth: true },
    },
    {
      path: '/todo',
      name: 'todoList',
      component: () => import('../views/experiment/TodoListView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/todo/:id',
      name: 'todo',
      component: () => import('../views/experiment/TodoView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/todo/create',
      name: 'todoCreate',
      component: () => import('../views/experiment/TodoCreateView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/todo/edit/:id',
      name: 'todoEdit',
      component: () => import('../views/experiment/TodoEditView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/memo/create',
      name: 'memoCreate',
      component: () => import('../views/MemoCreate.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/memo/edit',
      name: 'memoEdit',
      component: () => import('../views/MemoEdit.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/habit_tracker',
      name: 'HabitTracker',
      component: () => import('../views/HabitTracker.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/memo/create',
      name: 'memoCreate',
      component: () => import('../views/MemoCreate.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/streaming_test',
      name: 'StreamingResponse',
      component: () => import('../views/StreamingResponse.vue'),
      // meta: { requiresAuth: true },
    },
  ],
});

// // ログイン判定
// router.beforeEach(async (to, from, next) => {
//   const { data: { session } } = await supabase.auth.getSession();

//   const isAuthenticated = !!session;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   // 🔐 認証が必要 → 未ログインならログインページへ
//   if (requiresAuth && !isAuthenticated) {
//     return next('/login');
//   }

//   // 通常通り遷移
//   next();
// });

export default router
