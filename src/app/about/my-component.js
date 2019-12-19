export default Component({
  selector: 'my-component',
  template() {
    return html`
      <div>
        My Component route params "omg": '${this.params.omg}'
      </div>
    `;
  }
})(class MyComponent extends LitElement {});
