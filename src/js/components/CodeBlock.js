// @flow
import { el } from 'redom';
import Prism from 'prismjs';

class CodeBlock {
  el: Element;

  constructor(code: string) {
    const html = Prism.highlight(
      code,
      Prism.languages.javascript,
      'javascript',
    );
    this.el = el(
      'article',
      el('pre', {
        class: 'language-javascript',
        'data-language': 'javascript',
        innerHTML: html,
      }),
    );
  }
}

export default CodeBlock;
