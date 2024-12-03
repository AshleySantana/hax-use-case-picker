import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";


export class CardAttribute extends LitElement {

  static get tag() {
    return 'card-attribute';
  }

  constructor() {
    super();
    this.attributeName = "";
    this.image = "";
     }

  render() {
    return html`
        <div class="attributeBubble">
          ${this.attributeName}
          <div class="image-wrapper">
            <img class="cardImage" src="${this.image}"/>
          </div>
        </div>
      `;
    }

  static get properties() {
    return {
      attributeName: {type: String},
      image: {type: String},
    };
  }

  static get styles() {
    return css`
      .cardImage{
        width:30px;
        height:30px;
        border-radius:50px;
      }
      
      
    `;
    }
}

globalThis.customElements.define(CardAttribute.tag, CardAttribute);