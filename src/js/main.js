// @flow
import { mount, el } from 'redom';
import Card from './components/Card';

const card = new Card('width: 300px');
const content = el('span', 'some text?\nyeah');
mount(card, content);
mount(document.body, card);
