/* eslint-disable max-len */
import { workspace } from 'vscode';

import type { ThemeConfigurationType } from '../type/theme_configuration_type';

import type { WorkspaceConfiguration } from 'vscode';

const getVscodeConfiguration = (section?: string): WorkspaceConfiguration => workspace.getConfiguration(section);

const getThemeConfig = (section: string): undefined | ThemeConfigurationType => getVscodeConfiguration('aesthetic-theme').inspect(section);

export { getThemeConfig, getVscodeConfiguration };