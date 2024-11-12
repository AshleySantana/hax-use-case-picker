import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";


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
            <div id="template-description"><slot>${this.templateDescription}</slot></div>
            <div class="card-footer">
              <div class="attributes">${this.attributes}</div>
              <button class="select-button">Select</button>
            </div>
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
      .card-image{
        height:
        width:
      }
      .card{
        background-color: lightgrey;
        border-radius: 8px;
      }
      #card-title{
        font-size: 22px;
        font-weight: bold;
        text-align:center;
      }
      #template-description{
        font-size:18px;
        text-align:center;
      }
      .card-footer{
        display:flex;
        justify-content:space-around;
      }
      @media screen and (max-width:1440px){
        .card{
          width: 440px;
          height: 484px;
        }
        .card-image{
        height: 280px;
        width:420px;
      }
      }
      @media screen and (max-width:1080px){
        .card{
          width: 316px;
          height: 471px;
        }
        .card-image{
        height:211px;
        width: 316px;
      }
      }
      @media screen and (max-width:768px){
        .card{
          width: 336px;
          height: 457px;
        }
        .card-image{
        height:336px;
        width:224px;
      }
      }




    `;
    }
}

globalThis.customElements.define(UseCaseCard.tag, UseCaseCard);