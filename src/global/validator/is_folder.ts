import { existsSync } from 'node:fs';

const isFolder = (path: string): boolean =>
{
  const folderExist = existsSync(path);

  return Boolean(folderExist);
};

export { isFolder };