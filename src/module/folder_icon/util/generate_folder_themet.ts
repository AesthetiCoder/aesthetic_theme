import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';

import { FOLDER_ICON_PATH } from '../../../global/constant/path';
import { folderTheme } from '../component/folder_theme';

const generateFolderTheme = () =>
{
  const folderConfiguration = {
    folderNames: {},
    folderNamesExpanded: {},
    iconDefinitions: {}
  };

  readdirSync(resolve('__dirname', './../src/global/asset/folder_icon/')).forEach((file) =>
  {
    const folderName = file.split('.')[0]?.toString() ?? '';

    folderConfiguration.iconDefinitions = {
      ...folderConfiguration.iconDefinitions,
      [folderName]: { iconPath: `${FOLDER_ICON_PATH}${file}` }
    };
  });

  folderTheme.forEach((folderData) =>
  {
    folderData.folderName.forEach((folderNameData) =>
    {
      folderConfiguration.folderNames = {
        ...folderConfiguration.folderNames,
        [folderNameData]: folderData.name
      };

      folderConfiguration.folderNamesExpanded = {
        ...folderConfiguration.folderNamesExpanded,
        [folderNameData]: `${folderData.name}_expanded`
      };
    });
  });

  return folderConfiguration;
};

export { generateFolderTheme };