import { registered } from './global/command/command';
import { generateIconTheme } from './global/util/generate_icon_theme';
import { generateTheme } from './global/util/generate_theme';

import type { ExtensionContext } from 'vscode';

export const activate = (context: ExtensionContext) =>
{
  context.subscriptions.push(...registered);

  generateTheme();
  generateIconTheme();
};

export const deactivate = () =>
// eslint-disable-next-line @typescript-eslint/no-empty-function
{};

/*
 *const main = (): void =>
 *{
 *  const space = 2;
 *  const folderExist = existsSync('./dist');
 *
 *  if(!folderExist)
 *  {
 *    mkdirSync('./dist', { recursive: false });
 *  }
 *
 *  writeFileSync('./dist/aesthetic_dark_theme.json', JSON.stringify(theme, undefined, space));
 *  writeFileSync('./dist/aesthetic_icon_theme.json', JSON.stringify(themeIcon, undefined, space));
 *};
 *
 *main();
 */