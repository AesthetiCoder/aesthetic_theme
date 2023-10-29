import { readdirSync } from 'node:fs';
import { join } from 'node:path';

import type { GenerateFileThemeType } from '../type/generate_file_theme_type';

import { FILE_ICON_PATH } from '../../../global/constant/path';
import { getThemeConfig } from '../../../global/util/get_vscode_configuration';
import { fileTheme } from '../component/file_theme';

const generateFileTheme = (): GenerateFileThemeType =>
{
  const iconConfiguration =
  {
    fileExtensions: {},
    fileNames: {},
    iconDefinitions: {},
    languageIds: {}
  };

  const iconPack = getThemeConfig('activeIconPack');
  // workspaceValue globalValue defaultValue

  readdirSync(join(__dirname, '..', '..', '..', './global/asset/file_icon/')).forEach((file) =>
  {
    const folderName = file.split('.')[0]?.toString() ?? '';

    iconConfiguration.iconDefinitions =
    {
      ...iconConfiguration.iconDefinitions,
      [folderName]: { iconPath: `${FILE_ICON_PATH}/${file}` }
    };

    const value = iconPack?.workspaceValue ?
      iconPack.workspaceValue :
      iconPack?.globalValue ?
        iconPack.globalValue :
iconPack?.defaultValue;

    const iconFilter = fileTheme.filter((icon) => icon.enabledFor.includes(iconPack));

    console.log(iconFilter);

    fileTheme.forEach((fileInfo) =>
    {
      fileInfo.fileExtensions?.forEach((fileExtension) =>
      {
        iconConfiguration.fileExtensions =
        {
          ...iconConfiguration.fileExtensions,
          [fileExtension]: fileInfo.name
        };
      });

      fileInfo.fileNames?.forEach((fileName) =>
      {
        iconConfiguration.fileNames =
        {
          ...iconConfiguration.fileNames,
          [fileName]: fileInfo.name
        };
      });
    });
  });

  return iconConfiguration;
};

export { generateFileTheme };