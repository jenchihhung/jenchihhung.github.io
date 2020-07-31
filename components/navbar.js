export default Vue.component('navbar', {
    template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand" href="#">Chih's Dev Pool</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" href="#">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" href="#">About</router-link>
        </li>
      </ul>
    </div>
  </nav>
    `
  })