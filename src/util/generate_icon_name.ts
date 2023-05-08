import { iconName } from '../icon/icon_name';

const generateIconName = () =>
{
  const generatedName = iconName.map(el =>
  {
    let fileNames = {};
    let fileExtensions = {};
    let languageIds = {};

    if(el.fileNames)
    {
      el.fileNames.map(elName =>
      {
        fileNames = {
          ...fileNames,
          [elName]: el.name
        };
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if(el.fileExtensions)
    {
      el.fileExtensions.map(elName =>
      {
        fileExtensions =
        {
          ...fileExtensions,
          [elName]: el.name
        };
      });
    }

    if(el.languageIds)
    {
      el.languageIds.map(elName =>
      {
        languageIds = {
          ...languageIds,
          [elName]: el.name
        };
      });
    }

    return { fileNames, fileExtensions, languageIds };
  });

  return generatedName;
};

export { generateIconName };