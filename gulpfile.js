var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var install = require('gulp-install');
var jshintStylish = require('jshint-stylish');
var runSequence = require('run-sequence');

gulp.task('serve', function(){
  nodemon({script: 'app.js', ignore: 'node_modules/**/*.js'})
    .on('restart', function(){
      console.log('Server restarted!');
    })
});

gulp.task('lint', function(){
  return gulp.src('api/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function(){
  gulp.watch(['app.js', 'api/**/*.js', 'config/*.js'], ['lint']);
});

gulp.task('install', function(){
  return gulp.src('./package.json')
    .pipe(install());
});

//gulp test

gulp.task('build', function(callback){
  runSequence('install', 'lint', 'serve', 'watch');
});
