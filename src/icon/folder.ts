
import type { FolderType } from '../type/folder_type';
import { generateFolderName } from '../util/generate_folder_name';
import { getIconFolder } from '../util/get_icon_folder';

const folder =
{
  iconDefinitions:
  {
    ...getIconFolder()
  },
  folderNames:
  {
    ...Object.assign({}, ...generateFolderName()) as FolderType
  },
  folderNamesExpanded:
  {
    ...Object.assign({}, ...generateFolderName(true)) as FolderType
  }
};

export { folder };