Component({
  selector: "app-component",
  template: () => html`
    <a href="/home">Home</a>
    <a href="/about">About</a>
    <router-outlet
      .routes=${[
        {
          path: "home",
          component: () => import("./home/home.js")
        },
        {
          path: "about",
          component: () => import("./about/about.js")
        },
        {
          path: "**",
          redirectTo: "/home"
        }
      ]}
    ></router-outlet>
  `
})(class AppComponent extends LitElement {});
