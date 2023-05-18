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
  }
];

export { iconName };