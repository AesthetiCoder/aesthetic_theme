import {
  background, gray, base, danger, warning, information
} from '../theme/colors';

const notifications = {
  'notifications.foreground': gray.gray_400,
  'notifications.background': background.background_900,
  'notifications.border': base.transparent,
  'notificationToast.border': base.transparent,
  'notificationsErrorIcon.foreground': danger.danger_600,
  'notificationsWarningIcon.foreground': warning.warning_600,
  'notificationsInfoIcon.foreground': information.information_600,
  'notificationCenterHeader.foreground': gray.gray_400,
  'notificationCenterHeader.background': background.background_900,
  'notificationCenter.border': base.transparent
};

export { notifications };