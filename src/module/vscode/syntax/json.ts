import { cyan, information } from '../../../global/theme/color';

const json = [
  {
    name: 'JSON constants',
    scope: 'constant.language.json',
    settings: {
      foreground: cyan.cyan_600
    }
  },
  {
    name: 'JSON name',
    scope: 'support.type.property-name.json',
    settings: {
      fontStyle: 'bold',
      foreground: information.information_600
    }
  }
];

export { json };