// @flow
import { mount } from 'redom';
import MDBlock from './components/MDBlock';
import testMD from '../articles/page1.md';
// import CodeBlock from './components/CodeBlock';

const card = new MDBlock({
  text: testMD,
  width: '800px',
});
mount(document.body, card);
