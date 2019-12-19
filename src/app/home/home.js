export default Component({
  selector: "home-component",
  template() {
    return html`
      <r-part>
        <r-settings .value=${{ fetchPolicy: "cache-first" }}></r-settings>
        <r-fetch .query=${`{ continents { name } }`}></r-fetch>
        <r-render .state=${({ data: { continents } }) => html`
          <r-for .of=${continents}>
            <r-let .item=${({ name }) => html`${name}`}></r-let>
          </r-for>
        `}>
        </r-render>
      </r-part>
    `;
  }
})(class HomeComponent extends LitElement {});
