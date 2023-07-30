import type { RequireAtLeastOne } from '../../../global/interface/require_at_least_one';
import type { IconPack } from '../constant/icon_pack';

interface FileIcon
{
  name: string;
  light?: boolean;
  disabled?: boolean;
  fileNames?: string[];
  highContrast?: boolean;
  enabledFor?: IconPack[];
  fileExtensions?: string[];
}

export type FileIconInterface = RequireAtLeastOne<
FileIcon,
'fileNames' | 'fileExtensions'
>;