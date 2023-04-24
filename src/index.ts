import * as fs from 'fs';
import { theme } from './theme';
import { themeIcons } from './theme_icon';

const main = (): void =>
{
  const space = 2;
  const folderExist = fs.existsSync('./themes');

  if(!folderExist)
  {
    fs.mkdirSync('./themes', { recursive: false });
  }

  fs.writeFileSync('./themes/dark-theme.json', JSON.stringify(theme, null, space));
  fs.writeFileSync('./themes/dark-icon-theme.json', JSON.stringify(themeIcons, null, space));
};

main();