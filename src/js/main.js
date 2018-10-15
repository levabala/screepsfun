// @flow
import { mount, el } from 'redom';
import MDBlock from './components/MDBlock';

const card = new MDBlock('width: 300px');
mount(document.body, card);
