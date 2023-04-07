import {
  background, base, gray, information
} from '../theme/colors';
import { activityBar } from './activity_bar';
import { button } from './button';
import { dropdown } from './dropdown';
import { git } from './git';
import { gutter } from './gutter';
import { input } from './input';
import { list } from './list';
import { overviewRuler } from './overview_ruler';
import { peekView } from './peek_view';
import { scrollbar } from './scrollbar';
import { sidebar } from './sidebar';
import { statusBar } from './status_bar';
import { tab } from './tab';
import { widget } from './widget';

const global = {
  foreground: gray.gray_500,
  focusBorder: information.information_600,
  errorForeground: gray.gray_500,
  // selection.background
  'widget.shadow': base.black,
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

  'progressBar.background': information.information_600,

  'badge.background': information.information_600,
  'badge.foreground': gray.gray_300,

  'titleBar.activeBackground': background.background_900,
  'titleBar.activeForeground': gray.gray_500,
  'titleBar.inactiveBackground': background.background_900,
  'titleBar.inactiveForeground': gray.gray_700,

  'editor.selectionBackground': `${information.information_700}55`,
  'editor.selectionHighlightBackground': `${information.information_700}55`,
  'editor.inactiveSelectionBackground': `${information.information_900}45`,

  'editor.wordHighlightBackground': `${information.information_700}75`,
  'editor.wordHighlightStrongBackground': `${information.information_700}55`,

  ...button,
  ...dropdown,
  ...input,
  ...scrollbar,
  ...list,
  ...activityBar,
  ...sidebar,
  ...tab,
  ...overviewRuler,
  ...gutter,
  ...widget,
  ...peekView,
  ...statusBar,
  ...git
};

export { global };