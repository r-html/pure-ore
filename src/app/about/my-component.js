export default Component({
  selector: "my-component",
  template() {
    return html`
      My Component route params "omg": '${this.params.omg}'
    `;
  }
})(class MyComponent extends LitElement {});
