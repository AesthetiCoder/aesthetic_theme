const colors = require('./colors');

module.exports = {
  name: 'Luis\'s Theme',
  type: 'dark',
  colors: {
    foreground: colors.gray.gray_400,
    'editor.background': colors.background.background_900,
    'editor.foreground': colors.gray.gray_400,
    'editorCursor.foreground': colors.gray.gray_400,

    'sideBar.background': colors.background.background_800,
    'sideBarTitle.foreground': colors.gray.gray_400,
    'sideBar.foreground': colors.gray.gray_400,
    'sideBarSectionHeader.background': colors.background.background_900,
    'sideBarSectionHeader.foreground': colors.gray.gray_400,

    'list.activeSelectionBackground': colors.gray.gray_900,
    'list.activeSelectionForeground': colors.gray.gray_400,
    'list.hoverBackground': colors.gray.gray_900,
    'list.inactiveSelectionBackground': colors.gray.gray_900,
    'list.hoverForeground': colors.gray.gray_200,
    'listFilterWidget.noMatchesOutline': colors.danger.danger_500,
    'listFilterWidget.outline': colors.gray.gray_900,
    'listFilterWidget.shadow': colors.blackWhite.black,
    'list.focusAndSelectionOutline': colors.transparent,

    'tab.activeForeground': colors.gray.gray_200,
    'tab.inactiveForeground': colors.gray.gray_700,
    'tab.inactiveBackground': colors.background.background_800,
    'tab.activeBackground': colors.background.background_900,

    'activityBar.background': colors.background.background_900,
    'activityBar.foreground': colors.gray.gray_400,
    'activityBar.inactiveForeground': colors.gray.gray_700,
    'activityBarBadge.background': colors.blue.blue_500,
    'activityBarBadge.foreground': colors.gray.gray_400,

    'badge.background': colors.blue.blue_500,
    'badge.foreground': colors.gray.gray_400,

    'statusBar.background': colors.blue.blue_500,
    'statusBar.foreground': colors.gray.gray_400,
    'statusBar.noFolderBackground': colors.blue.blue_500,
    'statusBarItem.remoteBackground': colors.success.success_500,

    'titleBar.activeBackground': colors.background.background_900,
    'titleBar.activeForeground': colors.gray.gray_400,
    'titleBar.inactiveBackground': colors.background.background_900,

    'editorGroupHeader.tabsBackground': colors.background.background_800,

    'editorLineNumber.activeForeground': colors.gray.gray_400,
    'editorLineNumber.foreground': colors.gray.gray_700,

    'editorIndentGuide.background': colors.gray.gray_900,
    'editorLink.activeForeground': colors.blue.blue_500,

    'input.background': colors.blackWhite.black,
    'input.foreground': colors.gray.gray_400,
    'input.placeholderForeground': colors.gray.gray_700,
    'inputOption.activeBorder': colors.blue.blue_900,

    'dropdown.background': colors.blackWhite.black,
    'dropdown.foreground': colors.gray.gray_400,

    'button.background': colors.blue.blue_700,
    'button.foreground': colors.gray.gray_400,

    'editorWidget.background': colors.background.background_900,
    'editorWidget.border': colors.gray.gray_700,

    'scrollbarSlider.activeBackground': '#212529aa',
    'scrollbarSlider.background': '#212529aa',
    'scrollbarSlider.hoverBackground': '#212529',
    'scrollbar.shadow': colors.blackWhite.black,

    'editorGutter.background': colors.background.background_900,
    'editorGutter.modifiedBackground': colors.warning.warning_600,
    'editorGutter.addedBackground': colors.success.success_600,
    'editorGutter.deletedBackground': colors.danger.danger_600,

    'gitDecoration.modifiedResourceForeground': colors.warning.warning_500,
    'gitDecoration.deletedResourceForeground': colors.danger.danger_500,
    'gitDecoration.untrackedResourceForeground': colors.success.success_500,
    'gitDecoration.ignoredResourceForeground': colors.gray.gray_700,
    'gitDecoration.conflictingResourceForeground': colors.purple.purple_500,

    'editorBracketMatch.background': colors.background.blue_900,
    'editorBracketMatch.border': colors.blue.blue_700,

    'terminal.background': colors.background.background_800,
    'terminal.foreground': colors.gray.gray_400,
    'terminal.ansiBlack': '#0d161b',
    'terminal.ansiRed': '#ba0e2e',
    'terminal.ansiGreen': colors.blue.blue_500,
    'terminal.ansiYellow': '#5dcdfd',
    'terminal.ansiBlue': '#ffffff',
    'terminal.ansiMagenta': colors.blue.blue_500,
    'terminal.ansiCyan': '#5dcdfd',
    'terminal.ansiWhite': '#c7d9e1',
    'terminal.ansiBrightBlack': '#273e4e',
    'terminal.ansiBrightRed': '#f03e5f',
    'terminal.ansiBrightGreen': '#83cffd',
    'terminal.ansiBrightYellow': '#c2ecfe',
    'terminal.ansiBrightBlue': '#ffffff',
    'terminal.ansiBrightMagenta': '#83cffd',
    'terminal.ansiBrightCyan': '#c2ecfe',
    'terminal.ansiBrightWhite': '#f8fbfc',

    'peekView.border': colors.blue.blue_500,
    'peekViewEditor.background': colors.background.background_900,
    'peekViewEditorGutter.background': colors.background.background_900,
    'peekViewResult.background': colors.background.background_800,
    'peekViewTitle.background': colors.background.background_900,
    'peekViewTitleLabel.foreground': colors.gray.gray_400,
    'peekViewTitleDescription.foreground': colors.gray.gray_400,
    'peekViewResult.selectionBackground': '#080d11',
    'peekViewResult.selectionForeground': colors.gray.gray_400,
    'peekViewResult.fileForeground': '#a9c5d1',
    'peekViewResult.lineForeground': '#95b8c6',
    'peekViewEditor.matchHighlightBackground': '#5dcdfd55',
    'peekViewResult.matchHighlightBackground': '#5dcdfd55',

    'editor.findRangeHighlightBackground': '#515c7e33',
    'editor.rangeHighlightBackground': '#515c7e20',
    'editor.wordHighlightBackground': '#515c7e44',
    'editor.wordHighlightStrongBackground': '#515c7e55',
    'editor.selectionHighlightBackground': '#515c7e44',

    'editorOverviewRuler.findMatchForeground': '#5dcdfd55',
    'editorOverviewRuler.modifiedForeground': colors.warning.warning_500,
    'editorOverviewRuler.addedForeground': colors.success.success_500,
    'editorOverviewRuler.deletedForeground': colors.danger.danger_800,
    'editorOverviewRuler.errorForeground': colors.danger.danger_500,
    'editorOverviewRuler.warningForeground': colors.warning.warning_800,
    'editorOverviewRuler.infoForeground': colors.purple.purple_500
  },
  tokenColors: [
    {
      name: 'Comment',
      scope: [
        'comment'
      ],
      settings: {
        foreground: '#acb6bf8c'
      }
    },
    {
      name: 'String',
      scope: [
        'string',
        'constant.other.symbol'
      ],
      settings: {
        foreground: colors.lightSuccess.light_success_400
      }
    },
    {
      name: 'Regular Expressions and Escape Characters',
      scope: [
        'string.regexp',
        'constant.character',
        'constant.other'
      ],
      settings: {
        foreground: colors.success.success_100
      }
    },
    {
      name: 'Variable, number, Built-in constants, separators like ; or ,',
      scope: [
        'variable',
        'variable.parameter.function-call',
        'constant.language',
        'constant.numeric',
        'punctuation.separator',
        'punctuation.terminator',
        'punctuation.section',
        'punctuation.accessor'
      ],
      settings: {
        foreground: colors.gray.gray_300
      }
    },
    {
      name: 'Member Variable',
      scope: [
        'variable.member'
      ],
      settings: {
        foreground: colors.danger.danger_400
      }
    },
    {
      name: 'Storage, keyewrod',
      scope: [
        'storage',
        'keyword',
        'keyword.operator',
        'variable.language'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: colors.blue.blue_500
      }
    },
    {
      name: 'JavaScript/TypeScript interpolation punctuation',
      scope: [
        'punctuation.definition.template-expression'
      ],
      settings: {
        foreground: colors.blue.blue_500
      }
    },
    {
      name: 'Interpolation text',
      scope: [
        'meta.embedded'
      ],
      settings: {
        foreground: colors.gray.gray_300
      }
    },
    {
      name: 'Types fixes',
      scope: [
        'source.java storage.type',
        'source.haskell storage.type',
        'source.c storage.type'
      ],
      settings: {
        foreground: colors.lightBlue.light_blue_400
      }
    },
    {
      name: 'Inherited class type',
      scope: [
        'entity.other.inherited-class'
      ],
      settings: {
        foreground: colors.blue.blue_500
      }
    },
    {
      name: 'Lambda arrow',
      scope: [
        'storage.type.function'
      ],
      settings: {
        foreground: colors.blue.blue_500
      }
    },
    {
      name: 'Java primitive variable types',
      scope: [
        'source.java storage.type.primitive'
      ],
      settings: {
        foreground: colors.blue.blue_500
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
        foreground: colors.gray.gray_300
      }
    },
    {
      name: 'Library function',
      scope: [
        'support.function',
        'support.macro'
      ],
      settings: {
        foreground: colors.danger.danger_400
      }
    },
    {
      name: 'Imports and packages',
      scope: [
        'entity.name.import',
        'entity.name.package'
      ],
      settings: {
        foreground: colors.success.success_500
      }
    },
    {
      name: 'Entity name',
      scope: [
        'entity.name'
      ],
      settings: {
        foreground: colors.lightBlue.light_blue_400
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
        foreground: colors.blue.blue_500
      }
    },
    {
      name: 'JSX Component',
      scope: [
        'support.class.component'
      ],
      settings: {
        foreground: colors.lightBlue.light_blue_400
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
        foreground: '#3b82f680'
      }
    },
    {
      name: 'Tag attribute',
      scope: [
        'entity.other.attribute-name'
      ],
      settings: {
        foreground: colors.orange.orange_400
      }
    },
    {
      name: 'Library constant',
      scope: [
        'support.constant'
      ],
      settings: {
        foreground: colors.orange.orange_400
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
        foreground: colors.blue.blue_500
      }
    },
    {
      name: 'Invalid',
      scope: [
        'invalid'
      ],
      settings: {
        foreground: '#d95757'
      }
    },
    {
      name: 'diff.header',
      scope: [
        'meta.diff',
        'meta.diff.header'
      ],
      settings: {
        foreground: '#c594c5'
      }
    },
    {
      name: 'CSS tag names',
      scope: [
        'source.css entity.name.tag',
        'source.sass entity.name.tag',
        'source.scss entity.name.tag',
        'source.less entity.name.tag',
        'source.stylus entity.name.tag'
      ],
      settings: {
        foreground: colors.blue.blue_400
      }
    },
    {
      name: 'CSS browser prefix',
      scope: [
        'source.css support.type',
        'source.sass support.type',
        'source.scss support.type',
        'source.less support.type',
        'source.stylus support.type'
      ],
      settings: {
        foreground: '#acb6bf8c'
      }
    },
    {
      name: 'CSS Class and Support - Property Value',
      scope: [
        'source.css support.constant.property-value',
        'source.sass support.constant.property-value',
        'source.scss support.constant.property-value',
        'source.less support.constant.property-value',
        'source.stylus support.constant.property-value',
        'source.postcss support.constant.property-value'
      ],
      settings: {
        foreground: colors.gray.gray_300
      }
    },
    {
      name: 'CSS Class and Support - Property Name',
      scope: [
        'source.css support.type.property-name',
        'source.sass support.type.property-name',
        'source.scss support.type.property-name',
        'source.less support.type.property-name',
        'source.stylus support.type.property-name',
        'source.postcss support.type.property-name'
      ],
      settings: {
        foreground: colors.blue.blue_400
      }
    },
    {
      name: 'CSS entities',
      scope: [
        'entity.name.tag.css'
      ],
      settings: {
        foreground: colors.lightBlue.light_blue_400
      }
    },
    {
      name: 'CSS Font',
      scope: [
        'support.constant.font-name',
        'meta.definition.variable'
      ],
      settings: {
        foreground: colors.lightSuccess.light_success_400
      }
    },

    {
      name: 'CSS puntuation',
      scope: [
        'punctuation.separator.key-value.scss'
      ],
      settings: {
        foreground: colors.blue.blue_400
      }
    },
    {
      name: 'CSS classes',
      scope: [
        'entity.other.attribute-name.class.css',
        'entity.other.attribute-name.parent-selector-suffix.css'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: colors.success.success_400
      }
    },
    {
      name: 'CSS Name variable',
      scope: [
        'variable.scss'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: colors.orange.orange_400
      }
    },
    {
      name: 'CSS pseudo elements',
      scope: [
        'entity.other.attribute-name.pseudo-element.css'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: colors.lightBlue.light_blue_400
      }
    },
    {
      scope: [
        'entity.other.attribute-name.pseudo-class.css'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: colors.purple.purple_400
      }
    },
    {
      name: 'CSS keywords',
      scope: [
        'keyword.other.unit.rem.css',
        'keyword.other.unit.s.css'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: colors.blue.blue_400
      }
    },
    {
      name: 'Search Results Numbers',
      scope: [
        'constant.numeric.line-number.find-in-files - match'
      ],
      settings: {
        foreground: '#acb6bf8c'
      }
    },
    {
      name: 'Search Results Match Numbers',
      scope: [
        'constant.numeric.line-number.match'
      ],
      settings: {
        foreground: colors.blue.blue_500
      }
    },
    {
      name: 'Search Results Lines',
      scope: [
        'entity.name.filename.find-in-files'
      ],
      settings: {
        foreground: colors.success.success_500
      }
    },
    {
      scope: [
        'message.error'
      ],
      settings: {
        foreground: '#d95757'
      }
    },
    {
      name: 'JSON constants',
      scope: [
        'constant.language.json'
      ],
      settings: {
        foreground: colors.lightBlue.light_blue_400
      }
    },
    {
      name: 'Markup heading',
      scope: [
        'markup.heading',
        'markup.heading entity.name'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: colors.success.success_500
      }
    },
    {
      name: 'Markup links',
      scope: [
        'markup.underline.link',
        'string.other.link'
      ],
      settings: {
        foreground: colors.blue.blue_500
      }
    },
    {
      name: 'Markup Italic',
      scope: [
        'markup.italic'
      ],
      settings: {
        fontStyle: 'italic',
        foreground: colors.danger.danger_400
      }
    },
    {
      name: 'Markup Bold',
      scope: [
        'markup.bold'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: colors.danger.danger_400
      }
    },
    {
      name: 'Markup Bold/italic',
      scope: [
        'markup.italic markup.bold',
        'markup.bold markup.italic'
      ],
      settings: {
        fontStyle: 'bold italic'
      }
    },
    {
      name: 'Markup Code',
      scope: [
        'markup.raw'
      ],
      settings: {
        background: '#bfbdb605'
      }
    },
    {
      name: 'Markup Code Inline',
      scope: [
        'markup.raw.inline'
      ],
      settings: {
        background: '#bfbdb60f'
      }
    },
    {
      name: 'Markdown Separator',
      scope: [
        'meta.separator'
      ],
      settings: {
        fontStyle: 'bold',
        background: '#bfbdb60f',
        foreground: '#acb6bf8c'
      }
    },
    {
      name: 'Markup Blockquote',
      scope: [
        'markup.quote'
      ],
      settings: {
        foreground: '#6ee7b7',
        fontStyle: 'italic'
      }
    },
    {
      name: 'Markup List Bullet',
      scope: [
        'markup.list punctuation.definition.list.begin'
      ],
      settings: {
        foreground: '#ffb454'
      }
    },
    {
      name: 'Markup added',
      scope: [
        'markup.inserted'
      ],
      settings: {
        foreground: '#7fd962'
      }
    },
    {
      name: 'Markup modified',
      scope: [
        'markup.changed'
      ],
      settings: {
        foreground: '#73b8ff'
      }
    },
    {
      name: 'Markup removed',
      scope: [
        'markup.deleted'
      ],
      settings: {
        foreground: '#f26d78'
      }
    },
    {
      name: 'Markup Strike',
      scope: [
        'markup.strike'
      ],
      settings: {
        foreground: '#e6b673'
      }
    },
    {
      name: 'Markup Table',
      scope: [
        'markup.table'
      ],
      settings: {
        background: '#bfbdb60f',
        foreground: colors.blue.blue_500
      }
    },
    {
      name: 'Markup Raw Inline',
      scope: [
        'text.html.markdown markup.inline.raw'
      ],
      settings: {
        foreground: '#f29668'
      }
    },
    {
      name: 'Markdown - Line Break',
      scope: [
        'text.html.markdown meta.dummy.line-break'
      ],
      settings: {
        background: '#acb6bf8c',
        foreground: '#acb6bf8c'
      }
    },
    {
      name: 'Markdown - Raw Block Fenced',
      scope: [
        'punctuation.definition.markdown'
      ],
      settings: {
        background: colors.gray.gray_300,
        foreground: '#acb6bf8c'
      }
    }
  ],
  semanticHighlighting: true,
  semanticTokenColors: {
    'parameter.label': colors.gray.gray_300
  }
};