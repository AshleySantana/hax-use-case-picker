import { LitElement, html, css } from 'lit';

export class UseCaseCard extends LitElement {

  static get tag() {
    return 'use-case-card';
  }

  constructor() {
    super();
        this.cardTitle = "";
        this.image = "";
        this.demoLink = "";
        this.templateDescription = "...";
        this.selectButton = false;
        this.attributes = true;
        // have to do a new this.() for each attribute? think through that
        this.altText = "";
     }

  render() {
    return html`
        <div class="card">
            <img class="card-image" alt="${this.altText}" src="${this.image}"/>
            <h1 id="card-title">${this.cardTitle}</h1>
            <div><slot>${this.templateDescription}</slot></div>
            <div>${this.attributes}</div>
            <button class="select-button"></button>
        </div>
      `;
    }

  static get properties() {
    return {
        cardTitle: {type: String},
        image: {type: String},
        demoLink: {type: String},
        templateDescription: {type: String},
        selectButton: {type: Boolean},
        attributes: {type: Boolean},
        altText: {type: String},
    };
  }

  static get styles() {
    return css`

    `;
    }
}

globalThis.customElements.define(UseCaseCard.tag, UseCaseCard);