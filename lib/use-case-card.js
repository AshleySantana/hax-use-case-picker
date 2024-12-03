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
        
        // have to do a new this.() for each attribute? think through that
        // call something diff, 
        this.altText = "";
     }

  render() {
    return html`
        <div class="card">
          <div class="image-wrapper">
            <img class="card-image" alt="${this.altText}" src="${this.image}"/>
          </div>
            <h1 id="card-title">${this.cardTitle}</h1>
            <div id="template-description">
              <slot>${this.templateDescription}</slot>
            </div>
            <div class="card-footer">
              <slot name="attrs"></slot>
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
        altText: {type: String},
    };
  }

  static get styles() {
    return css`
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
        margin-bottom:24px;
      }
      .card-image{
        width:100%;
        aspect-ratio: 3/2;
        }
      @media screen and (min-width:1440px){
        .card{
          width: 420px;
          height: 484px;
        }
      
      }
      @media screen and (min-width: 1080px)and (max-width:1439px){
        .card{
          width:316px;
          height:471px;
        }
        
      }
      @media screen and (min-width:768px) and (max-width:1079px){
        .card{
          width: 336px;
          height: 471px;
        }
        
        
      }
      




    `;
    }
}

globalThis.customElements.define(UseCaseCard.tag, UseCaseCard);