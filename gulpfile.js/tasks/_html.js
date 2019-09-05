const { src, dest } = require('gulp');
const pug = require('gulp-pug');

module.exports = (dev) => {
  const destPath = dev ? './dev/' : './build/';
  return () => {
    return src('./src/view/index.pug')
      .pipe(pug())
      .pipe(dest(destPath));
  };
};
