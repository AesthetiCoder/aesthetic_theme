import { background, base, gray } from '../theme/colors';
import { alpha } from '../utils/alpha';

const tab = {
  'editorGroupHeader.noTabsBackground': background.background_900,
  'editorGroup.dropBackground': alpha(background.background_900, 0.90),
  'editorGroupHeader.tabsBackground': background.background_900,
  'tab.activeForeground': gray.gray_400,
  'tab.inactiveForeground': gray.gray_700,
  'tab.border': base.transparent,
  'tab.inactiveBackground': background.background_900,
  'tab.activeBackground': background.background_900
};

export { tab };