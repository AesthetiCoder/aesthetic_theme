import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const generateIcon = () =>
{
  let icon = {};
  const iconUrl = resolve(__dirname, '../../../../dist/global/asset/file_icon');

  readdirSync(iconUrl).forEach((file) =>
  {
    icon = { ...icon, [file.split('.')[0]!]: { iconPath: `./global/asset/file_icon/${file}` } };
    return icon;
  });

  return icon;
};

export { generateIcon };