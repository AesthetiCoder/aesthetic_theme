import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { theme } from '../../module/vscode/theme';
import { isFolder } from '../validator/is_folder';

const generateTheme = (): void =>
{
  const space = 2;

  if(!isFolder('./dist'))
  {
    mkdirSync('./dist', { recursive: false });
  }

  const path = join(__dirname, '..', '..', '..', './dist/aesthetic_dark_theme.json');

  writeFileSync(path, JSON.stringify(theme, undefined, space));
};

export { generateTheme };