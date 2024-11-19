import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";


export class TemplateCheckbox extends LitElement {

  static get tag() {
    return 'TemplateCheckbox';
  }

  constructor() {
    super();
        this.checkboxLabel;
    }

  render() {
    return html`
        <div class="checkbox">
            <input type="checkbox"></input>  
            <label id="checkboxLabel">${this.checkboxLabel}</label>
            <br>
        </div>
      `;
    }

  static get properties() {
    return {
        checkboxLabel: {type: String},
    };
  }

  static get styles() {
    return css`


    `;
    }
}

globalThis.customElements.define(TemplateCheckbox.tag, TemplateCheckbox);