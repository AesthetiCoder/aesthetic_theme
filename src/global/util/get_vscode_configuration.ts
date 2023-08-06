import { workspace } from 'vscode';

const getVscodeConfiguration = (section?: string) => workspace.getConfiguration(section);

const getThemeConfig = (section: string) => getVscodeConfiguration('aesthetic-theme').inspect(section);

export { getThemeConfig, getVscodeConfiguration };