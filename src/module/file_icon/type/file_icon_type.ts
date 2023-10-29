import type { RequireAtLeastOne } from '../../../global/interface/require_at_least_one';
import type { IconPack } from '../constant/icon_pack';

type FileIcon =
{
  name: string;
  light?: boolean;
  disabled?: boolean;
  fileNames?: string[];
  highContrast?: boolean;
  enabledFor?: IconPack[];
  fileExtensions?: string[];
};

export type FileIconType = RequireAtLeastOne<
FileIcon,
'fileNames' | 'fileExtensions'
>;