import navbar from './components/navbar.js';
import Home from './views/home.js';
import About from './views/about.js';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new VueRouter({
    routes // short for `routes: routes`
  })
const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    router,
    components:{navbar}
  })

  