const { watch } = require('gulp');
const { reload } = require('../config/options');
const _cssDev = require('./_cssDev');
const _jsDev = require('./_jsDev');
const _imgDev = require('./_imgDev');
const _htmlDev = require('./_html')(true);

module.exports = () => {
  watch('./dev/img/**/*').on('change', reload);
  watch('./dev/js/**/*').on('change', reload);
  watch('./dev/css/**/*').on('change', reload);
  watch('./dev/*.html').on('change', reload);

  watch('./src/scss/**/*', _cssDev);
  watch('./src/js/**/*', _jsDev);
  watch('./src/img/**/*', _imgDev);
  watch('./src/view/**/*', _htmlDev);
};
