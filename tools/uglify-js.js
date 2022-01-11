const FS = require('fs');
const UglifyJS = require('uglify-js');

const input = FS.readFileSync('src/assets/js/app.js', 'utf8');
const output = UglifyJS.minify(input);
FS.writeFile('dist/assets/js/app.min.js', output.code, (err) => {
  if (err) throw err;
  console.log('minify is successfully');
});
