var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

gulp.task('compress', function() {
  gulp.src([
        // 'bower_components/modernizr/modernizr.js',
        // 'bower_components/zepto/zepto.min.js',
        // 'bower_components/hammerjs/hammer.min.js',
        'bower_components/components-revealjs/js/reveal.js',
        'assets/js/carousel.js'
    ])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function () {
    watch('assets/js/*.js', function () {
        gulp.start('compress');
    });
});

gulp.task('default', ['compress']);