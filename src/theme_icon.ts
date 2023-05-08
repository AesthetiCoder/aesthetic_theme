import { folder } from './icon/folder';
import { programmingIcons } from './icon/programming';

const themeIcons =
{
  iconDefinitions: {
    ...folder.iconDefinitions,
    ...programmingIcons.iconDefinitions
  },
  fileExtensions: {
    ...programmingIcons.fileExtensions
  },
  fileNames:
  {
    ...programmingIcons.fileNames
  },
  languageIds: {
    ...programmingIcons.languageIds
  },
  folderNames:
  {
    ...folder.folderNames
  },
  folderNamesExpanded:
  {
    ...folder.folderNamesExpanded
  },
  'hidesExplorerArrows': true,
  'folder': 'folder',
  'folderExpanded': 'folder_expanded',
  'file': 'file'
};

export { themeIcons };