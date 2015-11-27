var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var browserify = require('browserify');  
var source = require('vinyl-source-stream');  
var buffer = require('vinyl-buffer');
//自动刷新页面
//var browserSync = require('browser-sync').create();
//var reload      = browserSync.reload;

var paths = {srcDir:'./public/javascripts/src/',distDir:'./public/javascripts/dist/'} ;

//清除文件
gulp.task('clean', function() {
   return gulp.src(paths.distDir+"*", {read: false})
    .pipe(clean());
});

/*gulp.task('serve', function() {
    browserSync.init({
        proxy: 'localhost:3000',
        port: '8888'
    });
    //gulp.watch(paths.distDir+"bundle.min.js").on('change', reload);
});*/

/*gulp.task('serve', function() {
    browserSync.init({
        proxy: 'localhost:3000',
        port: '8888',
    });
});*/

/*gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });
});*/


gulp.task('browserify',['clean'], function() {  
  console.info('重新编译src源文件。。。。。。') ;
  return browserify(paths.srcDir+"main.js")
    .bundle()
    .pipe(source('bundle.js')) // gives streaming vinyl file object
    .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
    .pipe(uglify()) // now gulp-uglify works 
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest(paths.distDir))
    /*.pipe(reload({stream: true}))*//*注入到浏览器里实现更新(但是这个地方一直没有成功)*/
    ;
});

gulp.task('watch',function () {//js/**/*.js//目录及其子目录下面所有的js变化
  gulp.watch(paths.srcDir+'**/*.js',function () {
    gulp.run('browserify') ;
  }) ;
}) ;

gulp.task('default',['browserify','watch']) ;