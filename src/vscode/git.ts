import {
  danger, gray, information, purple, success, warning
} from '../theme/colors';

const git = {
  'gitDecoration.addedResourceForeground': success.success_400,
  'gitDecoration.untrackedResourceForeground': success.success_600,
  'gitDecoration.modifiedResourceForeground': warning.warning_600,
  'gitDecoration.stageModifiedResourceForeground': warning.warning_600,
  'gitDecoration.deletedResourceForeground': danger.danger_600,
  'gitDecoration.stageDeletedResourceForeground': danger.danger_600,
  'gitDecoration.ignoredResourceForeground': gray.gray_700,
  'gitDecoration.conflictingResourceForeground': purple.purple_600,
  'gitDecoration.submoduleResourceForeground': information.information_600
};

export { git };