import {
  gray, purple, danger, warning, success, information
} from '../../../global/theme/color';

const git = {
  'gitDecoration.addedResourceForeground': success.success_600,
  'gitDecoration.conflictingResourceForeground': purple.purple_700,
  'gitDecoration.deletedResourceForeground': danger.danger_600,
  'gitDecoration.ignoredResourceForeground': gray.gray_600,
  'gitDecoration.modifiedResourceForeground': warning.warning_600,
  'gitDecoration.stageDeletedResourceForeground': danger.danger_700,
  'gitDecoration.stageModifiedResourceForeground': warning.warning_700,
  'gitDecoration.submoduleResourceForeground': information.information_700,
  'gitDecoration.untrackedResourceForeground': success.success_700
};

export { git };