import { commands } from 'vscode';

import { activateIcon } from './activate';

const extensionCommands: Record<string, () => Promise<void>> = {
  activateIcon
};

const registered = Object.keys(extensionCommands).map((commandName) =>
{
  const callCommand = async () => extensionCommands[commandName]?.();

  return commands.registerCommand(`aesthetic-icon-theme.${commandName}`, callCommand);
});

export { registered };