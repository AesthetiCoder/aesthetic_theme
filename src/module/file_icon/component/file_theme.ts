import type { FileIconType } from '../type/file_icon_type';

import { IconPack } from '../constant/icon_pack';

const fileTheme: FileIconType[] =
[
  {
    fileExtensions: [ 'jsx' ],
    name: 'react'
  },
  {
    fileExtensions: [ 'tsx' ],
    name: 'react_ts'
  },
  {
    enabledFor: [ IconPack.Qwik ],
    fileExtensions: [ 'tsx' ],
    name: 'qwik'
  }
];

export { fileTheme };