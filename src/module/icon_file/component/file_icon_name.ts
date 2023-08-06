import type { FileIconInterface } from '../interface/file_icon_interface';

import { IconPack } from '../constant/icon_pack';

const fileName: FileIconInterface[] =
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

export { fileName };