import { css } from './syntax/css';
import {
  cyan, gray, information, success, emerald, amber
} from './theme/colors';
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
    {
      name: 'Comment',
      scope: [
        'comment'
      ],
      settings: {
        foreground: gray.gray_700
      }
    },
    {
      name: 'String',
      scope: [
        'string',
        'constant.other.symbol'
      ],
      settings: {
        foreground: emerald.emerald_600
      }
    },
    {
      name: 'Regular Expressions and Escape Characters',
      scope: [
        'string.regexp',
        'constant.character.escape'
      ],
      settings: {
        foreground: emerald.emerald_200
      }
    },
    {
      name: 'Constant color',
      scope: [
        'constant.language',
        'constant.numeric'
      ],
      settings: {
        foreground: cyan.cyan_600
      }
    },
    {
      name: 'Variable, number, Built-in constants, separators like ; or ,',
      scope: [
        'variable',
        'variable.parameter.function-call',
        'punctuation.separator',
        'punctuation.terminator',
        'punctuation.section',
        'punctuation.accessor'
      ],
      settings: {
        foreground: gray.gray_400
      }
    },
    {
      name: 'Function name and arguments',
      scope: [
        'entity.name.function',
        'variable.parameter',
        'meta.parameter'
      ],
      settings: {
        foreground: gray.gray_400
      }
    },
    {
      name: 'Storage, keyword',
      scope: [
        'storage',
        'keyword',
        'keyword.operator',
        'variable.language'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: information.information_700
      }
    },
    {
      name: 'Entity name',
      scope: [
        'entity.name'
      ],
      settings: {
        foreground: cyan.cyan_600
      }
    },
    {
      name: 'Tag',
      scope: [
        'entity.name.tag',
        'meta.tag.sgml'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: information.information_500
      }
    },
    {
      name: 'Tag start/end',
      scope: [
        'punctuation.definition.tag.end',
        'punctuation.definition.tag.begin',
        'punctuation.definition.tag'
      ],
      settings: {
        foreground: information.information_600
      }
    },
    {
      name: 'Tag attribute',
      scope: [
        'entity.other.attribute-name'
      ],
      settings: {
        foreground: amber.amber_600
      }
    },
    {
      name: 'Library constant',
      scope: [
        'support.constant'
      ],
      settings: {
        // foreground: amber.amber_600
      }
    },
    {
      name: 'Library class/type',
      scope: [
        'support.type',
        'support.class',
        'source.go storage.type'
      ],
      settings: {
        foreground: information.information_600
      }
    },
    {
      name: 'Search Results Match Numbers',
      scope: [
        'constant.numeric.line-number.match'
      ],
      settings: {
        foreground: information.information_500
      }
    },
    {
      name: 'Search Results Lines',
      scope: [
        'entity.name.filename.find-in-files'
      ],
      settings: {
        foreground: success.success_500
      }
    },
    ...css
  ]
};

export { theme };