const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer =require('autoprefixer');
const postcss = require('gulp-postcss')
const browserSync =require('browser-sync').create()


function style() {
  
    return gulp.src('./scss/style.scss')
    .pipe(sass().on("erorr",sass.logError))
    .pipe(sass({outputStyle:'compressed'}))
     .pipe(sourcemaps.init())
     .pipe(postcss([
        autoprefixer({
            overrideBrowserslist:  ['last 2 versions'],
            cascade: false
        })
    ]))
    .pipe(sourcemaps.write('.')) 
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
}
function watch(){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    });
    gulp.watch('./scss/**/*.scss',style);
    gulp.watch('./*.html').on('change',browserSync.reload)
}

exports.style=style
exports.watch=watch

gulp.task('default', gulp.series(watch))