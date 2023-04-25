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
      name: 'folder_docs',
      folderName: [
        '_post',
        '_posts',
        'doc',
        'docs',
        'document',
        'documents',
        'documentation',
        'post',
        'posts',
        'article',
        'articles'
      ]
    },
    {
      name: 'folder_example',
      folderName: [
        'demo',
        'demos',
        'example',
        'examples',
        'sample',
        'samples',
        'sample_data'
      ]
    },
    {
      name: 'folder_music',
      folderName: [
        'aud',
        'auds',
        'audio',
        'audios',
        'music',
        'sound',
        'sounds'
      ]
    },
    { name: 'folder_flow', folderName: ['flow_typed'] },
    { name: 'folder_firebase', folderName: ['firebase', '.firebase'] },
    { name: 'folder_gradle', folderName: ['gradle', '.gradle'] },
    { name: 'folder_intellij', folderName: ['.idea'] },
    { name: 'folder_json', folderName: ['json', 'jsons'] },
    { name: 'folder_mjml', folderName: ['mjml'] },
    { name: 'folder_less', folderName: ['less'] },
    {
      name: 'folder_mercurial',
      folderName: ['.hg', 'hghooks', '.hghooks', '.hgext']
    },
    {
      name: 'folder_kubernetes',
      folderName: ['kubernetes', '.kubernetes', 'k8s', '.k8s']
    },
    { name: 'folder_ios', folderName: ['ios'] },
    {
      name: 'folder_java',
      folderName: ['java']
    },
    {
      name: 'folder_jinja',
      folderName: ['jinja', 'jinja2', 'j2']
    },
    {
      name: 'folder_gulp',
      folderName: [
        'gulp',
        'gulp_tasks',
        'gulpfile.js',
        'gulpfile.mjs',
        'gulpfile.ts',
        'gulpfile.babel.js'
      ]
    },
    {
      name: 'folder_cypress',
      folderName: ['cypress', '.cypress']
    },
    {
      name: 'folder_godot',
      folderName: ['godot', '.godot', 'godot_cpp', '.godot_cpp']
    },
    { name: 'folder_gitlab', folderName: ['.gitlab'] },
    { name: 'folder_fastlane', folderName: ['fastlane'] },
    { name: 'folder_delta', folderName: ['delta', 'deltas', 'changes'] },
    { name: 'folder_cobol', folderName: ['cobol'] },
    { name: 'folder_circle_ci', folderName: ['.circleci'] },
    { name: 'folder_bower', folderName: ['bower_components', 'bower_component'] },
    { name: 'folder_buildkite', folderName: ['buildkite', '.buildkite'] },
    {
      name: 'folder_azure',
      folderName: ['.azure_pipelines', '.azure_pipelines_ci', 'azure']
    },
    { name: 'folder_aws', folderName: ['aws', '.aws'] },
    { name: 'folder_aurelia', folderName: ['aurelia_project'] },
    {
      name: 'folder_angular',
      folderName: ['angular', '.angular']
    },
    { name: 'folder_ansible', folderName: ['ansible'] },
    { name: 'folder_android', folderName: ['android'] },
    {
      name: 'folder_video',
      folderName: ['vid', 'vids', 'video', 'videos', 'movie', 'movies']
    },
    { name: 'folder_netlify', folderName: ['.netlify'] },
    {
      name: 'folder_pdf',
      folderName: ['pdf', 'pdfs']
    },
    {
      name: 'folder_verdaccio',
      folderName: ['.verdaccio', 'verdaccio']
    },
    {
      name: 'folder_vue',
      folderName: ['vue']
    },
    { name: 'folder_wakatime', folderName: ['wakatime'] },
    { name: 'folder_terraform', folderName: ['terraform', '.terraform'] },
    { name: 'folder_quasar', folderName: ['.quasar'] },
    { name: 'folder_svelte', folderName: ['svelte', '.svelte_kit'] },
    {
      name: 'folder_unity',
      folderName: ['unity']
    },
    { name: 'folder_supabase', folderName: ['supabase', '.supabase'] },
    {
      name: 'folder_storybook',
      folderName: ['.storybook', 'storybook', 'stories', '__stories__']
    },
    { name: 'folder_stylus', folderName: ['stylus'] },
    { name: 'folder_sublime', folderName: ['sublime'] },
    {
      name: 'folder_react_component',
      folderName: ['components', 'component', 'react', 'jsx', 'reactjs']
    },
    { name: 'folder_stencil', folderName: ['.stencil'] },
    { name: 'folder_scala', folderName: ['scala'] },
    {
      name: 'folder_resolver',
      folderName: ['resolver', 'resolvers']
    },
    {
      name: 'folder_plastic',
      folderName: ['plastic', '.plastic']
    },
    {
      name: 'folder_python',
      folderName: ['python', '__pycache__', '.pytest_cache']
    },
    {
      name: 'folder_proto',
      folderName: ['protobufs', 'proto']
    },
    { name: 'folder_upload', folderName: ['uploads', 'upload'] },
    { name: 'folder_download', folderName: ['downloads', 'download'] },
    { name: 'folder_next', folderName: ['.next'] },
    {
      name: 'folder_nuxt',
      folderName: ['nuxt', '.nuxt']
    },
    { name: 'folder_php', folderName: ['php'] },
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