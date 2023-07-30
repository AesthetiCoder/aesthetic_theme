import type { IconType } from '../../../global/type/icon_type';

import { generateIcon } from './generate_icon';
import { generateIconName } from './generate_icon_name';

const fileIcon =
{
  fileExtensions:
  {
    ...Object.assign({}, ...generateIconName().map((element) => element.fileExtensions)) as IconType
  },
  fileNames:
  {
    ...Object.assign({}, ...generateIconName().map((element) => element.fileNames)) as IconType
  },
  iconDefinitions:
  {
    ...generateIcon()
  }
};

export { fileIcon };