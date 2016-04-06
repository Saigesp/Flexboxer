
var gulp       = require('gulp');  
var less       = require('gulp-less');  
var watch      = require('gulp-watch');  
var minifyCSS  = require('gulp-minify-css');  
var rename     = require('gulp-rename');  
var header     = require('gulp-header');  
var pkg        = require('./package.json');

/* Prepare banner text */
var banner = ['/**',  
  ' * <%= pkg.name %> v<%= pkg.version %>',
  ' * <%= pkg.description %>',
  ' * <%= pkg.author.name %> <<%= pkg.author.email %>>',
  ' */',
  ''].join('\n');

/* Task to compile less */
gulp.task('compile-less', function() {  
  gulp.src('./dev/*.less')
    .pipe(less())
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest('./dist/'));
});

/* Task to watch less changes */
gulp.task('watch-less', function() {  
  gulp.watch('./*.less' , ['compile-less']);
});

/* Task to minify css */
gulp.task('minify-css', ['compile-less'], function() {  
  gulp.src('./dist/*.css')
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest( './dist/min/' ));
});

/* Task when running `gulp` from terminal */
gulp.task('default', ['compile-less', 'watch-less']);

/* Task when running `gulp build` from terminal */
gulp.task('build', ['minify-css']);  