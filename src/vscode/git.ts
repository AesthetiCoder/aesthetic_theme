import {
  danger, gray, purple, success, warning
} from '../theme/colors';

const git = {
  'gitDecoration.modifiedResourceForeground': warning.warning_600,
  'gitDecoration.deletedResourceForeground': danger.danger_600,
  'gitDecoration.untrackedResourceForeground': success.success_600,
  'gitDecoration.ignoredResourceForeground': gray.gray_700,
  'gitDecoration.conflictingResourceForeground': purple.purple_600
};

export { git };