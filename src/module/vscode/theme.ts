import { global } from './component/global';
import { common } from './syntax/common';
import { css } from './syntax/css';
import { jsTs } from './syntax/js_ts';
import { json } from './syntax/json';
import { markdown } from './syntax/markdown';

const theme =
{
  colors:
  {
    ...global
  },
  name: 'Aesthetic\'s Theme',
  semanticHighlighting: true,
  tokenColors:
  [
    ...common,
    ...css,
    ...json,
    ...jsTs,
    ...markdown
  ],
  type: 'dark'
};

export { theme };