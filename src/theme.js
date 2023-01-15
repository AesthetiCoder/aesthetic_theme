const colors = require('./colors');

module.exports = {
  name: 'Luis\'s Theme',
  type: 'dark',
  semanticHighlighting: true,
  semanticTokenColors: {
    'parameter.declaration': { foreground: '#e0af68' },
    parameter: { foreground: '#d9d4cd' },
    'property.declaration': { foreground: colors.gray.gray_50 },
    'property.defaultLibrary': { foreground: colors.blue.blue_300 },
    '*.defaultLibrary': { foreground: colors.blue.blue_300 },
    'variable.defaultLibrary': { foreground: colors.blue.blue_300 },
    'variable.declaration': { foreground: colors.gray.gray_50 },
    variable: { foreground: colors.gray.gray_50 }
  },
  colors: {
    foreground: colors.gray.gray_400,
    'editor.background': colors.background.background_900,
    'editor.foreground': colors.gray.gray_400,
    'editorCursor.foreground': colors.gray.gray_50,
    'editorWhitespace.foreground': '#1e313d',

    'sideBar.background': colors.background.background_800,
    'sideBarTitle.foreground': colors.gray.gray_400,
    'sideBar.foreground': colors.gray.gray_400,
    'sideBarSectionHeader.background': colors.background.background_900,
    'sideBarSectionHeader.foreground': colors.gray.gray_400,

    'tab.activeForeground': colors.gray.gray_400,
    'tab.inactiveForeground': colors.gray.gray_700,
    'tab.inactiveBackground': colors.background.background_700,
    'tab.activeBackground': colors.background.background_900,

    'activityBar.background': colors.background.background_900,
    'activityBar.foreground': colors.gray.gray_400,
    'activityBar.inactiveForeground': colors.gray.gray_700,
    'activityBarBadge.background': colors.blue.blue_500,
    'activityBarBadge.foreground': colors.gray.gray_50,

    'badge.background': colors.blue.blue_500,
    'badge.foreground': colors.gray.gray_50,

    'statusBar.background': colors.blue.blue_500,
    'statusBar.foreground': colors.gray.gray_50,

    'editorGroupHeader.tabsBackground': colors.background.background_800,
    'titleBar.activeBackground': colors.blackWhite.black,

    'list.activeSelectionBackground': colors.blue.blue_950,
    'list.activeSelectionForeground': colors.gray.gray_50,
    'list.hoverBackground': '#0a1014',
    'list.inactiveSelectionBackground': '#0a1014',

    'editorLineNumber.activeForeground': colors.gray.gray_50,
    'editorLineNumber.foreground': colors.gray.gray_700,

    'editorIndentGuide.background': colors.gray.gray_900,
    'editorLink.activeForeground': colors.blue.blue_500,
    'statusBar.noFolderBackground': colors.blue.blue_500,

    'input.background': colors.blackWhite.black,
    'input.foreground': colors.gray.gray_50,
    'input.placeholderForeground': colors.gray.gray_700,
    'inputOption.activeBorder': colors.blue.blue_900,

    'dropdown.background': colors.blackWhite.black,
    'dropdown.foreground': colors.gray.gray_50,

    'button.background': colors.blue.blue_500,
    'button.foreground': colors.gray.gray_50,

    'editorWidget.background': colors.background.background_900,
    'editorWidget.border': colors.gray.gray_700,

    'scrollbarSlider.activeBackground': '#1ea8fcaa',
    'scrollbarSlider.background': '#273e4eaa',
    'scrollbarSlider.hoverBackground': '#1ea8fc55',
    'scrollbar.shadow': colors.blackWhite.black,

    'editorGutter.background': colors.background.background_900,
    'editorGutter.modifiedBackground': colors.warning.warning_700,
    'editorGutter.addedBackground': colors.success.success_700,
    'editorGutter.deletedBackground': colors.danger.danger_700,

    'gitDecoration.modifiedResourceForeground': colors.warning.warning_500,
    'gitDecoration.deletedResourceForeground': colors.danger.danger_500,
    'gitDecoration.untrackedResourceForeground': colors.success.success_500,
    'gitDecoration.ignoredResourceForeground': colors.gray.gray_700,
    'gitDecoration.conflictingResourceForeground': '#9d37fc',

    'editorBracketMatch.background': colors.background.blue_900,
    'editorBracketMatch.border': colors.blue.blue_700,

    'terminal.background': '#0a0e12',
    'terminal.foreground': colors.gray.gray_400,
    'terminal.ansiBlack': '#0d161b',
    'terminal.ansiRed': '#ba0e2e',
    'terminal.ansiGreen': '#1ea8fc',
    'terminal.ansiYellow': '#5dcdfd',
    'terminal.ansiBlue': '#E2E2E2fff',
    'terminal.ansiMagenta': '#1ea8fc',
    'terminal.ansiCyan': '#5dcdfd',
    'terminal.ansiWhite': '#c7d9e1',
    'terminal.ansiBrightBlack': '#273e4e',
    'terminal.ansiBrightRed': '#f03e5f',
    'terminal.ansiBrightGreen': '#83cffd',
    'terminal.ansiBrightYellow': '#c2ecfe',
    'terminal.ansiBrightBlue': '#E2E2E2fff',
    'terminal.ansiBrightMagenta': '#83cffd',
    'terminal.ansiBrightCyan': '#c2ecfe',
    'terminal.ansiBrightWhite': '#f8fbfc',

    'peekView.border': '#1ea8fc',
    'peekViewEditor.background': '#000000',
    'peekViewEditorGutter.background': '#020303',
    'peekViewResult.background': '#0d161b',
    'peekViewTitle.background': '#020303',
    'peekViewTitleLabel.foreground': '#b6ced8',
    'peekViewTitleDescription.foreground': '#acc7d3',
    'peekViewResult.selectionBackground': '#080d11',
    'peekViewResult.selectionForeground': '#b6ced8',
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
    'editorOverviewRuler.infoForeground': '#9d37fc'

  },
  tokenColors: [
    {
      scope: [
        'comment',
        'comment.block.documentation',
        'punctuation.definition.comment',
        'comment.block.documentation punctuation'
      ],
      settings: { foreground: '#444b6a' }
    },
    {
      scope: [
        'string',
        'string punctuation.section.embedded source'
      ],
      settings: { foreground: '#9ece6a' }
    },
    {
      name: 'Number, Boolean, Undefined, Null',
      scope: [
        'punctuation.definition.constant',
        'constant.language',
        'constant.numeric',
        'support.constant'
      ],
      settings: { foreground: '#ff9e64' }
    },
    {
      scope: [
        'constant',
        'entity.name.constant',
        'variable.other.constant',
        'variable.other.enummember',
        'variable.language',
        'entity'
      ],
      settings: { foreground: colors.gray.gray_50 }
    },
    {
      scope: [
        'constant.character',
        'constant.other.placeholder'
      ],
      settings: { foreground: '#5dcdfd' }
    },
    {
      scope: 'keyword',
      settings: { foreground: colors.blue.blue_500 }
    },
    {
      scope: ['storage', 'storage.type'],
      settings: { foreground: colors.blue.blue_500 }
    },
    {
      scope: [
        'meta.export.default',
        'meta.definition.variable'
      ],
      settings: { foreground: colors.lightBlue.light_blue_500 }
    },
    {
      scope: 'entity.name.function',
      settings: { foreground: colors.gray.gray_50 }
    },
    {
      scope: 'entity.name',
      settings: { foreground: colors.gray.gray_50 }
    },
    {
      scope: 'variable.parameter',
      settings: { foreground: '#e0af68' }
    },
    {
      scope: 'entity.name.tag',
      settings: { foreground: colors.lightBlue.light_blue_600 }
    },
    {
      scope: 'entity.other.attribute-name',
      settings: { foreground: '#bb9af7' }
    },
    {
      scope: ['support.type', 'support.class', 'support.function', 'support.constant'],
      settings: { foreground: colors.blue.blue_300 }
    },
    {
      scope: ['invalid', 'invalid.ilegal', 'invalid.deprecated'],
      settings: { foreground: '#cf433e' }
    },
    {
      name: 'diff.deleted',
      scope: 'markup.deleted',
      settings: {
        foreground: '#e61f44'
      }
    },
    {
      name: 'diff.inserted',
      scope: 'markup.inserted',
      settings: {
        foreground: '#A6E22E'
      }
    },
    {
      name: 'diff.changed',
      scope: 'markup.changed',
      settings: {
        foreground: '#f7b83d'
      }
    },
    {
      name: 'Function argument',
      scope: [
        'keyword.other.use',
        'keyword.other.function.use',
        'keyword.other.namespace',
        'keyword.other.new',
        'keyword.other.special-method',
        'keyword.other.use-as'
      ],
      settings: {
        foreground: '#1ea8fc'
      }
    },
    {
      name: 'Function argument',
      scope: [
        'meta.use support.class.builtin',
        'meta.other.inherited-class support.class.builtin'
      ],
      settings: {
        foreground: '#1ea8fc'
      }
    },
    {
      scope: 'support.constant.property-value',
      settings: {
        foreground: '#ff9e64'
      }
    },
    {
      scope: 'keyword.other.unit',
      settings: {
        foreground: colors.lightBlue.light_blue_500
      }
    },
    {
      scope: ['punctuation.definition.entity.css'],
      settings: { foreground: colors.blue.blue_300 }
    },
    // Markdown
    {
      name: 'Markdown Titles',
      scope: 'entity.name.section.markdown',
      settings: {
        foreground: '#5dcdfd'
      }
    },
    {
      name: 'Markdown Title Hash',
      scope: 'punctuation.definition.heading.markdown',
      settings: {
        foreground: '#1ea8fc'
      }
    },
    {
      name: 'Markdown Raw',
      scope: 'markup.raw.inline.markdown',
      settings: {
        foreground: '#cccccc'
      }
    },
    {
      name: 'Markdown bold stars',
      scope: [
        'punctuation.definition.bold.markdown',
        'punctuation.definition.italic.markdown'
      ],
      settings: {
        foreground: '#1ea8fc'
      }
    },
    {
      name: 'Markdown link title braces',
      scope: [
        'punctuation.definition.string.begin.markdown',
        'punctuation.definition.string.end.markdown'
      ],
      settings: {
        foreground: '#1ea8fc'
      }
    },
    {
      name: 'Markdown link braces',
      scope: 'punctuation.definition.metadata.markdown',
      settings: {
        foreground: '#1ea8fc'
      }
    },
    {
      name: 'Markdown link',
      scope: [
        'markup.underline.link.markdown',
        'markup.underline.link.image.markdown',
        'meta.image.inline.markdown'
      ],
      settings: {
        foreground: '#1ea8fc',
        fontStyle: ''
      }
    },
    {
      name: 'Markdown bold/italic',
      scope: [
        'markup.bold.markdown',
        'markup.italic.markdown'
      ],
      settings: {
        foreground: '#1ea8fc'
      }
    },
    {
      name: 'Markdown bold/italic',
      scope: 'markup.italic.markdown',
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      name: 'Markdown bold/italic',
      scope: 'markup.bold.markdown',
      settings: {
        fontStyle: 'bold'
      }
    },
    {
      name: 'Markdown pre',
      scope: 'markup.raw.block.markdown',
      settings: {
        foreground: '#664e4d'
      }
    },
    {
      name: 'Template expressions.',
      scope: 'meta.template.expression',
      settings: {
        foreground: '#b6ced8'
      }
    }
  ]
};