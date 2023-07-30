import { fileName } from '../component/file_icon_name';

const generateIconName = () => fileName.map((element) =>
{
  let fileNames = {};
  let fileExtensions = {};

  if(element.fileNames)
  {
    element.fileNames.forEach((elementName) =>
    {
      fileNames = {
        ...fileNames,
        [elementName]: element.name
      };
    });
  }

  if(element.fileExtensions)
  {
    element.fileExtensions.forEach((elementName) =>
    {
      fileExtensions =
        {
          ...fileExtensions,
          [elementName]: element.name
        };
    });
  }

  return { fileExtensions, fileNames };
});

export { generateIconName };