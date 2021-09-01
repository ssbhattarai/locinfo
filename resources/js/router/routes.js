const Example = () => import('../components/ExampleComponent.vue') //lazy loading
const Home = () => import('../pages/Home.vue')
const NotFound = () => import('../pages/Notfound.vue')

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home

    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
  {
      path: '/example',
      name: 'example',
      component: Example
  },


];

export default routes;
