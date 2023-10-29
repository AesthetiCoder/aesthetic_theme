import { workspace, window as codeWindow } from 'vscode';

import { registered } from './global/command/command';
import { detectConfigurationChange } from './global/util/detect_configuration_change';
import { generateIconTheme } from './global/util/generate_icon_theme';
import { generateTheme } from './global/util/generate_theme';

import type { ExtensionContext } from 'vscode';

generateTheme();
generateIconTheme();

export const activate = (context: ExtensionContext): void =>
{
  generateTheme();

  context.subscriptions.push(...registered);

  detectConfigurationChange();

  workspace.onDidChangeConfiguration(detectConfigurationChange);

  codeWindow.onDidChangeWindowState((state) =>
  {
    if(state.focused)
    {
      detectConfigurationChange();
    }
  });

  workspace.onDidChangeConfiguration(detectConfigurationChange);
};

export const deactivate = (): void =>
// eslint-disable-next-line @typescript-eslint/no-empty-function
{};