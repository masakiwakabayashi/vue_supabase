import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { supabase } from '@/lib/supabaseClient'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    // ルーティングはここにどのコンポーネントを使うかを登録する
    {
      path: '/sample',
      name: 'sample',
      component: () => import('../views/SampleView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/todo',
      name: 'todoList',
      component: () => import('../views/TodoListView.vue'),
    },
    {
      path: '/todo/:id',
      name: 'todo',
      component: () => import('../views/TodoView.vue'),
    }
  ],
});

// ログイン判定
router.beforeEach(async (to, from, next) => {
  const { data: { session } } = await supabase.auth.getSession();
  // 認証が必要なページへのアクセス時にログインしていない場合、ログインページにリダイレクト
  if (to.meta.requiresAuth && !session) {
    next('/login');
  }
  // ログインページにアクセスする際、すでにログインしている場合はダッシュボードへリダイレクト
  else if (to.path === '/' && session) {
    next('/');
  }
  else {
    next();
  }
});

export default router
