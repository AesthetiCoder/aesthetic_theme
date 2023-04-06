const colors = require('./colors');

module.exports = {
  name: 'Luis\'s Theme',
  type: 'dark',
  colors: {
    foreground: colors.gray.gray_500,
    focusBorder: colors.blue.blue_500,
    'widget.shadow': colors.base.black,

    'button.background': colors.blue.blue_700,
    'button.foreground': colors.gray.gray_300,
    'button.hoverBackground': colors.blue.blue_500,

    'dropdown.background': colors.base.black,
    'dropdown.foreground': colors.gray.gray_300,
    'dropdown.border': colors.blue.blue_500,

    'input.background': colors.base.black,
    'input.foreground': colors.gray.gray_300,
    'input.placeholderForeground': colors.gray.gray_700,
    'inputOption.activeBorder': colors.blue.blue_500,
    'inputValidation.errorBorder': colors.danger.danger_500,
    'inputValidation.errorBackground': colors.danger.danger_900,
    'inputValidation.infoBorder': colors.blue.blue_500,
    'inputValidation.infoBackground': colors.blue.blue_900,
    'inputValidation.warningBorder': colors.warning.warning_500,
    'inputValidation.warningBackground': colors.warning.warning_900,

    'scrollbar.shadow': colors.base.black,
    'scrollbarSlider.background': colors.background.background_900,
    'scrollbarSlider.activeBackground': colors.background.background_600,
    'scrollbarSlider.hoverBackground': colors.background.background_700,

    'badge.background': colors.blue.blue_500,
    'badge.foreground': colors.gray.gray_300,

    'progressBar.background': colors.blue.blue_500,

    'list.activeSelectionBackground': colors.background.background_700,
    'list.activeSelectionForeground': colors.gray.gray_300,
    'list.hoverBackground': colors.background.background_700,
    'list.hoverForeground': colors.gray.gray_300,
    'list.inactiveSelectionBackground': colors.background.background_700,
    'list.inactiveSelectionForeground': colors.gray.gray_300,
    'list.dropBackground': colors.base.black,

    'activityBar.background': colors.background.background_900,
    'activityBar.dropBackground': colors.background.background_900,
    'activityBar.foreground': colors.gray.gray_400,
    // 'activityBar.border': colors.background.background_500,
    'activityBar.inactiveForeground': colors.gray.gray_700,
    'activityBarBadge.background': colors.blue.blue_500,
    'activityBarBadge.foreground': colors.gray.gray_400,

    'sideBar.background': colors.background.background_900,
    'sideBar.foreground': colors.gray.gray_500,
    'sideBarTitle.foreground': colors.gray.gray_500,
    'sideBar.border': colors.background.background_500,
    'sideBarSectionHeader.background': colors.background.background_800,

    'editorGroupHeader.noTabsBackground': colors.background.background_900,
    'editorGroup.dropBackground': `${colors.background.background_900}aa`,
    'editorGroupHeader.tabsBackground': colors.background.background_900,
    'tab.activeForeground': colors.gray.gray_300,
    'tab.inactiveForeground': colors.gray.gray_700,
    'tab.border': colors.background.background_500,
    'tab.inactiveBackground': colors.background.background_900,
    'tab.activeBackground': colors.background.background_900,

    'editor.background': colors.background.background_900,
    'editor.foreground': colors.gray.gray_500,
    'editorCursor.foreground': colors.gray.gray_500,
    'editorLineNumber.foreground': colors.gray.gray_800,
    'editorLineNumber.activeForeground': colors.gray.gray_500,
    'editorLink.activeForeground': colors.blue.blue_400,
    'editorWhitespace.foreground': colors.gray.gray_900,
    'editorIndentGuide.background': colors.gray.gray_900,
    'editorCodeLens.foreground': colors.gray_500,
    'editorBracketMatch.background': colors.background.background_600,

    'editorOverviewRuler.findMatchForeground': '#5dcdfd55',
    'editorOverviewRuler.modifiedForeground': colors.warning.warning_500,
    'editorOverviewRuler.addedForeground': colors.success.success_500,
    'editorOverviewRuler.deletedForeground': colors.danger.danger_800,
    'editorOverviewRuler.errorForeground': colors.danger.danger_500,
    'editorOverviewRuler.warningForeground': colors.warning.warning_800,
    'editorOverviewRuler.infoForeground': colors.purple.purple_500,

    'editorGutter.background': colors.background.background_900,
    'editorGutter.modifiedBackground': colors.warning.warning_500,
    'editorGutter.addedBackground': colors.success.success_500,
    'editorGutter.deletedBackground': colors.danger.danger_500,

    'editorWidget.background': colors.background.background_900,
    'editorWidget.border': colors.gray.gray_700,
    'editorSuggestWidget.foreground': colors.gray.gray_300,

    'peekView.border': colors.background.background_500,
    'peekViewEditor.background': colors.background.background_900,
    'peekViewEditorGutter.background': colors.background.background_900,
    'peekViewResult.background': colors.background.background_900,
    'peekViewTitle.background': colors.background.background_900,
    'peekViewTitleLabel.foreground': colors.gray.gray_500,
    'peekViewTitleDescription.foreground': colors.gray.gray_500,
    'peekViewResult.selectionForeground': colors.gray.gray_500,
    'peekViewResult.fileForeground': colors.gray.gray_500,
    'peekViewResult.lineForeground': colors.gray.gray_500,

    'statusBar.background': colors.blue.blue_500,
    'statusBar.foreground': colors.gray.gray_300,
    'statusBar.noFolderBackground': colors.blue.blue_500,
    'statusBarItem.remoteBackground': colors.success.success_500,

    'titleBar.activeBackground': colors.background.background_900,
    'titleBar.activeForeground': colors.gray.gray_500,
    'titleBar.inactiveBackground': colors.background.background_900,

    'gitDecoration.modifiedResourceForeground': colors.warning.warning_500,
    'gitDecoration.deletedResourceForeground': colors.danger.danger_500,
    'gitDecoration.untrackedResourceForeground': colors.success.success_500,
    'gitDecoration.ignoredResourceForeground': colors.gray.gray_700,
    'gitDecoration.conflictingResourceForeground': colors.purple.purple_500,

    'terminal.background': colors.background.background_900,
    'terminal.foreground': colors.gray.gray_500,

    'listFilterWidget.noMatchesOutline': colors.danger.danger_500,
    'listFilterWidget.outline': colors.gray.gray_900,
    'listFilterWidget.shadow': colors.base.black,
    'list.focusAndSelectionOutline': colors.transparent
  },
  tokenColors: [
    {
      name: 'Comment',
      scope: [
        'comment'
      ],
      settings: {
        foreground: colors.gray.gray_700
      }
    },
    {
      name: 'String',
      scope: [
        'string',
        'constant.other.symbol'
      ],
      settings: {
        foreground: colors.emerald.emerald_500
      }
    },
    {
      name: 'Regular Expressions and Escape Characters',
      scope: [
        'string.regexp',
        'constant.character.escape'
      ],
      settings: {
        foreground: colors.success.success_100
      }
    },
    {
      scope: [
        'constant.language',
        'constant.numeric'
      ],
      settings: {
        foreground: colors.cyan.cyan_500
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
        foreground: colors.gray.gray_400
      }
    },
    {
      name: 'Member Variable',
      scope: [
        'variable.member'
      ],
      settings: {
        foreground: colors.danger.danger_500
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
        foreground: colors.gray.gray_400
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
        foreground: colors.cyan.cyan_500
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
        foreground: colors.gray.gray_400
      }
    },
    {
      name: 'Library function',
      scope: [
        'support.function',
        'support.macro'
      ],
      settings: {
        foreground: colors.danger.danger_500
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
        foreground: colors.cyan.cyan_500
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
        foreground: colors.cyan.cyan_500
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
        foreground: colors.blue.blue_600
      }
    },
    {
      name: 'Tag attribute',
      scope: [
        'entity.other.attribute-name'
      ],
      settings: {
        foreground: colors.amber.amber_600
      }
    },
    {
      name: 'Library constant',
      scope: [
        'support.constant'
      ],
      settings: {
        // foreground: colors.amber.amber_600
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
      name: 'CSS and sass pseudo elements',
      scope: [
        'entity.other.attribute-name.pseudo-element.css',
        'entity.other.attribute-name.pseudo-class.css',
        'entity.name.tag.reference.scss'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: colors.cyan.cyan_500
      }
    },
    {
      name: 'CSS tag names',
      scope: [
        'source.css entity.name.tag',
        'source.sass entity.name.tag',
        'source.scss entity.name.tag',
        'source.less entity.name.tag',
        'source.stylus entity.name.tag',
        'punctuation.separator.key-value.scss'
      ],
      settings: {
        foreground: colors.blue.blue_500
      }
    },
    {
      name: 'Css regex character',
      scope: [
        'constant.character.escape.scss'
      ],
      settings: {
        foreground: colors.cyan.cyan_500
      }
    },
    {
      scope: [
        'constant.numeric.css'
      ],
      settings: {
        foreground: colors.gray.gray_400
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
        foreground: colors.gray.gray_400
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
        foreground: colors.blue.blue_500
      }
    },
    {
      name: 'CSS entities',
      scope: [
        'entity.name.tag.css'
      ],
      settings: {
        foreground: colors.cyan.cyan_500
      }
    },
    {
      name: 'CSS Font',
      scope: [
        'support.constant.font-name',
        'meta.attribute-selector.scss',
        'meta.definition.variable'
      ],
      settings: {
        foreground: colors.emerald.emerald_500
      }
    },
    {
      name: 'CSS puntuation',
      scope: [
        'support.type.property-name.media.css',
        'meta.property-name.media-query.scss',
        'punctuation.definition.attribute-selector.end.bracket.square.scss',
        'punctuation.definition.attribute-selector.begin.bracket.square.scss'
      ],
      settings: {
        foreground: colors.gray.gray_400
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
        foreground: colors.emerald.emerald_500
      }
    },
    {
      name: 'CSS Name variable',
      scope: [
        'variable.scss'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: colors.amber.amber_600
      }
    },
    {
      name: 'CSS keywords',
      scope: [
        'keyword.other.unit.rem.css',
        'keyword.other.unit.percentage.css',
        'keyword.other.unit.s.css',
        'keyword.other.unit.vh.css'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: colors.cyan.cyan_500
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
      name: 'JSON constants',
      scope: [
        'constant.language.json'
      ],
      settings: {
        foreground: colors.cyan.cyan_500
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
        background: colors.gray.gray_400,
        foreground: '#acb6bf8c'
      }
    }
  ],
  semanticHighlighting: true,
  semanticTokenColors: {
    'parameter.label': colors.gray.gray_400
  }
};