import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { IconTheme } from '../theme/icon_theme';
import { isFolder } from '../validator/is_folder';

const buildIcon = (): void =>
{
  const space = 2;

  if(!isFolder('./dist'))
  {
    mkdirSync('./dist', { recursive: false });
  }

  const path = join(__dirname, '..', '..', '..', './dist/aesthetic_icon_theme.json');

  writeFileSync(path, JSON.stringify(IconTheme, undefined, space));
};

export { buildIcon };