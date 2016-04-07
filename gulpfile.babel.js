var gulp = require('gulp');

gulp.task('css', function() {
  var postcss = require('gulp-postcss');
  var sourcemaps = require('gulp-sourcemaps');
  var autoprefixer = require('autoprefixer');
  var cssnano = require('cssnano');
  var atImport = require('postcss-import');

  var processors = [
    atImport,
    autoprefixer,
    cssnano
  ];

  return gulp.src('src/css/main.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/'));
});

gulp.task('default', function() {

});