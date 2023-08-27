import { generateIconTheme } from './generate_icon_theme';

const detectConfigurationChange = () =>
{
  generateIconTheme();
};

export { detectConfigurationChange };