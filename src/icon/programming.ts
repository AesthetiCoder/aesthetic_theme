import type { IconType } from '../type/icon_type';
import { generateIcon } from '../util/generate_icon';
import { generateIconName } from '../util/generate_icon_name';

const programmingIcons =
{
  iconDefinitions:
  {
    ...generateIcon()
  },
  fileNames:
  {
    ...Object.assign({}, ...generateIconName().map(el => el.fileNames)) as IconType
  },
  fileExtensions:
  {
    ...Object.assign({}, ...generateIconName().map(el => el.fileExtensions)) as IconType
  },
  languageIds:
  {
    ...Object.assign({}, ...generateIconName().map(el => el.languageIds)) as IconType
  }
};



export { programmingIcons };