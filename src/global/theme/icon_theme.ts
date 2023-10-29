import { generateFileTheme } from '../../module/file_icon/util/generate_file_theme';
import { generateFolderTheme } from '../../module/folder_icon/util/generate_folder_theme';

const fileConfiguration = generateFileTheme();
const folderConfiguration = generateFolderTheme();

const IconTheme =
{
  file: 'file',
  fileExtensions: { ...fileConfiguration.fileExtensions },
  fileNames: { ...fileConfiguration.fileNames },
  folder: 'folder',
  folderExpanded: 'folder_expanded',
  folderNames: { ...folderConfiguration.folderNames },
  folderNamesExpanded: { ...folderConfiguration.folderNamesExpanded },
  hidesExplorerArrows: true,

  iconDefinitions:
  {
    ...fileConfiguration.iconDefinitions,
    ...folderConfiguration.iconDefinitions
  }
};

export { IconTheme };