import { cyan, neutral, information } from './../theme/colors';

const jsTs = [
  {
    name: 'Interfaces',
    scope: [
      'entity.other.inherited-class.ts'
    ],
    settings: {
      foreground: cyan.cyan_600
    }
  },
  {
    name: 'Colors of the object',
    scope: [
      'meta.object-literal.key.js'
    ],
    settings: {
      foreground: neutral.neutral_400
    }
  },
  {
    name: 'JavaScript/TypeScript interpolation punctuation',
    scope: [
      'punctuation.definition.template-expression'
    ],
    settings: {
      foreground: information.information_600
    }
  }
];

export { jsTs };