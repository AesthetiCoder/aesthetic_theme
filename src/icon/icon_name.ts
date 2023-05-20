const iconName =
[
  {
    name: 'astro',
    fileExtensions: ['astro'],
    fileNames: [
      'astro.config.js',
      'astro.config.mjs',
      'astro.config.cjs',
      'astro.config.ts',
      'astro.config.cts',
      'astro.config.mts'
    ]
  },
  {
    name: 'typescript',
    languageIds: [ 'ts' ],
    fileExtensions: [ 'ts' ]
  },
  {
    name: 'pnpm',
    fileNames: ['pnpm-lock.yaml', 'pnpm-workspace.yaml', '.pnpmfile.cjs']
  },
  { name: 'nodemon', fileNames: ['nodemon.json', 'nodemon-debug.json'] },
  {
    name: 'husky',
    fileNames: [
      '.huskyrc',
      'husky.config.js',
      '.huskyrc.json',
      '.huskyrc.js',
      '.huskyrc.yaml',
      '.huskyrc.yml'
    ]
  },
  {
    name: 'todo',
    fileNames: ['todo.md', 'todos.md'],
    fileExtensions: ['todo']
  },
  {
    name: 'stylelint',
    fileNames: [
      '.stylelintrc',
      'stylelint.config.js',
      'stylelint.config.cjs',
      '.stylelintrc.json',
      '.stylelintrc.yaml',
      '.stylelintrc.yml',
      '.stylelintrc.js',
      '.stylelintrc.cjs',
      '.stylelintignore',
      '.stylelintcache'
    ]
  },
  { name: 'css', fileExtensions: ['css'], languageIds: ['css'] },
  { name: 'css_map', fileExtensions: ['css.map'] },
  { name: 'language', fileExtensions: ['pot', 'po', 'mo', 'lang'] },
  {
    name: 'license',
    fileExtensions: ['cer', 'cert', 'crt'],
    fileNames: [
      'copying',
      'copying.md',
      'copying.rst',
      'copying.txt',
      'copyright',
      'copyright.md',
      'copyright.rst',
      'copyright.txt',
      'license',
      'license-agpl',
      'license-apache',
      'license-bsd',
      'license-mit',
      'license-gpl',
      'license-lgpl',
      'license.md',
      'license.rst',
      'license.txt',
      'licence',
      'licence-agpl',
      'licence-apache',
      'licence-bsd',
      'licence-mit',
      'licence-gpl',
      'licence-lgpl',
      'licence.md',
      'licence.rst',
      'licence.txt'
    ]
  },
  {
    name: 'tsconfig',
    fileNames: [
      'tsconfig.json',
      'tsconfig.app.json',
      'tsconfig.editor.json',
      'tsconfig.spec.json',
      'tsconfig.base.json',
      'tsconfig.build.json',
      'tsconfig.eslint.json',
      'tsconfig.lib.json',
      'tsconfig.lib.prod.json',
      'tsconfig.node.json',
      'tsconfig.test.json',
      'tsconfig.e2e.json',
      'tsconfig.web.json',
      'tsconfig.webworker.json',
      'tsconfig.worker.json',
      'tsconfig.config.json',
      'tsconfig.vitest.json',
      'tsconfig.cjs.json',
      'tsconfig.esm.json',
      'tsconfig.mjs.json',
      'tsconfig.doc.json',
      'tsconfig.paths.json',
      'tsconfig.tsbuildinfo'
    ],
    fileExtensions: ['tsconfig.json']
  },
  {
    name: 'babel',
    fileNames: [
      '.babelrc',
      '.babelrc.cjs',
      '.babelrc.js',
      '.babelrc.mjs',
      '.babelrc.json',
      'babel.config.cjs',
      'babel.config.js',
      'babel.config.mjs',
      'babel.config.json',
      'babel-transform.js',
      '.babel-plugin-macrosrc',
      '.babel-plugin-macrosrc.json',
      '.babel-plugin-macrosrc.yaml',
      '.babel-plugin-macrosrc.yml',
      '.babel-plugin-macrosrc.js',
      'babel-plugin-macros.config.js'
    ]
  },
  {
    name: 'browserslist',
    fileNames: ['browserslist', '.browserslistrc']
  },
  {
    name: 'nest',
    fileNames: [
      'nest-cli.json',
      '.nest-cli.json',
      'nestconfig.json',
      '.nestconfig.json'
    ]
  },
  { name: 'npm', fileNames: ['.npmignore', '.npmrc'] },
  {
    name: 'changelog',
    fileNames: [
      'changelog',
      'changelog.md',
      'changelog.rst',
      'changelog.txt',
      'changes',
      'changes.md',
      'changes.rst',
      'changes.txt'
    ]
  },
  {
    name: 'cpp',
    fileExtensions: ['cc', 'cpp', 'cxx', 'c++', 'cp', 'mii', 'ii'],
    languageIds: ['cpp']
  },
  { name: 'csharp', fileExtensions: ['cs', 'csx'],  languageIds: ['csharp'] },
  { name: 'javascript', fileExtensions: ['esx', 'mjs'], languageIds: ['javascript'] },
  {
    name: 'javascript_map',
    fileExtensions: ['js.map', 'mjs.map', 'cjs.map']
  },
  { name: 'go', fileExtensions: ['go'], languageIds: ['go'] },
  {
    name: 'figma',
    fileExtensions: ['fig']
  },
  { name: 'circleci', fileNames: ['circle.yml'] },
  { name: 'applescript', fileExtensions: ['applescript', 'ipa'], languageIds: ['applescript'] },
  {
    name: 'jinja',
    fileExtensions: ['jinja', 'jinja2', 'j2', 'jinja-html'],
    languageIds: ['jinja']
  },
  {
    name: 'vercel',
    fileNames: ['vercel.json', '.vercelignore', 'now.json', '.nowignore']
  },
  {
    name: 'remix',
    fileNames: ['remix.config.js', 'remix.config.ts']
  },
  {
    name: 'deno',
    fileNames: ['deno.json', 'deno.jsonc', 'deno.lock']
  },
  {
    name: 'next',
    fileNames: [
      'next.config.js',
      'next.config.mjs',
      'next.config.ts',
      'next.config.mts'
    ]
  },
  { name: 'stylus', fileExtensions: ['styl'], languageIds: ['stylus'] },
  {
    name: 'firebase',
    fileNames: [
      'firebase.json',
      '.firebaserc',
      'firestore.rules',
      'firestore.indexes.json'
    ]
  },
  {
    name: 'tauri',
    fileNames: [
      'tauri.conf.json',
      'tauri.config.json',
      'tauri.linux.conf.json',
      'tauri.windows.conf.json',
      'tauri.macos.conf.json'
    ],
    fileExtensions: ['tauri']
  },
  { name: 'favicon', fileNames: ['favicon.ico'] },
  {
    name: 'database',
    fileExtensions: [
      'pdb',
      'sql',
      'pks',
      'pkb',
      'accdb',
      'mdb',
      'sqlite',
      'sqlite3',
      'pgsql',
      'postgres',
      'psql',
      'db',
      'db3'
    ],
    languageIds: ['sql']
  },
  {
    name: 'svgr',
    fileNames: [
      '.svgrrc',
      'svgr.config.js',
      '.svgrrc.js',
      '.svgrrc.yaml',
      '.svgrrc.yml',
      '.svgrrc.json'
    ]
  },
  { name: 'flow', fileNames: ['.flowconfig'] },
  { name: 'rome', fileNames: ['rome.json'] },
  { name: 'svg', fileExtensions: ['svg'], languageIds: ['svg'] },
  {
    name: 'json',
    fileExtensions: [
      'json',
      'jsonc',
      'tsbuildinfo',
      'json5',
      'jsonl',
      'ndjson'
    ],
    fileNames: [
      '.jscsrc',
      '.jshintrc',
      'composer.lock',
      '.jsbeautifyrc',
      '.esformatter',
      'cdp.pid',
      '.lintstagedrc'
    ],
    languageIds: ['json', 'jsonc', 'json5']
  },
  {
    name: 'test_js',
    fileExtensions: [
      'spec.js',
      'spec.cjs',
      'spec.mjs',
      'e2e-spec.js',
      'e2e-spec.cjs',
      'e2e-spec.mjs',
      'test.js',
      'test.cjs',
      'test.mjs',
      'js.snap',
      'cy.js'
    ]
  },
  { name: 'log', fileExtensions: ['log'], languageIds: ['log'] },
  {
    name: 'sublime',
    fileExtensions: ['sublime-project', 'sublime-workspace']
  },
  { name: 'python', fileExtensions: ['py'], languageIds: ['python'] },
  { name: 'ejs', fileExtensions: ['ejs'] },
  {
    name: 'tune',
    fileExtensions: ['env'],
    fileNames: [
      '.env.defaults',
      '.env.example',
      '.env.sample',
      '.env.template',
      '.env.schema',
      '.env.local',
      '.env.dev',
      '.env.development',
      '.env.alpha',
      '.env.e2e',
      '.env.qa',
      '.env.dist',
      '.env.prod',
      '.env.production',
      '.env.stage',
      '.env.staging',
      '.env.preview',
      '.env.test',
      '.env.testing',
      '.env.development.local',
      '.env.qa.local',
      '.env.production.local',
      '.env.staging.local',
      '.env.test.local',
      '.env.uat'
    ]
  },
  {
    name: 'zip',
    fileExtensions: [
      'zip',
      'tar',
      'gz',
      'xz',
      'lzma',
      'lz4',
      'br',
      'bz2',
      'bzip2',
      'gzip',
      'brotli',
      '7z',
      'rar',
      'tz',
      'txz',
      'tgz'
    ]
  },
  {
    name: 'lock',
    fileExtensions: ['lock'],
    fileNames: ['security.md', 'security.txt', 'security' ],
    languageIds: ['ssh_config']
  },
  {
    name: 'contributing',
    fileNames: [
      'contributing.md',
      'contributing.rst',
      'contributing.txt',
      'contributing'
    ]
  },
  {
    name: 'renovate',
    fileNames: [
      '.renovaterc',
      '.renovaterc.json',
      'renovate-config.json',
      'renovate.json',
      'renovate.json5'
    ]
  },
  { name: 'zig', fileExtensions: ['zig'] },
  {
    name: 'conduct',
    fileNames: [
      'code_of_conduct.md',
      'code_of_conduct.txt',
      'code_of_conduct'
    ]
  },
  {
    name: 'cpp',
    fileExtensions: ['cc', 'cpp', 'cxx', 'c++', 'cp', 'mii', 'ii'],
    languageIds: ['cpp']
  },
  {
    name: 'vscode',
    fileExtensions: [
      'vscodeignore',
      'vsixmanifest',
      'vsix',
      'code-workplace',
      'code-workspace',
      'code-profile',
      'code-snippets'
    ]
  },
  {
    name: 'yarn',
    fileNames: [
      '.yarnrc',
      'yarn.lock',
      '.yarnclean',
      '.yarn-integrity',
      'yarn-error.log',
      '.yarnrc.yml',
      '.yarnrc.yaml'
    ]
  },
  { name: 'quasar', fileNames: ['quasar.conf.js', 'quasar.config.js'] },
  { name: 'php', languageIds: ['php'] },
  { name: 'ionic', fileNames: ['ionic.config.json', '.io-config.json'] },
  { name: 'lua', fileExtensions: ['lua'], fileNames: ['.luacheckrc'], languageIds: ['lua'] },
  { name: 'c', fileExtensions: ['c', 'i', 'mi'], languageIds: ['c'] },
  { name: 'less', fileExtensions: ['less'], languageIds: ['less'] },
  { name: 'v', fileExtensions: ['v'], fileNames: ['vpkg.json', 'v.mod'], languageIds: ['v'] },
  { name: 'javaclass', fileExtensions: ['class'] },
  {
    name: 'markdown',
    fileExtensions: ['md', 'markdown', 'rst'],
    languageIds: ['markdown']
  },
  {
    name: 'typescript_def',
    fileExtensions: ['d.ts', 'd.cts', 'd.mts']
  },
  { name: 'react_ts', fileExtensions: ['tsx'], languageIds: ['typescriptreact'] },
  {
    name: 'svgo',
    fileNames: ['svgo.config.js', 'svgo.config.cjs', 'svgo.config.mjs']
  },
  {
    name: 'nuget',
    fileNames: ['nuget.config', '.nuspec', 'nuget.exe'],
    fileExtensions: ['nupkg']
  },
  { name: 'stencil', fileNames: ['stencil.config.js', 'stencil.config.ts'] },
  {
    name: 'test_ts',
    fileExtensions: [
      'spec.ts',
      'spec.cts',
      'spec.mts',
      'cy.ts',
      'e2e-spec.ts',
      'e2e-spec.cts',
      'e2e-spec.mts',
      'test.ts',
      'test.cts',
      'test.mts',
      'ts.snap',
      'spec-d.ts',
      'test-d.ts'
    ]
  },
  {
    name: 'docker',
    fileExtensions: [
      'dockerignore',
      'dockerfile',
      'docker-compose.yml',
      'docker-compose.yaml',
      'compose.yaml',
      'compose.yml'
    ],
    fileNames: [
      'dockerfile',
      'dockerfile.prod',
      'dockerfile.production',
      'dockerfile.alpha',
      'dockerfile.beta',
      'dockerfile.stage',
      'dockerfile.staging',
      'dockerfile.dev',
      'dockerfile.development',
      'dockerfile.local',
      'dockerfile.test',
      'dockerfile.testing',
      'dockerfile.ci',
      'dockerfile.web',
      'dockerfile.worker',
      'docker-compose.yml',
      'docker-compose.override.yml',
      'docker-compose.prod.yml',
      'docker-compose.production.yml',
      'docker-compose.alpha.yml',
      'docker-compose.beta.yml',
      'docker-compose.stage.yml',
      'docker-compose.staging.yml',
      'docker-compose.dev.yml',
      'docker-compose.development.yml',
      'docker-compose.local.yml',
      'docker-compose.test.yml',
      'docker-compose.testing.yml',
      'docker-compose.ci.yml',
      'docker-compose.web.yml',
      'docker-compose.worker.yml',
      'docker-compose.yaml',
      'docker-compose.override.yaml',
      'docker-compose.prod.yaml',
      'docker-compose.production.yaml',
      'docker-compose.alpha.yaml',
      'docker-compose.beta.yaml',
      'docker-compose.stage.yaml',
      'docker-compose.staging.yaml',
      'docker-compose.dev.yaml',
      'docker-compose.development.yaml',
      'docker-compose.local.yaml',
      'docker-compose.test.yaml',
      'docker-compose.testing.yaml',
      'docker-compose.ci.yaml',
      'docker-compose.web.yaml',
      'docker-compose.worker.yaml',
      'compose.yaml',
      'compose.override.yaml',
      'compose.prod.yaml',
      'compose.production.yaml',
      'compose.alpha.yaml',
      'compose.beta.yaml',
      'compose.stage.yaml',
      'compose.staging.yaml',
      'compose.dev.yaml',
      'compose.development.yaml',
      'compose.local.yaml',
      'compose.test.yaml',
      'compose.testing.yaml',
      'compose.ci.yaml',
      'compose.web.yaml',
      'compose.worker.yaml',
      'compose.yml',
      'compose.override.yml',
      'compose.prod.yml',
      'compose.production.yml',
      'compose.alpha.yml',
      'compose.beta.yml',
      'compose.stage.yml',
      'compose.staging.yml',
      'compose.dev.yml',
      'compose.development.yml',
      'compose.local.yml',
      'compose.test.yml',
      'compose.testing.yml',
      'compose.ci.yml',
      'compose.web.yml',
      'compose.worker.yml'
    ],
    languageIds: ['dockerfile']
  },
  {
    name: 'settings',
    fileExtensions: [
      'ini',
      'dlc',
      'dll',
      'config',
      'conf',
      'properties',
      'prop',
      'settings',
      'option',
      'props',
      'toml',
      'prefs',
      'sln.dotsettings',
      'sln.dotsettings.user',
      'cfg'
    ],
    fileNames: [
      '.jshintignore',
      '.buildignore',
      '.mrconfig',
      '.yardopts',
      'manifest.mf',
      '.clang-format',
      '.clang-tidy'
    ],
    languageIds: ['makefile', 'toml', 'ini', 'properties']
  },
  { name: 'email', fileExtensions: ['ics'], fileNames: ['.mailmap'] },
  {
    name: 'readme',
    fileNames: ['readme.md', 'readme.rst', 'readme.txt', 'readme']
  },
  { name: 'dependabot', fileNames: ['dependabot.yml', 'dependabot.yaml'] },
  { name: 'url', fileExtensions: ['url'] },
  { name: 'xaml', fileExtensions: ['xaml'] },
  { name: 'objective_cpp', fileExtensions: ['mm'], languageIds: ['objective-cpp'] },
  { name: 'rust', fileExtensions: ['rs', 'ron'], languageIds: ['rust'] },
  {
    name: 'video',
    fileExtensions: [
      'webm',
      'mkv',
      'flv',
      'vob',
      'ogv',
      'ogg',
      'gifv',
      'avi',
      'mov',
      'qt',
      'wmv',
      'yuv',
      'rm',
      'rmvb',
      'mp4',
      'm4v',
      'mpg',
      'mp2',
      'mpeg',
      'mpe',
      'mpv',
      'm2v'
    ]
  },
  {
    name: 'jest',
    fileNames: [
      'jest.config.js',
      'jest.config.cjs',
      'jest.config.mjs',
      'jest.config.ts',
      'jest.config.cts',
      'jest.config.mts',
      'jest.config.json',
      'jest.e2e.config.js',
      'jest.e2e.config.cjs',
      'jest.e2e.config.mjs',
      'jest.e2e.config.ts',
      'jest.e2e.config.cts',
      'jest.e2e.config.mts',
      'jest.e2e.config.json',
      'jest.e2e.json',
      'jest-unit.config.js',
      'jest-e2e.config.js',
      'jest-e2e.config.cjs',
      'jest-e2e.config.mjs',
      'jest-e2e.config.ts',
      'jest-e2e.config.cts',
      'jest-e2e.config.mts',
      'jest-e2e.config.json',
      'jest-e2e.json',
      'jest-github-actions-reporter.js',
      'jest.setup.js',
      'jest.setup.ts',
      'jest.json',
      '.jestrc',
      '.jestrc.js',
      '.jestrc.json',
      'jest.teardown.js'
    ]
  },
  {
    name: 'lighthouse',
    fileNames: [
      '.lighthouserc.js',
      'lighthouserc.js',
      '.lighthouserc.json',
      'lighthouserc.json',
      '.lighthouserc.yml',
      'lighthouserc.yml',
      '.lighthouserc.yaml',
      'lighthouserc.yaml'
    ]
  },
  { name: 'swift', fileExtensions: ['swift'], languageIds: ['swift'] },
  {
    name: 'assembly',
    fileExtensions: [
      'asm',
      'a51',
      'inc',
      'nasm',
      's',
      'ms',
      'agc',
      'ags',
      'aea',
      'argus',
      'mitigus',
      'binsource'
    ]
  },
  {
    name: 'svelte',
    fileExtensions: ['svelte'],
    fileNames: ['svelte.config.js', 'svelte.config.cjs'],
    languageIds: ['svelte']
  },
  { name: 'objective_c', fileExtensions: ['m'], languageIds: ['objective-c'] },
  { name: 'html', fileExtensions: ['htm', 'xhtml', 'html_vm', 'asp'], languageIds: ['html'] },
  {
    name: 'bash',
    fileExtensions: [
      'ksh',
      'csh',
      'tcsh',
      'zsh',
      'bat',
      'cmd',
      'awk',
      'fish',
      'exp',
      'nu',
      'bash',
      'sh'
    ],
    fileNames: ['commit-msg', 'pre-commit', 'pre-push', 'post-merge'],
    languageIds: ['bat', 'awk', 'shellscript']
  },
  {
    name: 'php_cs_fixer',
    fileNames: [
      '.php_cs',
      '.php_cs.dist',
      '.php_cs.php',
      '.php_cs.dist.php',
      '.php-cs-fixer.php',
      '.php-cs-fixer.dist.php'
    ]
  },
  {
    name: 'audio',
    fileExtensions: ['mp3', 'flac', 'm4a', 'wma', 'aiff', 'wav']
  },
  { name: 'scala', fileExtensions: ['scala', 'sc'], languageIds: ['scala'] },
  {
    name: 'yaml',
    fileExtensions: [
      'yml',
      'yaml',
      'yml.dist',
      'yaml.dist',
      'YAML-tmLanguage'
    ],
    languageIds: ['yaml']
  },
  {
    name: 'font',
    fileExtensions: [
      'woff',
      'woff2',
      'ttf',
      'eot',
      'suit',
      'otf',
      'bmap',
      'fnt',
      'odttf',
      'ttc',
      'font',
      'fonts',
      'sui',
      'ntf',
      'mrf'
    ]
  },
  {
    name: 'git',
    fileExtensions: ['patch'],
    fileNames: [
      '.git',
      '.gitignore',
      '.gitignore-global',
      '.gitignore_global',
      '.gitattributes',
      '.gitattributes-global',
      '.gitattributes_global',
      '.gitconfig',
      '.gitmodules',
      '.gitkeep',
      '.gitinclude',
      '.git-blame-ignore',
      '.git-blame-ignore-revs',
      '.git-for-windows-updater',
      'git-history'
    ],
    languageIds: ['git', 'git-commit', 'git-rebase', 'ignore']
  },
  { name: 'java', fileExtensions: ['java', 'jsp'], languageIds: ['java'] },
  {
    name: 'angular',
    fileExtensions: ['module.ts', 'module.js', 'ng-template'],
    fileNames: [
      'angular-cli.json',
      '.angular-cli.json',
      'angular.json',
      'ng-package.json'
    ],
    languageIds: ['ng-template']
  },
  { name: 'pdf', fileExtensions: ['pdf'], languageIds: ['pdf'] },
  {
    name: 'gulp',
    fileNames: [
      'gulpfile.js',
      'gulpfile.mjs',
      'gulpfile.ts',
      'gulpfile.cts',
      'gulpfile.mts',
      'gulpfile.babel.js'
    ]
  },
  {
    name: 'postcss',
    fileExtensions: ['pcss', 'sss'],
    fileNames: [
      'postcss.config.js',
      'postcss.config.cjs',
      'postcss.config.ts',
      'postcss.config.cts',
      '.postcssrc.js',
      '.postcssrc.cjs',
      '.postcssrc.ts',
      '.postcssrc.cts',
      '.postcssrc',
      '.postcssrc.json',
      '.postcssrc.yaml',
      '.postcssrc.yml'
    ],
    languageIds: ['postcss']
  },
  {
    name: 'rollup',
    fileNames: [
      'rollup.config.js',
      'rollup.config.mjs',
      'rollup.config.ts',
      'rollup-config.js',
      'rollup-config.mjs',
      'rollup-config.ts',
      'rollup.config.common.js',
      'rollup.config.common.mjs',
      'rollup.config.common.ts',
      'rollup.config.base.js',
      'rollup.config.base.mjs',
      'rollup.config.base.ts',
      'rollup.config.prod.js',
      'rollup.config.prod.mjs',
      'rollup.config.prod.ts',
      'rollup.config.dev.js',
      'rollup.config.dev.mjs',
      'rollup.config.dev.ts',
      'rollup.config.prod.vendor.js',
      'rollup.config.prod.vendor.mjs',
      'rollup.config.prod.vendor.ts'
    ]
  },
  { name: 'robots', fileNames: ['robots.txt'] },
  {
    name: 'laravel',
    fileExtensions: ['blade.php', 'inky.php'],
    fileNames: ['artisan']
  },
  { name: 'jar', fileExtensions: ['jar'] },
  { name: 'ruby', fileExtensions: ['rb', 'erb'], languageIds: ['ruby'] },
  { name: 'vue', fileExtensions: ['vue'], languageIds: ['vue', 'vue-postcss', 'vue-html'] },
  {
    name: 'android',
    fileNames: ['androidmanifest.xml'],
    fileExtensions: ['apk', 'smali', 'dex']
  },
  {
    name: 'minecraft',
    fileExtensions: [
      'mcfunction',
      'mcmeta',
      'mcr',
      'mca',
      'mcgame',
      'mclevel',
      'mcworld',
      'mine',
      'mus',
      'mcstructure',
      'mcpack',
      'mcaddon',
      'mctemplate',
      'mcproject'
    ],
    fileNames: ['.mcattributes', '.mcdefinitions', '.mcignore'],
    languageIds: ['mcfunction']
  },
  {
    name: 'nuxt',
    fileNames: ['nuxt.config.js', 'nuxt.config.ts', '.nuxtignore']
  },
  {
    name: 'playwright',
    fileNames: [
      'playwright.config.js',
      'playwright.config.mjs',
      'playwright.config.ts',
      'playwright-ct.config.js',
      'playwright-ct.config.mjs',
      'playwright-ct.config.ts'
    ]
  },
  {
    name: 'nodejs',
    fileNames: [
      'package.json',
      'package-lock.json',
      '.nvmrc',
      '.esmrc',
      '.node-version'
    ]
  },
  {
    name: 'supabase',
    fileNames: ['supabase.js', 'supabase.py']
  },
  {
    name: 'vim',
    fileExtensions: ['vimrc', 'gvimrc', 'exrc', 'vim', 'viminfo'],
    languageIds: ['viml']
  },
  {
    name: 'vitest',
    fileNames: [
      'vitest.config.ts',
      'vitest.config.mts',
      'vitest.config.cts',
      'vitest.config.js',
      'vitest.config.mjs',
      'vitest.config.cjs'
    ]
  },
  {
    name: 'nginx',
    fileNames: ['nginx.conf'],
    fileExtensions: ['nginx', 'nginxconfig']
  },
  { name: 'lib', fileExtensions: ['lib', 'bib'], languageIds: ['bibtex', 'bibtex-style'] },
  {
    name: 'routing',
    fileExtensions: [
      'routing.ts',
      'routing.tsx',
      'routing.js',
      'routing.jsx',
      'routes.ts',
      'routes.tsx',
      'routes.js',
      'routes.jsx'
    ],
    fileNames: [
      'router.js',
      'router.jsx',
      'router.ts',
      'router.tsx',
      'routes.js',
      'routes.jsx',
      'routes.ts',
      'routes.tsx'
    ]
  },
  { name: 'bower', fileNames: ['.bowerrc', 'bower.json'] },
  { name: 'travis', fileNames: ['.travis.yml'] },
  {
    name: 'jenkins',
    fileNames: ['jenkinsfile'],
    fileExtensions: ['jenkinsfile', 'jenkins']
  },
  { name: 'proto', fileExtensions: ['proto'], languageIds: ['proto'] },
  {
    name: 'prettier',
    fileNames: [
      '.prettierrc',
      'prettier.config.js',
      'prettier.config.cjs',
      '.prettierrc.js',
      '.prettierrc.cjs',
      '.prettierrc.json',
      '.prettierrc.json5',
      '.prettierrc.yaml',
      '.prettierrc.yml',
      '.prettierignore',
      '.prettierrc.toml'
    ]
  },
  { name: 'dart', fileExtensions: ['dart'], fileNames: ['.pubignore'], languageIds: ['dart'] },
  { name: 'dart_generated', fileExtensions: ['freezed.dart', 'g.dart'] },
  {
    name: 'webpack',
    fileNames: [
      'webpack.js',
      'webpack.cjs',
      'webpack.mjs',
      'webpack.ts',
      'webpack.cts',
      'webpack.mts',
      'webpack.base.js',
      'webpack.base.cjs',
      'webpack.base.mjs',
      'webpack.base.ts',
      'webpack.base.cts',
      'webpack.base.mts',
      'webpack.config.js',
      'webpack.config.cjs',
      'webpack.config.mjs',
      'webpack.config.ts',
      'webpack.config.cts',
      'webpack.config.mts',
      'webpack.common.js',
      'webpack.common.cjs',
      'webpack.common.mjs',
      'webpack.common.ts',
      'webpack.common.cts',
      'webpack.common.mts',
      'webpack.config.common.js',
      'webpack.config.common.cjs',
      'webpack.config.common.mjs',
      'webpack.config.common.ts',
      'webpack.config.common.cts',
      'webpack.config.common.mts',
      'webpack.config.common.babel.js',
      'webpack.config.common.babel.ts',
      'webpack.dev.js',
      'webpack.dev.cjs',
      'webpack.dev.mjs',
      'webpack.dev.ts',
      'webpack.dev.cts',
      'webpack.dev.mts',
      'webpack.development.js',
      'webpack.development.cjs',
      'webpack.development.mjs',
      'webpack.development.ts',
      'webpack.development.cts',
      'webpack.development.mts',
      'webpack.config.dev.js',
      'webpack.config.dev.cjs',
      'webpack.config.dev.mjs',
      'webpack.config.dev.ts',
      'webpack.config.dev.cts',
      'webpack.config.dev.mts',
      'webpack.config.dev.babel.js',
      'webpack.config.dev.babel.ts',
      'webpack.mix.js',
      'webpack.mix.cjs',
      'webpack.mix.mjs',
      'webpack.mix.ts',
      'webpack.mix.cts',
      'webpack.mix.mts',
      'webpack.prod.js',
      'webpack.prod.cjs',
      'webpack.prod.mjs',
      'webpack.prod.ts',
      'webpack.prod.cts',
      'webpack.prod.mts',
      'webpack.prod.config.js',
      'webpack.prod.config.cjs',
      'webpack.prod.config.mjs',
      'webpack.prod.config.ts',
      'webpack.prod.config.cts',
      'webpack.prod.config.mts',
      'webpack.production.js',
      'webpack.production.cjs',
      'webpack.production.mjs',
      'webpack.production.ts',
      'webpack.production.cts',
      'webpack.production.mts',
      'webpack.server.js',
      'webpack.server.cjs',
      'webpack.server.mjs',
      'webpack.server.ts',
      'webpack.server.cts',
      'webpack.server.mts',
      'webpack.client.js',
      'webpack.client.cjs',
      'webpack.client.mjs',
      'webpack.client.ts',
      'webpack.client.cts',
      'webpack.client.mts',
      'webpack.config.server.js',
      'webpack.config.server.cjs',
      'webpack.config.server.mjs',
      'webpack.config.server.ts',
      'webpack.config.server.cts',
      'webpack.config.server.mts',
      'webpack.config.client.js',
      'webpack.config.client.cjs',
      'webpack.config.client.mjs',
      'webpack.config.client.ts',
      'webpack.config.client.cts',
      'webpack.config.client.mts',
      'webpack.config.production.babel.js',
      'webpack.config.production.babel.ts',
      'webpack.config.prod.babel.js',
      'webpack.config.prod.babel.cjs',
      'webpack.config.prod.babel.mjs',
      'webpack.config.prod.babel.ts',
      'webpack.config.prod.babel.cts',
      'webpack.config.prod.babel.mts',
      'webpack.config.prod.js',
      'webpack.config.prod.cjs',
      'webpack.config.prod.mjs',
      'webpack.config.prod.ts',
      'webpack.config.prod.cts',
      'webpack.config.prod.mts',
      'webpack.config.production.js',
      'webpack.config.production.cjs',
      'webpack.config.production.mjs',
      'webpack.config.production.ts',
      'webpack.config.production.cts',
      'webpack.config.production.mts',
      'webpack.config.staging.js',
      'webpack.config.staging.cjs',
      'webpack.config.staging.mjs',
      'webpack.config.staging.ts',
      'webpack.config.staging.cts',
      'webpack.config.staging.mts',
      'webpack.config.babel.js',
      'webpack.config.babel.ts',
      'webpack.config.base.babel.js',
      'webpack.config.base.babel.ts',
      'webpack.config.base.js',
      'webpack.config.base.cjs',
      'webpack.config.base.mjs',
      'webpack.config.base.ts',
      'webpack.config.base.cts',
      'webpack.config.base.mts',
      'webpack.config.staging.babel.js',
      'webpack.config.staging.babel.ts',
      'webpack.config.coffee',
      'webpack.config.test.js',
      'webpack.config.test.cjs',
      'webpack.config.test.mjs',
      'webpack.config.test.ts',
      'webpack.config.test.cts',
      'webpack.config.test.mts',
      'webpack.config.vendor.js',
      'webpack.config.vendor.cjs',
      'webpack.config.vendor.mjs',
      'webpack.config.vendor.ts',
      'webpack.config.vendor.cts',
      'webpack.config.vendor.mts',
      'webpack.config.vendor.production.js',
      'webpack.config.vendor.production.cjs',
      'webpack.config.vendor.production.mjs',
      'webpack.config.vendor.production.ts',
      'webpack.config.vendor.production.cts',
      'webpack.config.vendor.production.mts',
      'webpack.test.js',
      'webpack.test.cjs',
      'webpack.test.mjs',
      'webpack.test.ts',
      'webpack.test.cts',
      'webpack.test.mts',
      'webpack.dist.js',
      'webpack.dist.cjs',
      'webpack.dist.mjs',
      'webpack.dist.ts',
      'webpack.dist.cts',
      'webpack.dist.mts',
      'webpackfile.js',
      'webpackfile.cjs',
      'webpackfile.mjs',
      'webpackfile.ts',
      'webpackfile.cts',
      'webpackfile.mts'
    ]
  },
  { name: 'gitlab', fileExtensions: ['gitlab-ci.yml'] },
  { name: 'kotlin', fileExtensions: ['kt', 'kts'] },
  {
    name: 'pug',
    fileExtensions: ['jade', 'pug'],
    fileNames: ['.pug-lintrc', '.pug-lintrc.js', '.pug-lintrc.json'],
    languageIds: ['pug']
  },
  { name: 'editorconfig', fileNames: ['.editorconfig'], languageIds: ['editorconfig'] },
  { name: 'nix', fileExtensions: ['nix'], languageIds: ['nix'] },
  { name: 'aurelia', fileNames: ['aurelia.json'] },
  { name: 'sequelize', fileNames: ['.sequelizerc'] },
  { name: 'bun', fileNames: ['bun.lockb'] },
  {
    name: 'eslint',
    fileNames: [
      '.eslintrc.js',
      '.eslintrc.cjs',
      '.eslintrc.yaml',
      '.eslintrc.yml',
      '.eslintrc.json',
      '.eslintrc-md.js',
      '.eslintrc-jsdoc.js',
      '.eslintrc',
      '.eslintignore',
      '.eslintcache',
      'eslint.config.js',
      'eslint.config.mjs'
    ]
  },
  {
    name: 'vite',
    fileNames: [
      'vite.config.js',
      'vite.config.mjs',
      'vite.config.cjs',
      'vite.config.ts',
      'vite.config.cts',
      'vite.config.mts'
    ]
  },
  { name: 'sketch', fileExtensions: ['sketch'] },
  {
    name: 'turborepo',
    fileNames: ['turbo.json']
  },
  {
    name: 'powershell',
    fileExtensions: ['ps1', 'psm1', 'psd1', 'ps1xml', 'psc1', 'pssc'],
    languageIds: ['powershell']
  },
  { name: 'tex', fileExtensions: ['tex', 'sty', 'dtx', 'ltx'], languageIds: ['tex', 'doctex', 'latex', 'latex-expl3'] },
  {
    name: 'tailwindcss',
    fileNames: [
      'tailwind.js',
      'tailwind.ts',
      'tailwind.config.js',
      'tailwind.config.cjs',
      'tailwind.config.ts',
      'tailwind.config.cts'
    ]
  },
  {
    name: 'gamemaker',
    fileExtensions: ['gml', 'yy', 'yyp', 'yyz']
  },
  {
    name: 'cypress',
    fileNames: [
      'cypress.json',
      'cypress.env.json',
      'cypress.config.ts',
      'cypress.config.js',
      'cypress.config.cjs',
      'cypress.config.mjs'
    ]
  },
  { name: 'prisma', fileNames: ['prisma.yml'], fileExtensions: ['prisma'] },
  {
    name: 'image',
    fileExtensions: [
      'png',
      'jpeg',
      'jpg',
      'gif',
      'ico',
      'tif',
      'tiff',
      'psd',
      'psb',
      'ami',
      'apx',
      'avif',
      'bmp',
      'bpg',
      'brk',
      'cur',
      'dds',
      'dng',
      'exr',
      'fpx',
      'gbr',
      'img',
      'jbig2',
      'jb2',
      'jng',
      'jxr',
      'pgf',
      'pic',
      'raw',
      'webp',
      'eps',
      'afphoto',
      'ase',
      'aseprite',
      'clip',
      'cpt',
      'heif',
      'heic',
      'kra',
      'mdp',
      'ora',
      'pdn',
      'reb',
      'sai',
      'tga',
      'xcf',
      'jfif',
      'ppm',
      'pbm',
      'pgm',
      'pnm',
      'icns'
    ]
  },
  {
    name: 'gradle',
    fileExtensions: ['gradle'],
    fileNames: ['gradle.properties', 'gradlew', 'gradle-wrapper.properties']
  },
  {
    name: 'commitlint',
    fileNames: [
      '.commitlintrc',
      '.commitlintrc.js',
      '.commitlintrc.cjs',
      '.commitlintrc.ts',
      '.commitlintrc.cts',
      '.commitlintrc.json',
      '.commitlintrc.yaml',
      '.commitlintrc.yml',
      '.commitlint.yaml',
      '.commitlint.yml',
      'commitlint.config.js',
      'commitlint.config.cjs',
      'commitlint.config.ts',
      'commitlint.config.cts'
    ]
  },
  {
    name: 'netlify',
    fileNames: [
      'netlify.json',
      'netlify.yml',
      'netlify.yaml',
      'netlify.toml'
    ]
  },
  {
    name: 'terraform',
    fileExtensions: ['tf', 'tf.json', 'tfvars', 'tfstate'],
    languageIds: ['terraform']
  },
  {
    name: 'visualstudio',
    fileExtensions: [
      'csproj',
      'ruleset',
      'sln',
      'suo',
      'vb',
      'vbs',
      'vcxitems',
      'vcxitems.filters',
      'vcxproj',
      'vcxproj.filters'
    ],
    languageIds: ['testOutput', 'vb']
  },
  { name: 'webassembly', fileExtensions: ['wat', 'wasm'] },
  { name: 'apollo', fileNames: ['apollo.config.js', 'apollo.config.ts'] },
  { name: 'heroku', fileNames: ['procfile', 'procfile.windows'] },
  { name: 'haskell', fileExtensions: ['hs'], languageIds: ['haskell'] },
  {
    name: 'phpunit',
    fileNames: [
      '.phpunit.result.cache',
      '.phpunit-watcher.yml',
      'phpunit.xml',
      'phpunit.xml.dist',
      'phpunit-watcher.yml',
      'phpunit-watcher.yml.dist'
    ]
  },
  { name: 'elixir', fileExtensions: ['ex', 'exs', 'eex', 'leex', 'heex'], languageIds: ['elixir'] },
  { name: 'julia', fileExtensions: ['jl'], languageIds: ['julia'] },
  {
    name: 'gatsby',
    fileNames: [
      'gatsby-config.js',
      'gatsby-config.mjs',
      'gatsby-config.ts',
      'gatsby-node.js',
      'gatsby-node.mjs',
      'gatsby-node.ts',
      'gatsby-browser.js',
      'gatsby-browser.tsx',
      'gatsby-ssr.js',
      'gatsby-ssr.tsx'
    ]
  },
  {
    name: 'go_mod',
    fileNames: ['go.mod', 'go.sum', 'go.work', 'go.work.sum']
  },
  { name: 'sass', fileExtensions: ['scss', 'sass'], languageIds: ['scss', 'sass'] },
  {
    name: 'graphql',
    fileExtensions: ['graphql', 'gql'],
    fileNames: [
      '.graphqlconfig',
      '.graphqlrc',
      '.graphqlrc.json',
      '.graphqlrc.js',
      '.graphqlrc.cjs',
      '.graphqlrc.ts',
      '.graphqlrc.toml',
      '.graphqlrc.yaml',
      '.graphqlrc.yml',
      'graphql.config.json',
      'graphql.config.js',
      'graphql.config.cjs',
      'graphql.config.ts',
      'graphql.config.toml',
      'graphql.config.yaml',
      'graphql.config.yml'
    ],
    languageIds: ['graphql']
  },
  {
    name: 'storybook',
    fileExtensions: [
      'stories.js',
      'stories.jsx',
      'stories.mdx',
      'story.js',
      'story.jsx',
      'stories.ts',
      'stories.tsx',
      'story.ts',
      'story.tsx',
      'stories.svelte',
      'story.mdx'
    ]
  },
  {
    name: 'jsconfig',
    fileNames: ['jsconfig.json'],
    fileExtensions: ['jsconfig.json']
  },
  {
    name: 'vue_config',
    fileNames: [
      'vue.config.js',
      'vue.config.ts',
      'vetur.config.js',
      'vetur.config.ts',
      'volar.config.js'
    ]
  },
  {
    name: 'python_misc',
    fileExtensions: ['pyc', 'whl'],
    fileNames: [
      'requirements.txt',
      'pipfile',
      '.python-version',
      'manifest.in',
      'pylintrc',
      '.pylintrc',
      'pyproject.toml'
    ],
    languageIds: ['pip-requirements']
  },
  {
    name: 'makefile',
    fileExtensions: ['mk'],
    fileNames: ['makefile', 'gnumakefile', 'kbuild']
  },
  { name: 'exe', fileExtensions: ['exe', 'msi'] },
  {
    name: 'xml',
    fileExtensions: [
      'xml',
      'plist',
      'xsd',
      'dtd',
      'xsl',
      'xslt',
      'resx',
      'iml',
      'xquery',
      'tmLanguage',
      'manifest',
      'project',
      'xml.dist',
      'xml.dist.sample',
      'dmn',
      'jrxml'
    ],
    fileNames: ['.htaccess'],
    languageIds: ['xml', 'xquery', 'xsl']
  },
  {
    name: 'key',
    fileExtensions: ['pub', 'key', 'pem', 'asc', 'gpg', 'passwd'],
    fileNames: ['.htpasswd']
  },
  { name: 'react', fileExtensions: ['jsx'], languageIds: ['javascriptreact'] },
  {
    name: 'test_jsx',
    fileExtensions: [
      'spec.tsx',
      'test.tsx',
      'tsx.snap',
      'spec.jsx',
      'test.jsx',
      'jsx.snap',
      'cy.jsx',
      'cy.tsx',
      'spec-d.tsx',
      'test-d.tsx'
    ]
  }






];

export { iconName };