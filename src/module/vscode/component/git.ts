import {
  gray, purple, danger, success, information
} from '../../../global/theme/color';

const git = {
  'gitDecoration.addedResourceForeground': success.success_600,
  'gitDecoration.conflictingResourceForeground': purple.purple_700,
  'gitDecoration.deletedResourceForeground': danger.danger_600,
  'gitDecoration.ignoredResourceForeground': gray.gray_700,
  'gitDecoration.modifiedResourceForeground': information.information_600,
  'gitDecoration.stageDeletedResourceForeground': danger.danger_700,
  'gitDecoration.stageModifiedResourceForeground': information.information_800,
  'gitDecoration.submoduleResourceForeground': information.information_700,
  'gitDecoration.untrackedResourceForeground': success.success_700
};

export { git };