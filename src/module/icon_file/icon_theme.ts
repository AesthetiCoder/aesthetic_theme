import { fileIcon } from './util/file_icon';

const themeIcon =
{
  file: 'file',
  fileExtensions: {
    ...fileIcon.fileExtensions
  },
  fileNames:
  {
    ...fileIcon.fileNames
  },
  folder: 'folder',
  folderExpanded: 'folder_expanded',

  /*
   *folderNames:
   *{
   *  ...folder.folderNames
   *},
   *folderNamesExpanded:
   *{
   *  ...folder.folderNamesExpanded
   *},
   */

  hidesExplorerArrows: true,
  iconDefinitions: {
    // ...folder.iconDefinitions,
    ...fileIcon.iconDefinitions
  }

  /*
   *languageIds: {
   *  ...fileIcon.languageIds
   *}
   */

};

export { themeIcon };