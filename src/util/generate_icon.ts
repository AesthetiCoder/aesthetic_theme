import * as fs from 'fs';
import * as path from 'path';

const generateIcon = () =>
{
  let icon = {};

  fs.readdirSync(path.resolve('__dirname', './../src/asset/icon/')).forEach(file =>
  {
    if(!file.includes('folder'))
    {
      icon = { ...icon, [file.split('.')[0]]: { iconPath: `./../src/asset/icon/${file}` } };
      return icon;
    }
    return;
  });

  return icon;
};

export { generateIcon };