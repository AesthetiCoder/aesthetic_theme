import {
  danger, information, purple, success, warning
} from '../theme/colors';
import { alpha } from '../utils/alpha';

const overviewRuler = {
  'editorOverviewRuler.findMatchForeground': alpha(information.information_600, 0.45),
  'editorOverviewRuler.modifiedForeground': warning.warning_600,
  'editorOverviewRuler.addedForeground': success.success_600,
  'editorOverviewRuler.deletedForeground': danger.danger_900,
  'editorOverviewRuler.errorForeground': danger.danger_600,
  'editorOverviewRuler.warningForeground': warning.warning_900,
  'editorOverviewRuler.infoForeground': purple.purple_600
};

export { overviewRuler };