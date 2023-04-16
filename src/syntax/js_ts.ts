import { cyan, gray, sky } from '../theme/colors';

const jsTs = [
  {
    name: 'Colors of the object',
    scope: [
      'meta.object-literal.key.ts'
    ],
    settings: {
      fontStyle: 'bold',
      foreground: sky.sky_600
    }
  },
  {
    name: 'TS types',
    scope: [
      'support.type.primitive.ts'
    ],
    settings: {
      fontStyle: 'bold',
      foreground: cyan.cyan_600
    }
  },
  {
    name: 'Template string',
    scope: [
      'meta.template.expression.ts'
    ],
    settings: {
      foreground: gray.gray_400
    }
  }
];

export { jsTs };