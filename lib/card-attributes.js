import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";


export class CardAttributes extends LitElement {

  static get tag() {
    return 'card-attributes';
  }

  constructor() {
    super();
    this.attributeName = "";
     }

  render() {
    return html`
        <div>
            
        </div>
      `;
    }

  static get properties() {
    return {
        
    };
  }

  static get styles() {
    return css`
      



    `;
    }
}

globalThis.customElements.define(CardAttributes.tag, CardAttributes);