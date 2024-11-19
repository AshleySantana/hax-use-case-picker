import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";


export class SidebarFilter extends LitElement {

  static get tag() {
    return 'sidebar-filter';    
  }

  constructor() {
    super();
        this.categoryName = "";
        this.
    }

  render() {
    return html`
        <div id="searchBar"></div>
        <h4 class="categoryName">${this.categoryName}</h4>
        <div>
            <slot>

            </slot>
        </div>
        <h4 id="myFavoritesLink"></h4>
        <a href="page 2.html">Click here for page 2!</a>
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

globalThis.customElements.define(SidebarFilter.tag, SidebarFilter);