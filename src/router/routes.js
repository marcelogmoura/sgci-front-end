const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'pessoas/form', component: () => import('pages/Pessoas/CreateEditPessoa.vue') },
      { path: 'pessoas/form/:id', component: () => import('pages/Pessoas/CreateEditPessoa.vue') },
      { path: 'pessoas/view/:id', component: () => import('pages/Pessoas/ViewPessoa.vue') },
      { path: '404/', component: () => import('pages/ErrorNotFound.vue') }

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
