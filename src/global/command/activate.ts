import { getVscodeConfiguration } from '../util/get_vscode_configuration';

const setIconTheme = async (): Promise<void> =>
{
  try
  {
    await getVscodeConfiguration().update('workbench.iconTheme', 'material-icon-theme', true);

    if(getVscodeConfiguration().inspect('workbench.iconTheme')?.workspaceValue)
    {
      await getVscodeConfiguration().update('workbench.iconTheme', 'material-icon-theme');
    }
  }
  catch (error: unknown)
  {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

const activateIcon = async () => setIconTheme();

export { activateIcon };