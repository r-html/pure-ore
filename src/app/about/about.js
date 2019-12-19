export default Component({
  style: css`
    router-link[active] rx-button {
      background: darkcyan;
    }
  `,
  selector: 'about-component',
  template() {
    return html`
      <rx-animation
        .options=${({ stagger }) => ({
          delay: stagger(100),
          translateX: 0,
          easing: 'spring(1, 80, 10, 0)'
        })}
      >
        <div style="transform: translateX(-100%);">
          <p>About Component</p>
          <p><a href="/about/test">Go to Route without params</a></p>
          <p>
            <a href="/about/test/my-params"
              >Go to Route with params "my-params"</a
            >
          </p>

          <router-link path="/about/pesho">
            <rx-button palette="primary">Go to Pesho</rx-button>
          </router-link>
          <r-if .exp=${this.routerState === 'pesho'}>
            <p>Will show up when we access "pesho" route</p>
          </r-if>
        </div>
        <router-outlet .routes=${this.routes}></router-outlet>
      </rx-animation>
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
      this.routes = [
        {
          path: 'test/:omg',
          component: () => import('./my-component.js')
        },
        {
          path: 'test',
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
      ];
    }

    OnUpdateFirst() {
      this.changeStateEvent.subscribe();
    }
  }
);
