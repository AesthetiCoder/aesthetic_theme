import {
  gray, purple, danger, warning, success, information
} from '../../../global/theme/color';

const git = {
  'gitDecoration.addedResourceForeground': success.success_500,
  'gitDecoration.conflictingResourceForeground': purple.purple_600,
  'gitDecoration.deletedResourceForeground': danger.danger_500,
  'gitDecoration.ignoredResourceForeground': gray.gray_600,
  'gitDecoration.modifiedResourceForeground': warning.warning_500,
  'gitDecoration.stageDeletedResourceForeground': danger.danger_600,
  'gitDecoration.stageModifiedResourceForeground': warning.warning_600,
  'gitDecoration.submoduleResourceForeground': information.information_600,
  'gitDecoration.untrackedResourceForeground': success.success_600
};

export { git };