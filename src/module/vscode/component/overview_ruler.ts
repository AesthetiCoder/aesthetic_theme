/* eslint-disable @typescript-eslint/no-magic-numbers */
import {
  purple, danger, warning, success, information
} from '../../../global/theme/color';
import { alpha } from '../../../global/util/alpha';

const overviewRuler = {
  'editorOverviewRuler.addedForeground': success.success_600,
  'editorOverviewRuler.deletedForeground': danger.danger_900,
  'editorOverviewRuler.errorForeground': danger.danger_600,
  'editorOverviewRuler.findMatchForeground': alpha(information.information_600, 0.45),
  'editorOverviewRuler.infoForeground': purple.purple_600,
  'editorOverviewRuler.modifiedForeground': warning.warning_600,
  'editorOverviewRuler.warningForeground': warning.warning_900
};

export { overviewRuler };