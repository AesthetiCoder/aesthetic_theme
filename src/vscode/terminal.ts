import {
  background, base, cyan, danger, gray, information, purple, success, warning
} from '../theme/colors';
import { alpha } from '../util/alpha';

const terminal = {
  'panel.background': background.background_900,
  'panel.border': base.transparent,
  'panelTitle.activeBorder': background.background_500,
  'panelTitle.activeForeground': gray.gray_500,
  'panelTitle.inactiveForeground': gray.gray_700,
  'terminal.foreground': gray.gray_500,
  'terminal.selectionBackground': alpha(information.information_700, 0.55),
  'terminal.border': base.transparent,
  'terminalCursor.foreground': gray.gray_300,
  'terminalCursor.background': gray.gray_300,
  'terminal.ansiWhite': gray.gray_300,
  'terminal.ansiBrightWhite': gray.gray_300,
  'terminal.ansiBlack': gray.gray_600,
  'terminal.ansiBrightBlack': gray.gray_500,
  'terminal.ansiBlue': information.information_600,
  'terminal.ansiBrightBlue': information.information_300,
  'terminal.ansiCyan': cyan.cyan_600,
  'terminal.ansiBrightCyan': cyan.cyan_300,
  'terminal.ansiGreen': success.success_600,
  'terminal.ansiBrightGreen': success.success_300,
  'terminal.ansiMagenta': purple.purple_600,
  'terminal.ansiBrightMagenta': purple.purple_300,
  'terminal.ansiRed': danger.danger_600,
  'terminal.ansiBrightRed': danger.danger_300,
  'terminal.ansiYellow': warning.warning_600,
  'terminal.ansiBrightYellow': warning.warning_300
};

export { terminal };