import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/meme-maker/meme-maker.js';
import 'jalen-card/src/jalen-card.js';
import 'athlete-card2/src/athlete-card2.js';

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  render() {
    return html`
      <jalen-card> </jalen-card>
      <jalen-card name="Jalen" position="Running Back" top="Cool Guy"
        ><slot
          ><ul>
            <li>Best QB in the League</li>
          </ul></slot
        >
      </jalen-card>
      <jalen-card name="Patrick Mahomes" position="Shit" top="Ugly">
        <slot
          ><ul>
            <li>Worst QB in the League</li>
          </ul></slot
        >
      </jalen-card>
      <jalen-card name="AJ Brown" position="Wide Receiver"> </jalen-card>
      <jalen-card name="Dallas Goedert" position="Tight End">
        <slot
          ><ul>
            <li>The only Dallas making it to the Superbowl</li>
          </ul></slot
        >
      </jalen-card>
      <athlete-card2
        name="Miles Sanders"
        position="Running Back"
        toptext="Fast"
      >
      </athlete-card2>
      <athlete-card2 name="Lebron James" position="Power Forward">
      </athlete-card2>
      <athlete-card2 name="Dak Prescott" position="Piece of Shit">
      </athlete-card2>
      <athlete-card2 name="Drew Doughty" position="Defenceman">
        <slot
          ><ul>
            <li>Overpaid Toothless Wonder</li>
          </ul></slot
        >
      </athlete-card2>
      <athlete-card2 name="Robert Downy Jr." position="Iron Man">
      </athlete-card2>
    `;
  }
}

customElements.define('card-list', CardList);
