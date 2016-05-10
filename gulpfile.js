
var gulp       = require('gulp');  
var less       = require('gulp-less');  
var watch      = require('gulp-watch');  
var minifyCSS  = require('gulp-minify-css');  
var rename     = require('gulp-rename');  
var header     = require('gulp-header');  
var pkg        = require('./package.json');

/* Prepare banner text */
var banner = ['/**',  
  ' * Project: <%= pkg.name %> ',
  ' * Version: v<%= pkg.version %>.2',
  ' * Description: <%= pkg.description %>',
  ' * Author: <%= pkg.author.name %>',
  ' * Author email: <%= pkg.author.email %>',
  ' * Licence: <%= pkg.license %>',
  ' * Web: <%= pkg.homepage %>',
  ' */',
  ''].join('\n');

/* Task to compile less */
gulp.task('less', function() {  
  gulp.src('./dev/style.less')
    .pipe(less())
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest('./dist/'));
});

/* Task to watch less changes */
gulp.task('watch-less', ['less'], function() {  
  gulp.watch('./dev/*.less' , ['less']);
});

/* Task to minify css */
gulp.task('minify-css', ['less'], function() {  
  gulp.src('./dist/*.css')
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest( './dist/min/' ));
});

/* Task when running `gulp` from terminal */
gulp.task('serve', ['watch-less']);

/* Task when running `gulp build` from terminal */
gulp.task('build', ['minify-css']);  