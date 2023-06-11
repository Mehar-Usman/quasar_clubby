
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/usman2', component: () => import('pages/IndexPage.vue') },
      { path: 'usman', component: () => import('pages/about.vue') },
      { path: 'usman3', component: () => import('pages/angvo.vue') },
      { path: 'typography', component: () => import('components/typography.vue') },

    ]
  },

  {
    path: '/',
    component: () => import('layouts/ClubbyLayout.vue'),
    children: [
      { path: '/nod', component: () => import('pages/clubby.vue') },
      { path: '/login', component: () => import('pages/login.vue') },
      { path: '/main', component: () => import('pages/clubby_mainpage.vue') },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
