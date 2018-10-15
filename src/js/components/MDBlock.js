import { el, mount } from 'redom';
import showdown from 'showdown';
import showdownHighlight from 'showdown-highlight';
import Card from './Card';

class MDBlock extends Card {
  constructor({ width }) {
    super({ width });
    const converter = new showdown.Converter({
      extensions: [showdownHighlight],
    });
    const html = converter.makeHtml(`
      ## Highlighting Code with Showdown
      
      Below we have a piece of JavaScript code:
      
      \`\`\`js
      function sayHello (msg, who) {
          return \`\${who} says: msg\`;
      }
      sayHello("Hello World", "Johnny");
      \`\`\`
    `);
    console.log(html);
    const element = el('article', { class: 'markdown-body', innerHTML: html });

    mount(this.el, element);
  }
}

export default MDBlock;
