import * as fs from 'fs';
import { theme } from './theme/theme';

const main = (): void =>
{
  const space = 2;
  const folderExist = fs.existsSync('./dist/generated');

  if(!folderExist)
  {
    fs.mkdirSync('./dist/generated', { recursive: false });
  }

  fs.writeFileSync('./dist/generated/dark-theme.json', JSON.stringify(theme, null, space));
};

main();