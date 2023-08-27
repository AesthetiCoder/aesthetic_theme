import { workspace, window as codeWindow } from 'vscode';

import { registered } from './global/command/command';
import { detectConfigurationChange } from './global/util/detect_configuration_change';
import { generateTheme } from './global/util/generate_theme';

import type { ExtensionContext } from 'vscode';

export const activate = (context: ExtensionContext) =>
{
  context.subscriptions.push(...registered);

  generateTheme();

  detectConfigurationChange();

  workspace.onDidChangeConfiguration(detectConfigurationChange);

  codeWindow.onDidChangeWindowState((state) =>
  {
    if(state.focused)
    {
      detectConfigurationChange();
    }
  });

  // workspace.onDidChangeConfiguration(detectConfigChanges);
};

export const deactivate = () =>
// eslint-disable-next-line @typescript-eslint/no-empty-function
{};