import { generateIconTheme } from './generate_icon_theme';

const detectConfigurationChange = (): void =>
{
  generateIconTheme();
};

export { detectConfigurationChange };