/* eslint-disable @typescript-eslint/no-magic-numbers */
import {
  gray, cyan, base, purple, danger, warning, success, background, information
} from '../../../global/theme/color';
import { alpha } from '../../../global/util/alpha';

const terminal = {
  'panel.background': background.background_900,
  'panel.border': base.transparent,
  'panelTitle.activeBorder': background.background_500,
  'panelTitle.activeForeground': gray.gray_500,
  'panelTitle.inactiveForeground': gray.gray_700,
  'terminal.ansiBlack': gray.gray_500,
  'terminal.ansiBlue': information.information_600,
  'terminal.ansiBrightBlack': gray.gray_500,
  'terminal.ansiBrightBlue': information.information_300,
  'terminal.ansiBrightCyan': cyan.cyan_300,
  'terminal.ansiBrightGreen': success.success_300,
  'terminal.ansiBrightMagenta': purple.purple_300,
  'terminal.ansiBrightRed': danger.danger_300,
  'terminal.ansiBrightWhite': gray.gray_400,
  'terminal.ansiBrightYellow': warning.warning_300,
  'terminal.ansiCyan': cyan.cyan_600,
  'terminal.ansiGreen': success.success_600,
  'terminal.ansiMagenta': purple.purple_600,
  'terminal.ansiRed': danger.danger_600,
  'terminal.ansiWhite': gray.gray_400,
  'terminal.ansiYellow': warning.warning_600,
  'terminal.border': base.transparent,
  'terminal.foreground': gray.gray_500,
  'terminal.selectionBackground': alpha(information.information_700, 0.55),
  'terminalCursor.background': gray.gray_400,
  'terminalCursor.foreground': gray.gray_400
};

export { terminal };