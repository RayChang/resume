var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    inject = require('gulp-inject'),
    livereload = require('gulp-livereload'),
    wiredep = require('wiredep').stream,
    sass = require('gulp-sass'),
    _ = require('lodash'),
    wiredepConf = {
      exclude: [/\/bootstrap\.js$/, /\/bootstrap-sass\/.*\.js/, /\/bootstrap\.css/],
      directory: './public/components'
    };
gulp.task('sass', function() {
  var sassOptions = {
    outputStyle: 'expanded',
    errLogToConsole: true,
    sourceComments: true
  };
  var injectFiles = gulp.src([
    './public/css/normalize.scss',
    './public/css/scroll.scss',
    './public/css/style.scss',
    './public/css/portfolio.scss',
    './public/css/carousel.scss',
    './public/css/responsive.scss',
    './public/css/**/*.scss',
    '!./public/css/app.scss',
    '!./public/css/**/_*.scss'
  ], { read: false });

  var injectOptions = {
    transform: function(filePath) {
      filePath = filePath.replace('public/css/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false
  };

  gulp.src('./public/css/app.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(inject(injectFiles, injectOptions))
    .pipe(wiredep(_.extend({}, wiredepConf)))
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('inject-reload', ['inject'], function() {
  livereload();
});

gulp.task('inject', ['sass'], function () {
  var injectStyles = gulp.src('./public/css/**/*.css', { read: false });

  var injectScripts = gulp.src([
    './public/js/**/*.js',
    '!./public/js/template/**/*.js'
  ], { read: false });

  var injectOptions = {
    ignorePath: 'public',
    addRootSlash: true
  };

  return gulp.src('./src/views/**/*.nunjucks')
    .pipe(inject(injectStyles, injectOptions))
    .pipe(inject(injectScripts, injectOptions))
    .pipe(wiredep(_.extend({ignorePath: '../../public'}, wiredepConf)))
    .pipe(gulp.dest('./views'));
});

gulp.task('watch', ['inject'], function() {
  gulp.watch([
    './src/views/layout.nunjucks',
    './public/css/**/*.scss',
    './public/js/**/*.js',
    'bower.json'
  ], ['inject-reload']);
});

gulp.task('develop', function() {
  livereload.listen();
  nodemon({
    script: 'bin/www',
    ext: 'js nunjucks coffee',
    stdout: false
  }).on('readable', function() {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'develop',
  'watch'
]);
