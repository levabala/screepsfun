import marked from 'marked';
import Prism from 'prismjs';
import { el, mount } from 'redom';
import Card from './Card';

class MDBlock extends Card {
  constructor({ text, width }) {
    super({ width });
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: code => {
        const element = Prism.highlight(
          code,
          Prism.languages.javascript,
          'javascript',
        );
        return element;
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });
    const element = el('div', {
      innerHTML: marked(text),
    });
    mount(this.el, element);
  }
}

export default MDBlock;
