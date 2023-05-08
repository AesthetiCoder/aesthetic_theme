import {
  background, base, danger, gray, information, warning
} from '../theme/colors';
import { alpha } from '../util/alpha';
import { activityBar } from './activity_bar';
import { button } from './button';
import { dropdown } from './dropdown';
import { git } from './git';
import { gutter } from './gutter';
import { input } from './input';
import { list } from './list';
import { notifications } from './notifications';
import { overviewRuler } from './overview_ruler';
import { peekView } from './peek_view';
import { scrollbar } from './scrollbar';
import { sidebar } from './sidebar';
import { statusBar } from './status_bar';
import { tab } from './tab';
import { widget } from './widget';

const global =
{
  foreground: gray.gray_500,
  focusBorder: base.transparent,
  errorForeground: gray.gray_500,
  'editorError.foreground': danger.danger_600,
  'editorWarning.foreground': warning.warning_600,
  'editorInfo.foreground': information.information_600,
  'widget.shadow': base.black,
  'editor.background': background.background_900,
  'editor.foreground': gray.gray_500,
  'editorCursor.foreground': gray.gray_500,
  'editorLineNumber.foreground': gray.gray_800,
  'editorLineNumber.activeForeground': gray.gray_500,
  'editorLink.activeForeground': information.information_400,
  'editorWhitespace.foreground': gray.gray_900,
  'editorIndentGuide.background': gray.gray_900,
  'editorCodeLens.foreground': gray.gray_600,
  'editorBracketMatch.background': background.background_600,
  'editor.foldBackground': alpha(information.information_600, 0.20),
  'editorGroup.border': background.background_500,

  'progressBar.background': information.information_600,

  'badge.background': information.information_600,
  'badge.foreground': gray.gray_300,

  'breadcrumb.foreground': gray.gray_700,
  'breadcrumb.background': background.background_900,
  'breadcrumb.focusForeground': gray.gray_500,
  'editorGroupHeader.border': base.transparent,

  'titleBar.activeBackground': background.background_900,
  'titleBar.activeForeground': gray.gray_500,
  'titleBar.inactiveBackground': background.background_900,
  'titleBar.inactiveForeground': gray.gray_700,

  'editor.selectionBackground': alpha(information.information_700, 0.55),
  'editor.selectionHighlightBackground': alpha(information.information_700, 0.35),
  'editor.inactiveSelectionBackground': alpha(information.information_900, 0.45),

  'editor.wordHighlightBackground': alpha(information.information_700, 0.35),
  'editor.wordHighlightStrongBackground': alpha(information.information_700, 0.35),

  'menu.background': background.background_900,
  'menu.foreground': gray.gray_500,
  'menu.separatorBackground': background.background_500,
  'menu.selectionBackground': background.background_700,
  'menu.selectionForeground': gray.gray_300,
  'menubar.selectionBackground': background.background_700,
  'menubar.selectionForeground': gray.gray_300,

  'editorMarkerNavigation.background': background.background_900,
  'editorMarkerNavigationError.background': danger.danger_600,
  'editorMarkerNavigationWarning.background': warning.warning_600,
  'editorMarkerNavigationInfo.background': information.information_600,

  'diffEditor.border': base.transparent,
  'diffEditor.removedTextBorder': base.transparent,
  'diffEditor.insertedTextBorder': base.transparent,
  'diffEditor.insertedTextBackground': alpha(warning.warning_600, 0.35),
  'diffEditor.removedTextBackground': alpha(danger.danger_600, 0.35),

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
  ...notifications,
  ...git
};

export { global };