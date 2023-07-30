import { workspace } from 'vscode';

const getVscodeConfiguration = (section?: string) => workspace.getConfiguration(section);

export { getVscodeConfiguration };