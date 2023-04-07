import { common } from './syntax/common';
import { css } from './syntax/css';
import { jsTs } from './syntax/js_ts';
import { json } from './syntax/json';
import { global } from './vscode/global';

const theme = {
  name: 'Luis\'s Theme',
  type: 'dark',
  colors:
  {
    ...global
  },
  tokenColors:
  [
    ...common,
    ...css,
    ...json,
    ...jsTs
  ]
};

export { theme };