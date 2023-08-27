import { generateFolderTheme } from './util/generate_folder_themet';

const folderConfiguration = generateFolderTheme();

const folderIcon = {
  folder: 'folder',
  folderExpanded: 'folder_expanded',
  ...folderConfiguration
};

export { folderIcon };