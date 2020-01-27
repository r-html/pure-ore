Component({
  selector: 'app-component',
  template: () => html`
    <router-link path="/home">
      <rx-button palette="primary">Home</rx-button>
    </router-link>

    <router-link path="/about">
      <rx-button palette="primary">About</rx-button>
    </router-link>

    <button>
      <a href="/spiridonkata">
        Spiridonkata
      </a>
    </button>
   
    <router-outlet
        .routes=${[
          {
            path: 'home',
            component: () => import('./home/home.js')
          },
          {
            path: 'about',
            component: () => import('./about/about.js')
          },
          {
            path: 'spiridonkata',
            component: () => import('./spiridonkata.js')
          },
          {
            path: '**',
            redirectTo: '/home'
          }
        ]}
      ></router-outlet>
  `
})(class AppComponent extends LitElement {});
