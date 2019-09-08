const { src, dest } = require('gulp');

module.exports = (dev) => {
  const destPath = dev ? './dev/css/fonts/' : './build/css/fonts/';
  return () => {
    return src('./src/scss/fonts/*')
      .pipe(dest(destPath));
  };
};
