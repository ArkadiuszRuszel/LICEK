
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/home', component: () => import('pages/Home.vue') },
      { path: '/interview', component: () => import('pages/Interview.vue') },
      { path: '/help', component: () => import('pages/Help.vue') },
      { path: '/account', component: () => import('pages/Account.vue') },
      { path: '/socialmedia', component: () => import('pages/SocialMedia.vue') },
      { path: '/downloads', component: () => import('pages/Downloads.vue') },
      { path: '/changelog', component: () => import('pages/ChangeLog.vue') },
      { path: '/products', component: () => import('pages/ChangeLog.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
