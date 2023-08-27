/* eslint-disable @typescript-eslint/no-magic-numbers */
import {
  gray, base, danger, warning, background, information
} from '../../../global/theme/color';
import { alpha } from '../../../global/util/alpha';
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
  'badge.background': information.information_500,
  'badge.foreground': gray.gray_200,
  'breadcrumb.background': background.background_900,
  'breadcrumb.focusForeground': gray.gray_300,
  'breadcrumb.foreground': gray.gray_400,
  'diffEditor.border': gray.gray_500,
  'diffEditor.insertedTextBackground': alpha(warning.warning_600, 0.35),
  'diffEditor.insertedTextBorder': gray.gray_500,
  'diffEditor.removedTextBackground': alpha(danger.danger_600, 0.35),
  'diffEditor.removedTextBorder': gray.gray_500,
  'editor.background': background.background_900,
  'editor.foldBackground': alpha(information.information_600, 0.2),
  'editor.foreground': gray.gray_400,
  'editor.inactiveSelectionBackground': alpha(information.information_900, 0.45),
  'editor.selectionBackground': alpha(information.information_700, 0.55),
  'editor.selectionHighlightBackground': alpha(information.information_700, 0.35),
  'editor.wordHighlightBackground': alpha(information.information_700, 0.35),
  'editor.wordHighlightStrongBackground': alpha(information.information_700, 0.35),
  'editorBracketMatch.background': background.background_600,

  'editorCodeLens.foreground': gray.gray_500,

  'editorCursor.foreground': gray.gray_400,
  'editorError.foreground': danger.danger_600,

  'editorGroup.border': gray.gray_400,
  'editorGroupHeader.border': base.transparent,
  'editorIndentGuide.background': gray.gray_900,
  'editorInfo.foreground': information.information_600,

  'editorLineNumber.activeForeground': gray.gray_400,
  'editorLineNumber.foreground': gray.gray_600,
  'editorLink.activeForeground': information.information_400,
  'editorMarkerNavigation.background': background.background_900,

  'editorMarkerNavigationError.background': danger.danger_600,
  'editorMarkerNavigationInfo.background': information.information_600,
  'editorMarkerNavigationWarning.background': warning.warning_600,

  'editorWarning.foreground': warning.warning_600,
  'editorWhitespace.foreground': gray.gray_900,

  errorForeground: gray.gray_400,
  focusBorder: base.transparent,
  foreground: gray.gray_400,
  'menu.background': background.background_900,
  'menu.border': gray.gray_500,
  'menu.foreground': gray.gray_400,
  'menu.selectionBackground': gray.gray_800,
  'menu.selectionForeground': gray.gray_300,
  'menu.separatorBackground': gray.gray_500,
  'menubar.selectionBackground': gray.gray_800,
  'menubar.selectionForeground': gray.gray_300,

  'progressBar.background': information.information_600,

  'titleBar.activeBackground': background.background_900,
  'titleBar.activeForeground': gray.gray_400,
  'titleBar.inactiveBackground': background.background_900,
  'titleBar.inactiveForeground': gray.gray_500,
  'widget.shadow': base.black,

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