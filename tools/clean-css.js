const FS = require('fs');
const CleanCSS = require('clean-css');

const input = ['src/assets/css/style.css'];
const options = { level: 2 };
const output = new CleanCSS(options).minify(input);
FS.writeFile('dist/assets/css/style.min.css', output.styles, (err) => {
  if (err) throw err;
  console.log('minify is successfully');
});
