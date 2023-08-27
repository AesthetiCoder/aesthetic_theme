import { mkdirSync, existsSync, writeFileSync } from 'node:fs';

import { IconTheme } from '../theme/icon_theme';

const generateIconTheme = () =>
{
  const space = 2;
  const folderExist = existsSync('./dist');

  if(!folderExist)
  {
    mkdirSync('./dist', { recursive: false });
  }

  writeFileSync('./dist/aesthetic_icon_theme.json', JSON.stringify(IconTheme, undefined, space));
};

export { generateIconTheme };