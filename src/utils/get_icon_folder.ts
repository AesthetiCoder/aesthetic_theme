import * as fs from 'fs';
import * as path from 'path';

const getIconFolder = () =>
{
  let folder = {};

  fs.readdirSync(path.resolve('__dirname', './../src/asset/icon/')).forEach(file =>
  {
    if(file.includes('folder'))
    {
      folder = { ...folder, [file.split('.')[0]]: { iconPath: `./../src/asset/icon/${file}` } };
      return folder;
    }
    return;
  });

  return folder;
};

export { getIconFolder };