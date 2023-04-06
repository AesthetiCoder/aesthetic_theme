import {
  cyan, gray, base, information, danger, warning, background, success, purple, emerald, amber
} from './../theme/colors';

const theme = {
  name: 'Luis\'s Theme',
  type: 'dark',
  colors: {
    foreground: gray.gray_500,
    focusBorder: information.information_500,
    'widget.shadow': base.black,

    'button.background': information.information_700,
    'button.foreground': gray.gray_300,
    'button.hoverBackground': information.information_500,

    'dropdown.background': base.black,
    'dropdown.foreground': gray.gray_300,
    'dropdown.border': information.information_500,

    'input.background': base.black,
    'input.foreground': gray.gray_300,
    'input.placeholderForeground': gray.gray_700,
    'inputOption.activeBorder': information.information_500,
    'inputValidation.errorBorder': danger.danger_500,
    'inputValidation.errorBackground': danger.danger_900,
    'inputValidation.infoBorder': information.information_500,
    'inputValidation.infoBackground': information.information_900,
    'inputValidation.warningBorder': warning.warning_500,
    'inputValidation.warningBackground': warning.warning_900,

    'scrollbar.shadow': base.black,
    'scrollbarSlider.background': background.background_900,
    'scrollbarSlider.activeBackground': background.background_600,
    'scrollbarSlider.hoverBackground': background.background_700,

    'badge.background': information.information_500,
    'badge.foreground': gray.gray_300,

    'progressBar.background': information.information_500,

    'list.activeSelectionBackground': background.background_700,
    'list.activeSelectionForeground': gray.gray_300,
    'list.hoverBackground': background.background_700,
    'list.hoverForeground': gray.gray_300,
    'list.inactiveSelectionBackground': background.background_700,
    'list.inactiveSelectionForeground': gray.gray_300,
    'list.dropBackground': base.black,

    'activityBar.background': background.background_900,
    'activityBar.dropBackground': background.background_900,
    'activityBar.foreground': gray.gray_400,
    // 'activityBar.border': background.background_500,
    'activityBar.inactiveForeground': gray.gray_700,
    'activityBarBadge.background': information.information_500,
    'activityBarBadge.foreground': gray.gray_400,

    'sideBar.background': background.background_900,
    'sideBar.foreground': gray.gray_500,
    'sideBarTitle.foreground': gray.gray_500,
    'sideBar.border': background.background_500,
    'sideBarSectionHeader.background': background.background_800,

    'editorGroupHeader.noTabsBackground': background.background_900,
    'editorGroup.dropBackground': `${background.background_900}aa`,
    'editorGroupHeader.tabsBackground': background.background_900,
    'tab.activeForeground': gray.gray_300,
    'tab.inactiveForeground': gray.gray_700,
    'tab.border': background.background_500,
    'tab.inactiveBackground': background.background_900,
    'tab.activeBackground': background.background_900,

    'editor.background': background.background_900,
    'editor.foreground': gray.gray_500,
    'editorCursor.foreground': gray.gray_500,
    'editorLineNumber.foreground': gray.gray_800,
    'editorLineNumber.activeForeground': gray.gray_500,
    'editorLink.activeForeground': information.information_400,
    'editorWhitespace.foreground': gray.gray_900,
    'editorIndentGuide.background': gray.gray_900,
    'editorCodeLens.foreground': gray.gray_500,
    'editorBracketMatch.background': background.background_600,

    'editorOverviewRuler.findMatchForeground': '#5dcdfd55',
    'editorOverviewRuler.modifiedForeground': warning.warning_500,
    'editorOverviewRuler.addedForeground': success.success_500,
    'editorOverviewRuler.deletedForeground': danger.danger_800,
    'editorOverviewRuler.errorForeground': danger.danger_500,
    'editorOverviewRuler.warningForeground': warning.warning_800,
    'editorOverviewRuler.infoForeground': purple.purple_500,

    'editorGutter.background': background.background_900,
    'editorGutter.modifiedBackground': warning.warning_500,
    'editorGutter.addedBackground': success.success_500,
    'editorGutter.deletedBackground': danger.danger_500,

    'editorWidget.background': background.background_900,
    'editorWidget.border': gray.gray_700,
    'editorSuggestWidget.foreground': gray.gray_300,

    'peekView.border': background.background_500,
    'peekViewEditor.background': background.background_900,
    'peekViewEditorGutter.background': background.background_900,
    'peekViewResult.background': background.background_900,
    'peekViewTitle.background': background.background_900,
    'peekViewTitleLabel.foreground': gray.gray_500,
    'peekViewTitleDescription.foreground': gray.gray_500,
    'peekViewResult.selectionForeground': gray.gray_500,
    'peekViewResult.fileForeground': gray.gray_500,
    'peekViewResult.lineForeground': gray.gray_500,

    'statusBar.background': information.information_500,
    'statusBar.foreground': gray.gray_300,
    'statusBar.noFolderBackground': information.information_500,
    'statusBarItem.remoteBackground': success.success_500,

    'titleBar.activeBackground': background.background_900,
    'titleBar.activeForeground': gray.gray_500,
    'titleBar.inactiveBackground': background.background_900,

    'gitDecoration.modifiedResourceForeground': warning.warning_500,
    'gitDecoration.deletedResourceForeground': danger.danger_500,
    'gitDecoration.untrackedResourceForeground': success.success_500,
    'gitDecoration.ignoredResourceForeground': gray.gray_700,
    'gitDecoration.conflictingResourceForeground': purple.purple_500,

    'terminal.background': background.background_900,
    'terminal.foreground': gray.gray_500,

    'listFilterWidget.noMatchesOutline': danger.danger_500,
    'listFilterWidget.outline': gray.gray_900,
    'listFilterWidget.shadow': base.black,
    'list.focusAndSelectionOutline': base.transparent
  },
  tokenColors: [
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
      name: 'CSS and sass pseudo elements',
      scope: [
        'entity.other.attribute-name.pseudo-element.css',
        'entity.other.attribute-name.pseudo-class.css',
        'entity.name.tag.reference.scss'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: cyan.cyan_600
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
        foreground: information.information_600
      }
    },
    {
      name: 'Css regex character',
      scope: [
        'constant.character.escape.scss'
      ],
      settings: {
        foreground: cyan.cyan_600
      }
    },
    {
      scope: [
        'constant.numeric.css'
      ],
      settings: {
        foreground: gray.gray_400
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
        foreground: gray.gray_400
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
        foreground: information.information_500
      }
    },
    {
      name: 'CSS entities',
      scope: [
        'entity.name.tag.css'
      ],
      settings: {
        foreground: cyan.cyan_500
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
        foreground: emerald.emerald_500
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
        foreground: gray.gray_400
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
        foreground: emerald.emerald_500
      }
    },
    {
      name: 'CSS Name variable',
      scope: [
        'variable.scss'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: amber.amber_600
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
        foreground: cyan.cyan_500
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
    }
  ]
};

export { theme };