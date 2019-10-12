const { src, dest, task, watch, series, parallel, gulp } = require('gulp');
var sass 		= require('gulp-sass');
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
   
      .on( 'error', console.error.bind( console ) )
      .pipe( dest( styleURL ) )
       .pipe( browserSync.stream() );
       done();
}    


function watch_style(){
    watch(styleWatch, series(styles, reload));
}

task("watch", parallel(browser_sync, watch_style));
task("styles", styles);
