const folderName = () =>
{
  return [
    {
      name: 'folder_src',
      folderName: [
        'src',
        'srcs',
        'source',
        'sources',
        'code'
      ]
    },
    {
      name: 'folder_git',
      folderName: [
        '.git',
        'patches',
        'githooks',
        'githook',
        'git_hook',
        'git_hooks',
        'submodules',
        '.submodules'
      ]
    },
    { name: 'folder_github', folderName: ['.github', 'github'] },
    { name: 'folder_graphql', folderName: ['graphql', 'gql'] },
    { name: 'folder_husky', folderName: ['husky', '.husky'] },
    {
      name: 'folder_yarn',
      folderName: ['yarn', '.yarn']
    },
    {
      name: 'folder_dist',
      folderName: ['dist', 'out', 'build', 'release', 'bin']
    },
    {
      name: 'folder_image',
      folderName: [
        '_images',
        '_image',
        '_imgs',
        '_img',
        'images',
        'image',
        'imgs',
        'img',
        'icons',
        'icon',
        'icos',
        'ico',
        'figures',
        'figure',
        'figs',
        'fig',
        'screenshot',
        'screenshots',
        'screengrab',
        'screengrabs',
        'pic',
        'pics',
        'picture',
        'pictures',
        'illustration',
        'illustrations'
      ]
    },
    { name: 'folder_lua', folderName: ['lua'] },
    { name: 'folder_markdown', folderName: ['markdown', 'md'] },
    {
      name: 'folder_javascript',
      folderName: ['js', 'javascript', 'javascripts']
    },
    {
      name: 'folder_public',
      folderName: [
        '_site',
        'public',
        'www',
        'wwwroot',
        'web',
        'website',
        'site',
        'browser',
        'browsers'
      ]
    },
    {
      name: 'folder_docker',
      folderName: ['docker', 'dockerfiles', '.docker']
    },
    { name: 'folder_sass', folderName: ['sass', '_sass', 'scss', '_scss'] },
    { name: 'folder_expo', folderName: ['.expo', '.expo-shared'] },
    { name: 'folder_font', folderName: ['font', 'fonts'] },
    { name: 'folder_script', folderName: ['script', 'scripts'] },
    { name: 'folder_svg', folderName: ['svg', 'svgs'] },
    { name: 'folder_node', folderName: ['node_modules'] },
    { name: 'folder_prisma', folderName: ['prisma'] },
    {
      name: 'folder_test',
      folderName: [
        'test',
        'tests',
        'testing',
        '__tests__',
        '__snapshots__',
        '__mocks__',
        '__fixtures__',
        '__test__',
        'spec',
        'specs'
      ]
    },
    {
      name: 'folder_theme',
      folderName: [
        'themes',
        'theme',
        'color',
        'colors',
        'design',
        'designs'
      ]
    },
    { name: 'folder_webpack', folderName: ['webpack', '.webpack'] },
    { name: 'folder_vscode', folderName: ['.vscode', '.vscode-test'] },
    {
      name: 'folder_vercel',
      folderName: ['vercel', '.vercel', 'now', '.now']
    },
    {
      name: 'folder_typescript',
      folderName: ['typescript', 'ts', 'typings', '@types', 'types']
    },
    {
      name: 'folder_apollo',
      folderName: [
        'apollo',
        'apollo-client',
        'apollo-cache',
        'apollo-config'
      ]
    },
    {
      name: 'folder_css',
      folderName: ['css', 'stylesheet', 'stylesheets', 'style', 'styles']
    }
  ];
};

export { folderName };