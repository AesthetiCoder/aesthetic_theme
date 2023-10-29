type ThemeConfigurationType =
{
  key: string;
  globalValue?: unknown;
  defaultValue?: unknown;
  workspaceValue?: unknown;
  globalLanguageValue?: unknown;
  defaultLanguageValue?: unknown;
  workspaceFolderValue?: unknown;
  workspaceLanguageValue?: unknown;
  languageIds?: string[] | undefined;
  workspaceFolderLanguageValue?: unknown;
};

export type { ThemeConfigurationType };