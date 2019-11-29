const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
var uglify = require('gulp-uglify');
const { src, dest, series } = require('gulp');
let cleanCSS = require('gulp-clean-css');
var pipeline = require('readable-stream').pipeline;





gulp.task('mesaj', function (done) {
    console.log("Gulp calisiyor..");
    done();
  });


exports.default = () => (
gulp.src('assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('assets/images'))
);






gulp.task('compress', function (pipeline) {
    return pipeline(
          gulp.src('assets/src/js/*.js'),
          uglify(),
          gulp.dest('dist')
    );
  });






gulp.task('minify-css', () => {
    return gulp.src('assets/src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('assets/css'));
});





gulp.task('minify-css', () => {
    return gulp.src('assets/src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('assets/css'));
});

