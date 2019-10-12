// var gulp 	= require('gulp');
const { src, dest, task, watch, series, parallel, gulp } = require('gulp');
var sass 		= require('gulp-sass');
// var livereload  = require('gulp-livereload');
var sourcemaps 	= require('gulp-sourcemaps');
var browserSync  = require( 'browser-sync' ).create();

var styleWatch   = './web/css/styles/*.scss';
var styleURL     = './web/css/dest';
var config = {
src           : './web/css/styles/*.scss',
dest          : './web/css/dest'
};


function browser_sync() {
	browserSync.init({
		server: {
			baseDir: ([config.dest])
		}
	});
}

function reload(done) {
	browserSync.reload();
	done();
}

function styles(done) {
 
      src( [ config.src ] )
      .pipe( sourcemaps.init() )
      .pipe( sass({
        errLogToConsole: true,
        outputStyle: 'compressed'
      }) )
        // .pipe(sass().on('error', sass.logError))
        // .pipe( sourcemaps.write() )
        // .pipe( livereload() )
      //  .pipe(gulp.dest([config.dest]))
      .on( 'error', console.error.bind( console ) )
      .pipe( dest( styleURL ) )
       .pipe( browserSync.stream() );
       done();
}    

// gulp.task(styles);


function watch_style(){
  // livereload.listen();
  // gulp.watch('app/design/frontend/Magento/Stewart/web/css/styles/style.scss');
  watch(styleWatch, series(styles, reload));
}

// function watch() {
//   livereload.listen();
//   return gulp
//       .src([config.src], { allowEmpty: true })
//       .pipe(gulp.dest([config.dest]));
//  }

// gulp.task(watch_style);

// gulp.task('default', gulp.series(styles, watch_style));
task("watch", parallel(browser_sync, watch_style));
task("styles", styles);



// const gulp 	= require('gulp');
// const sass 		= require('gulp-sass');
// const livereload  = require('gulp-livereload');
// const sourcemaps 	= require('gulp-sourcemaps');



// function styles() {
//     return gulp.src([	'app/design/frontend/Magento/Stewart/web/css/styles/style.scss',
//     'app/design/frontend/Magento/Stewart/web/css/styles/style.scss'],{ allowEmpty: true })
//         .pipe(sass())
//         .pipe( sourcemaps.write() )
//         .pipe( livereload() )
//         .pipe(gulp.dest('app/design/frontend/Magento/Stewart/web/css/dest/'));
// }    

// gulp.task(styles);


// // function watch(){
// //   livereload.listen();
// //   gulp.watch('app/design/frontend/Magento/Stewart/web/css/styles/style.scss');
// // }

// function watch() {
//   livereload.listen();
//   return gulp
//   .src([	'app/design/frontend/Magento/Stewart/web/css/styles/style.scss',
//   'app/design/frontend/Magento/Stewart/web/css/styles/style.scss'],{ allowEmpty: true })
//   .pipe(sass())
//   .pipe(gulp.dest('app/design/frontend/Magento/Stewart/web/css/dest/'))
//   .pipe( livereload() );
// }

// gulp.task(watch)

// gulp.task('default', gulp.series(styles, watch));

// var gulp 	= require('gulp');
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync').create();



// function styles() {
//     return gulp.src([	'app/design/frontend/Magento/Stewart/web/css/styles/style.scss',
//     'app/design/frontend/Magento/Stewart/web/css/styles/style.scss'],{ allowEmpty: true })
//         .pipe(sass())
//         .pipe(browserSync.stream())
//         .pipe(gulp.dest('app/design/frontend/Magento/Stewart/web/css/dest/'))
// }    

// gulp.task(styles);


// function watch(){
//   return gulp
//    .src('app/design/frontend/Magento/Stewart/web/css/styles/style.scss', { allowEmpty: true })
//    .pipe(sass())
//    .pipe(gulp.dest('app/design/frontend/Magento/Stewart/web/css/dest/'))
//    .pipe(browserSync.stream());
// }

// gulp.task(watch)



// gulp.task('default', gulp.series(styles, watch));




// var gulp         = require('gulp'),
// sass         = require('gulp-sass'),
// plumber      = require('gulp-plumber'),
// notify       = require('gulp-notify'),
// // browserSync = require('browser-sync').create();
// livereload  = require('gulp-livereload'),
// sourcemaps 	= require('gulp-sourcemaps');

// var config = {
// src           : './web/css/styles/*.scss',
// dest          : './web/css/dest'
// };

// // var browserSync = require('browser-sync').create();

// // Error message
// var onError = function (err) {
// notify.onError({
//     title   : 'Gulp',
//     subtitle: 'Failure!',
//     message : 'Error: <%= error.message %>',
//     sound   : 'Beep'
// })(err);


// this.emit('end');
// };

// // Compile CSS
// gulp.task('styles', function () {
//   var stream = gulp
//       .src([config.src])
//       .pipe(plumber({errorHandler: onError}))
//       .pipe(sass().on('error', sass.logError))
//     //   .pipe(browserSync.reload({
//     //     stream: true
//     //   }))

//   return stream
//       .pipe(gulp.dest('./web/css/dest'));
// });

// gulp.task('dev', function () {
//     var stream = gulp
//         .src([config.src])
//         .pipe( sourcemaps.write() )
//         .pipe( livereload() )
//         .pipe(plumber({errorHandler: onError}))
//         .pipe(sass().on('error', sass.logError))
//         // .pipe(browserSync.reload({
//         //   stream: true
//         // }))
       
//     return stream
//         .pipe(gulp.dest('./web/css/dest'))
//     });

// // Watch Files For Changes and livereload
// gulp.task('watch', function() {
// 	livereload.listen();
//     gulp.watch('app/design/frontend/Magento/Stewart/web/**/*.sass', ['sass']);
// });


// gulp.task('default', ['dev', 'watch']);
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