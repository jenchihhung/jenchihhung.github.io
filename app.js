import navbar from './components/navbar.js';
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    components:{navbar}
  })