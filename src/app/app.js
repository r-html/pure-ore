Component({
  selector: 'app-component',
  template: () => html`
    <router-link path="/home">
      <rx-button palette="primary">Home</rx-button>
    </router-link>
    <router-link path="/about">
      <rx-button palette="primary">About</rx-button>
    </router-link>
    <div>
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
            path: '**',
            redirectTo: '/home'
          }
        ]}
      ></router-outlet>
    </div>
  `
})(class AppComponent extends LitElement {});
