const { src, dest, task, watch, series, parallel, gulp } = require('gulp');
const sass 		= require('gulp-sass');
const sourcemaps 	= require('gulp-sourcemaps');
const browserSync  = require( 'browser-sync' ).create();
// const plumber = require('gulp-plumber');
let clean = require('gulp-clean-css');
// const notify = require('gulp-notify');

const styleWatch   = './web/css/styles/*.scss';
const styleURL     = './web/css/dest/';

// let config = {
//     src           : './web/css/styles/*.scss',
//     dest          : '/pub/static/frontend/Magento/Stewart/fil_PH/css/dest/'
// };

let config = {
  src           : './web/css/styles/*.scss',
  dest          : './web/css/dest/'
};


// var onError = function (err) {
//       notify.onError({
//           title   : 'Gulp',
//           subtitle: 'Failure!',
//           message : 'Error: <%= error.message %>',
//           sound   : 'Beep'
//       })(err);


//       this.emit('end');
// };


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
      // .pipe(plumber({errorHandler: onError}))
      .on( 'error', console.error.bind( console ) )
      .pipe(clean({force: true}))
      .pipe( dest( styleURL ) )
      .pipe( browserSync.stream() );
       done();
}    


function watch_style(){
    watch(styleWatch, series(styles, reload));
}



task("watch", parallel(browser_sync, watch_style));
task("styles", styles);
