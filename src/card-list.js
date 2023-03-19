import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/meme-maker/meme-maker.js';
import 'jalen-card/src/jalen-card.js';
import 'athlete-card2/src/athlete-card2.js';

export class CardList extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
        reflect: true,
      },
      fname: { type: String },
      position: {
        type: String,
      },
      top: { type: String },
      statsLabel: { type: String },
      image: { type: String },
    };
  }

  static get styles() {
    return css`
      .wrapper {
        width: 400px;
        border: 2px solid black;
        display: inline-flex;
      }

      .image {
        width: 400px;
      }

      .header {
        text-align: center;
        font-weight: bold;
        font-size: 2rem;
      }

      .header h3:hover {
        font-style: italic;
        font-size: 1.1em;
      }

      .header h3,
      .header h4 {
        transition: 0.3s ease-in-out all;
        margin: 16px;
        font-style: normal;
      }

      .buttons button:focus,
      .buttons button:hover {
        background-color: rgba(200, 0, 50, 0.5);
      }

      .buttons button:active {
        background-color: rgba(50, 0, 200, 0.5);
      }

      .buttons {
        display: block;
      }

      button {
        padding: 12px;
        font-size: 32px;
      }

      details {
        margin-left: 24px;
        padding: 10px;
      }

      .details summary {
        font-size: 20px;
        font-weight: bold;
      }

      @media only screen and (max-width: 1200px) {
        .wrapper {
          background-color: blue;
        }
      }
      @media only screen and (max-width: 600px) {
        .wrapper {
          background-color: red;
        }
      }
      @media only screen and (max-width: 425px) {
        .wrapper {
          font-weight: normal;
        }
        .wrapper .header h3 {
          font-size: 12px;
        }
        .wrapper .header h4 {
          font-size: 10px !important;
        }
        details {
          display: none;
        }
      }
    `;
  }

  consructor() {
    super();
    this.image = new URL('../assets/jalen.jpg', import.meta.url).href;
    this.name = 'Jalen Hurts';
    this.position = 'Quarterback';
    this.top = 'MVP';
    this.statsLabel = 'Career Stats';
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="container">
          <meme-maker image-url="${this.image}" top-text="${this.top}">
          </meme-maker>
          <div class="header">
            <h3>${this.name}</h3>
            <h4>${this.position}</h4>
          </div>
          <details class="details">
            <summary>${this.statsLabel}</summary>
            <div>
              <slot></slot>
            </div>
          </details>
        </div>
      </div>
    `;
  }
}

customElements.define('card-list', CardList);
