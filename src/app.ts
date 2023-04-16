import { common } from './syntax/common';
import { css } from './syntax/css';
import { jsTs } from './syntax/js_ts';
import { json } from './syntax/json';
import { markdown } from './syntax/markdown';
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
    ...jsTs,
    ...markdown
  ],
  semanticHighlighting: true,
  semanticTokenColors:
  {
    enumMember:
    {
      foreground: '#ced4da'
    },
    'variable.constant':
    {
      foreground: '#ced4da'
    }
  }
};

export { theme };