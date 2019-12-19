export default Component({
  style: css`
    router-link[active] button {
      background: aquamarine;
    }
  `,
  selector: 'about-component',
  template() {
    return html`
      <p>About Component</p>
      <p><a href="/about/route">Go to Route without params</a></p>
      <p>
        <a href="/about/route/my-params">Go to Route with params "my-params"</a>
      </p>
      <p><a href="/about/pesho">Go to Pesho</a></p>
      <router-link path="/about/pesho">
        <button>Go to Pesho (with router-link component)</button>
      </router-link>
      <r-if .exp=${this.routerState === 'pesho'}>
        Will show up when we access "pesho" route
      </r-if>

      <router-outlet
        .routes=${[
          {
            path: 'route/:omg',
            component: () => import('./my-component.js')
          },
          {
            path: 'route',
            component: () => import('./my-component.js')
          },
          {
            path: 'pesho',
            component: () => {
              const el = document.createElement('div');
              render(
                html`
                  ${'Pesho dynamic component'}
                `,
                el
              );
              return el;
            }
          }
        ]}
      ></router-outlet>
    `;
  }
})(
  class AboutComponent extends LitElement {
    static get properties() {
      return {
        routerState: { type: String }
      };
    }

    constructor() {
      super();
      this.changeStateEvent = fromEvent(window, 'changestate').pipe(
        tap(
          () => (this.routerState = window.location.pathname.split('/').pop())
        )
      );
    }

    OnUpdateFirst() {
      this.changeStateEvent.subscribe();
    }
  }
);
