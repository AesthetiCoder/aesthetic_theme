import { mkdirSync, existsSync, writeFileSync } from 'node:fs';

import { theme } from '../../module/vscode/theme';

const generateTheme = () =>
{
  const space = 2;
  const folderExist = existsSync('./dist');

  if(!folderExist)
  {
    mkdirSync('./dist', { recursive: false });
  }

  writeFileSync('./dist/aesthetic_dark_theme.json', JSON.stringify(theme, undefined, space));
};

export { generateTheme };