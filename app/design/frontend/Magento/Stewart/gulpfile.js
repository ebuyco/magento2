var gulp         = require('gulp'),
sass         = require('gulp-sass'),
plumber      = require('gulp-plumber'),
notify       = require('gulp-notify'),
browserSync = require('browser-sync').create();

var config = {
src           : './web/css/styles/*.scss',
dest          : './web/css/dest'
};

// var browserSync = require('browser-sync').create();

// Error message
var onError = function (err) {
notify.onError({
    title   : 'Gulp',
    subtitle: 'Failure!',
    message : 'Error: <%= error.message %>',
    sound   : 'Beep'
})(err);


this.emit('end');
};

// Compile CSS
gulp.task('styles', function () {
  var stream = gulp
      .src([config.src])
      .pipe(plumber({errorHandler: onError}))
      .pipe(sass().on('error', sass.logError))
    //   .pipe(browserSync.reload({
    //     stream: true
    //   }))

  return stream
      .pipe(gulp.dest('./web/css/dest'));
});

gulp.task('dev', function () {
    var stream = gulp
        .src([config.src])
        .pipe(plumber({errorHandler: onError}))
        .pipe(sass().on('error', sass.logError))
        .pipe(browserSync.reload({
          stream: true
        }))
  
    return stream
        .pipe(gulp.dest('./web/css/dest'))
    });


// Load gulp and plug-ins
// var gulp    = require('gulp'),
   
//     sass       = require('gulp-sass'),
//     browserSync =   require('browser-sync').create()
  


// Generate less to CSS.
// gulp.task('less', function() {
//     return gulp.src(['app/design/frontend/Magento/LearnMagento/web/css/theme.sass'])
//         .pipe(sass())
//         .pipe( browserSync() )
//         .pipe(gulp.dest('pub/static/frontend/Magento/LearnMagento/fil_PH/css'))
//         .pipe(gulp.dest('pub/static/frontend/Magento/LearnMagento/fil_PH/css'))
// });


// Watch Files For Changes and livereload
// gulp.task('watch', function() {
//     browserSync.listen();
//     gulp.watch('app/design/frontend/Magento/LearnMagento/web/css/**/*.sass', ['sass']);
// });


// gulp.task('default', ['sass']);