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
    {
      name: 'folder_action',
      folderName: ['actions', 'action']
    },
    {
      name: 'folder_shader',
      folderName: ['glsl', 'hlsl', 'shader', 'shaders']
    },
    { name: 'folder_task', folderName: ['tasks', 'tickets', 'task'] },
    { name: 'folder_sass', folderName: ['sass', '_sass', 'scss', '_scss'] },
    { name: 'folder_expo', folderName: ['.expo', '.expo-shared'] },
    { name: 'folder_font', folderName: ['font', 'fonts'] },
    { name: 'folder_script', folderName: ['script', 'scripts'] },
    { name: 'folder_svg', folderName: ['svg', 'svgs'] },
    { name: 'folder_node', folderName: ['node_modules'] },
    { name: 'folder_prisma', folderName: ['prisma'] },
    { name: 'folder_pipe', folderName: ['pipe', 'pipes'] },
    { name: 'folder_cluster', folderName: ['cluster', 'clusters'] },
    { name: 'folder_guard', folderName: ['guard', 'guards'] },
    { name: 'folder_route', folderName: ['routes', 'router', 'routers', 'route'] },
    { name: 'folder_download', folderName: ['downloads', 'download'] },
    { name: 'folder_meta', folderName: ['meta'] },
    {
      name: 'folder_generated',
      folderName: [
        'generator',
        'generators',
        'generated',
        'cfn_gen',
        'gen',
        'gens',
        'auto'
      ]
    },
    {
      name: 'folder_util',
      folderName: ['util', 'utils', 'utility', 'utilities']
    },
    {
      name: 'folder_environment',
      folderName: [
        '.env',
        '.environment',
        'env',
        'envs',
        'environment',
        'environments',
        '.venv'
      ]
    },
    {
      name: 'folder_update',
      folderName: ['update', 'updates', 'upgrade', 'upgrades']
    },
    {
      name: 'folder_cart',
      folderName: ['cart', 'shopping_cart', 'shopping', 'shop']
    },
    { name: 'folder_context', folderName: ['context', 'contexts'] },

    {
      name: 'folder_coverage',
      folderName: [
        'coverage',
        '.nyc_output',
        '.nyc_output',
        'e2e',
        'it',
        'integration_test',
        'integration_tests',
        '__integration_test__',
        '__integration_tests__'
      ]
    },
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
    { name: 'folder_import', folderName: ['import', 'imports', 'imported'] },
    {
      name: 'folder_database',
      folderName: ['db', 'database', 'databases', 'sql', 'data', '_data']
    },
    {
      name: 'folder_secure',
      folderName: [
        'auth',
        'authentication',
        'secure',
        'security',
        'cert',
        'certs',
        'certificate',
        'certificates',
        'ssl'
      ]
    },
    {
      name: 'folder_mock',
      folderName: [
        '_draft',
        '_drafts',
        'mock',
        'mocks',
        'fixture',
        'fixtures',
        'draft',
        'drafts',
        'concept',
        'concepts',
        'sketch',
        'sketches'
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
    { name: 'folder_global', folderName: ['global', 'globals'] },
    { name: 'folder_shared', folderName: ['shared', 'common'] },
    { name: 'folder_middleware', folderName: ['middleware', 'middlewares'] },
    { name: 'folder_base', folderName: ['base', '.base', 'bases'] },
    { name: 'folder_template', folderName: ['template', 'templates'] },
    { name: 'folder_helper', folderName: ['helpers', 'helper'] },
    { name: 'folder_export', folderName: ['export', 'exports', 'exported'] },
    { name: 'folder_custom', folderName: ['custom', 'customs'] },
    { name: 'folder_upload', folderName: ['uploads', 'upload'] },
    {
      name: 'folder_mobile',
      folderName: ['mobile', 'mobiles', 'portable', 'portability']
    },
    {
      name: 'folder_view',
      folderName: [
        'view',
        'views',
        'screen',
        'screens',
        'page',
        'pages',
        'html'
      ]
    },
    {
      name: 'folder_other',
      folderName: [
        'other',
        'others',
        'misc',
        'miscellaneous',
        'extra',
        'extras',
        'etc'
      ]
    },
    {
      name: 'folder_archive',
      folderName: [
        'arc',
        'arcs',
        'archive',
        'archives',
        'archival',
        'bkp',
        'bkps',
        'bak',
        'baks',
        'backup',
        'backups',
        'back_up',
        'back_ups'
      ]
    },
    {
      name: 'folder_decorator',
      folderName: ['decorator', 'decorators']
    },
    {
      name: 'folder_language',
      folderName: [
        'i18n',
        'internationalization',
        'lang',
        'langs',
        'language',
        'languages',
        'locale',
        'locales',
        'l10n',
        'localization',
        'translation',
        'translate',
        'translations',
        '.tx'
      ]
    },
    {
      name: 'folder_hook',
      folderName: ['hook', 'hooks', 'trigger', 'triggers']
    },
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
    { name: 'folder_server', folderName: ['server', 'servers', 'backend'] },
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
    {
      name: 'folder_gamemaker',
      folderName: ['gamemaker', 'gamemaker2']
    },
    {
      name: 'folder_store',
      folderName: ['store', 'stores']
    },
    {
      name: 'folder_action',
      folderName: ['actions', 'action']
    },
    {
      name: 'folder_selector',
      folderName: ['selectors', 'selector']
    },
    { name: 'folder_private', folderName: ['private', '.private'] },
    {
      name: 'folder_syntax',
      folderName: ['syntax', 'syntaxes', 'spellcheck']
    },
    {
      name: 'folder_reducer',
      folderName: ['reducers', 'reducer']
    },
    {
      name: 'folder_state',
      folderName: ['states', 'state']
    },
    {
      name: 'folder_entity',
      folderName: ['entities', 'entity']
    },
    {
      name: 'folder_benchmark',
      folderName: [
        'benchmark',
        'benchmarks',
        'performance',
        'measure',
        'measures',
        'measurement'
      ]
    },
    {
      name: 'folder_lib',
      folderName: [
        'lib',
        'libs',
        'library',
        'libraries',
        'vendor',
        'vendors',
        'third_party'
      ]
    },
    { name: 'folder_api', folderName: ['api', 'apis', 'restapi'] },
    { name: 'folder_constant', folderName: ['constant', 'constants'] },
    { name: 'folder_admin', folderName: ['admin', 'manager', 'moderator'] },
    { name: 'folder_dump', folderName: ['dump', 'dumps'] },
    { name: 'folder_target', folderName: ['target'] },
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
      folderName: ['react', 'jsx', 'reactjs']
    },
    { name: 'folder_stack', folderName: ['stack', 'stacks'] },
    {
      name: 'folder_message',
      folderName: [
        'message',
        'messages',
        'messaging',
        'forum',
        'chat',
        'chats',
        'conversation',
        'conversations'
      ]
    },
    {
      name: 'folder_rule',
      folderName: [
        'rule',
        'rules',
        'validation',
        'validations',
        'validator',
        'validators'
      ]
    },
    {
      name: 'folder_component',
      folderName: ['components', 'widget', 'widgets', 'fragments', 'fragment', 'component']
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
    { name: 'folder_vm', folderName: ['vm', 'vms'] },
    { name: 'folder_ci', folderName: ['.ci', 'ci'] },
    { name: 'folder_core', folderName: ['core'] },
    {
      name: 'folder_review',
      folderName: ['review', 'reviews', 'revisal', 'revisals', 'reviewed']
    },
    {
      name: 'folder_function',
      folderName: [
        'func',
        'funcs',
        'function',
        'functions',
        'lambda',
        'lambdas',
        'logic',
        'math',
        'maths',
        'calc',
        'calcs',
        'calculation',
        'calculations'
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
      name: 'folder_project',
      folderName: ['project', 'projects', '.project', '.projects']
    },
    { name: 'folder_job', folderName: ['job', 'jobs'] },
    {
      name: 'folder_container',
      folderName: ['container', 'containers', '.devcontainer']
    },
    {
      name: 'folder_package',
      folderName: ['package', 'packages', 'pkg', 'pkgs']
    },
    {
      name: 'folder_interface',
      folderName: ['interface', 'interfaces']
    },
    { name: 'folder_changeset', folderName: ['.changesets', '.changeset'] },
    {
      name: 'folder_contract',
      folderName: [
        'pact',
        'pacts',
        'contract',
        '.contract',
        'contracts',
        'contract_testing',
        'contract_test',
        'contract_tests'
      ]
    },
    {
      name: 'folder_resource',
      folderName: [
        'resource',
        'resources',
        'res',
        'asset',
        'assets',
        'static',
        'report',
        'reports'
      ]
    },
    {
      name: 'folder_controller',
      folderName: [
        'controller',
        'controllers',
        'service',
        'services',
        'provider',
        'providers',
        'handler',
        'handlers'
      ]
    },
    {
      name: 'folder_plugin',
      folderName: [
        'plugin',
        'plugins',
        '_plugins',
        'extension',
        'extensions',
        'addon',
        'addons',
        'module',
        'modules'
      ]
    },
    { name: 'folder_app', folderName: ['app', 'apps'] },
    { name: 'folder_error', folderName: ['error', 'errors', 'err'] },
    {
      name: 'folder_mail',
      folderName: ['mail', 'mails', 'email', 'emails', 'smtp', 'mailers']
    },
    {
      name: 'folder_class',
      folderName: [
        'class',
        'classes',
        'model',
        'models',
        'schemas',
        'schema'
      ]
    },
    {
      name: 'folder_animation',
      folderName: ['anim', 'anims', 'animation', 'animations', 'animated']
    },
    {
      name: 'folder_python',
      folderName: ['python', '__pycache__', '.pytest_cache']
    },
    { name: 'folder_serverless', folderName: ['.serverless', 'serverless'] },
    {
      name: 'folder_home',
      folderName: ['home', '.home', 'start', '.start']
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
    { name: 'folder_effect', folderName: ['effects', 'effect'] },
    {
      name: 'folder_client',
      folderName: ['client', 'clients', 'frontend', 'pwa']
    },
    {
      name: 'folder_include',
      folderName: [
        'include',
        'includes',
        '_includes',
        'inc',
        'partials',
        '_partials'
      ]
    },
    {
      name: 'folder_temp',
      folderName: [
        'temp',
        '.temp',
        'tmp',
        '.tmp',
        'cached',
        'cache',
        '.cache'
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
      name: 'folder_key',
      folderName: ['keys', 'key', 'token', 'tokens', 'jwt']
    },
    {
      name: 'folder_queue',
      folderName: ['queue', 'queues', 'bull', 'mq']
    },
    {
      name: 'folder_config',
      folderName: [
        'cfg',
        'cfgs',
        'conf',
        'confs',
        'config',
        'configs',
        'configuration',
        'configurations',
        'setting',
        '.setting',
        'settings',
        '.settings',
        'META_INF'
      ]
    },
    { name: 'folder_layout', folderName: ['layout', 'layouts', '_layouts'] },
    {
      name: 'folder_tool',
      folderName: ['tools', 'tool', 'toolkit', 'toolkits', 'toolbox', 'toolboxes']
    },
    { name: 'folder_content', folderName: ['content', 'contents'] },
    {
      name: 'folder_connection',
      folderName: [
        'connection',
        'connections',
        'integration',
        'integrations'
      ]
    },
    {
      name: 'folder_command',
      folderName: ['command', 'commands', 'cmd', 'cli', 'clis']
    },
    { name: 'folder_log', folderName: ['log', 'logs'] },
    { name: 'folder_debug', folderName: ['debug', 'debugging'] },
    { name: 'folder_mapping', folderName: ['mappings', 'mapping'] },
    { name: 'folder_event', folderName: ['event', 'events'] },
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