const fs = require('fs').promises;
const theme = require('./theme');

const space = 2;

fs.mkdir('./themes', { recursive: true })
  .then(() => fs.writeFile('./themes/dark-theme.json', JSON.stringify(theme, null, space)))
  .catch(() => process.exit());