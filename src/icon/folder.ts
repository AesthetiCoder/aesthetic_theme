
import type { FolderName } from '../types/folder_name_type';
import { generateFolderName } from '../utils/generate_folder_name';
import { getIconFolder } from '../utils/get_icon_folder';

const folder =
{
  iconDefinitions:
  {
    ...getIconFolder()
  },
  folderNames:
  {
    ...Object.assign({}, ...generateFolderName()) as FolderName
  },
  folderNamesExpanded:
  {
    ...Object.assign({}, ...generateFolderName(true)) as FolderName
  }
};

export { folder };