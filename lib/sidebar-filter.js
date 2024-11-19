import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";


export class SidebarFilter extends LitElement {

  static get tag() {
    return 'sidebar-filter';    
  }

  constructor() {
    super();
        this.filterTitle = "";
        this.myFavorites = "";
    }

  render() {
    return html`
      <div>
        <input type="text" placeholder="Search..">
        <h4 class="categoryName">${this.filterTitle}</h4>
        <div>
          <slot class="checkboxList"></slot>
        </div>
        <h4 id="myFavoritesLink">${this.myFavorites}</h4>
      </div>
      `;
    }

  static get properties() {
    return {
      filterTitle: {type: String},
      myFavorites: {type: String},
    };
  }

  static get styles() {
    return css`
      

    `;
    }
}

globalThis.customElements.define(SidebarFilter.tag, SidebarFilter);