var gulp = require('gulp');
var del = require('del');
// 用来引用index.html中的一段css或者js
// 必须以 <!-- build:type dest -->开始， 以 <!-- endbuild --> 结束
var useref = require('gulp-useref');
var cssmin = require('gulp-cssmin');
var gulpif = require('gulp-if');
var wiredep = require('wiredep').stream;
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var gulpSequence = require('gulp-sequence');

gulp.task('clean', function (cb) {
  del([
    './dist'
  ], cb);
});

gulp.task('copy-assets', function () {
  var stream = gulp.src('./app/assets/**/*.*')
    .pipe(gulp.dest('./dist/assets/'));
  return stream;
});

gulp.task('copy-favicon', function () {
  var stream = gulp.src('./app/favicon.ico')
    .pipe(gulp.dest('./dist/'));
  return stream;
});

gulp.task('copy-html-files', function () {
  var stream = gulp.src('./app/views/**/*.html')
    .pipe(gulp.dest('./dist/views/'));
  return stream;
});

gulp.task('bower-files', function () {
  var stream = gulp.src('./app/index.html')
    .pipe(wiredep({
      directory: './app/lib'
    }))
    .pipe(useref())
    .pipe(gulpif('*.css', cssmin())) // if .css file, minify
    .pipe(gulpif('*.js', ngAnnotate())) // ng-annotate if .js
    .pipe(gulpif('*.js', uglify())) // uglify if .js
    .pipe(gulpif('*.js', gulp.dest('./dist'))) // paste to dist
    .pipe(gulp.dest('./dist'))
  return stream;
});

// todo 加入clean 并且使得build在clean之后执行
gulp.task('build', gulpSequence(['bower-files', 'copy-html-files', 'copy-assets', 'copy-favicon']));
