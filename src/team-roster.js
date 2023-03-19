import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/meme-maker/meme-maker.js';
import 'jalen-card/src/jalen-card.js';

export class TeamRoster extends LitElement {
  static get tag() {
    return 'team-roster';
  }

  static get properties() {
    return {
      players: { type: Array },
      teamName: { type: String },
    };
  }

  constructor() {
    super();
    this.players = [];
    this.teamName = 'Philadelphia Eagles';
    this.updateRoster();
  }

  updateRoster() {
    const address = new URL('../api/roster', import.meta.url).href;
    fetch(address)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then(data => {
        this.players = data;
      });
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .wrapper {
        border: 2px solid black;
        display: flex;
      }
      .item {
        display: inline-flex;
      }
    `;
  }

  render() {
    return html`
      <h2>${this.team}</h2>
      <div class="wrapper">
        ${this.players.map(
          player => html`
            <div class="item">
              <jalen-card
                name="${player.name}"
                position="${player.position}"
                top="${player.top}"
                statsLabel="${player.statsLabel}"
                image="${player.image}"
              ></jalen-card>
            </div>
          `
        )}
      </div>
    `;
  }
}
customElements.define(TeamRoster.tag, TeamRoster);