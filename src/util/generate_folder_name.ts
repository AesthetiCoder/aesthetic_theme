import { folderName } from '../icon/folder_name';

const generateFolderName = (expanded?: boolean) =>
{
  const generatedName = folderName().map(el =>
  {
    return el.folderName.map(elName =>
    {
      let folder = {};
      folder = { ...folder, [elName]: expanded ? `${el.name}_expanded` : el.name };
      return folder;
    });
  });

  return generatedName.flat(1);
};

export { generateFolderName };