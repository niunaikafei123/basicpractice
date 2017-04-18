var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var concat = require('gulp-concat');  //用于文件合并
var uglify = require('gulp-uglify'); // 用于压缩文件
var rename = require('gulp-rename'); //用于文件重命名，通常用在文件压缩之后的重命名
var minifyCSS = require('gulp-minify-css'); //用于压缩css
var imagemin = require('gulp-imagemin');  //用于压缩img
var jshint = require('gulp-jshint'); //用于校验js的格式是否正确
var del = require('del'); //用于删除无用的文件
rev = require('gulp-rev'),//添加版本号

gulp.task('server',function(){
	connect.server({
		root:'dist',     //放到服务器上运行的是以dist为根目录
		livereload:true  //启用实时刷新的功能
	})
})

gulp.task('scripts',function(){
	return gulp.src('javascript/**/*.js')
    .pipe(jshint())  
    .pipe(jshint.reporter("jshint-stylish"))  
    .pipe(jshint.reporter('fail'))
	.pipe(concat('hebing1122.js'))
	.pipe(gulp.dest('dist/js'))
	.pipe(uglify()) //将合并后的文件压缩，最小化
	.pipe(rename('hebing.min.js'))
	.pipe(gulp.dest('dist/js'))
})


gulp.task('clean',function() {
	return del(['dist/js','rev']);
});

//执行hello任务
//gulp.task('hello',function(){
//	console.log("您好");
//})
//gulp.task('default',['hello']); 

//文件复制
gulp.task('copy-index',function(){
	return gulp.src('index.html')
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload());    //实时更新
})
//gulp.src表示读取文件；pipe表示把读取的文件放到管道里；gulp.dest表示要将文件复制到dist文件夹中

//将所有的images复制到dist文件夹下面
gulp.task('images',function(){
//	return gulp.src('images/*.{png,jpg}').pipe(gulp.dest('dist/images'));
	return gulp.src('images/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/images'));
})
//'images/*'表示images文件夹下的所有一级文件，如果images文件夹下有个icons文件夹，那它只能包括到icons文件夹，不能包括到icons文件夹下的图片；
//'images/**/*'表示images文件夹下的所有东西

//移动多个文件夹的写法，用中括号括起来
gulp.task('data',function(){
	return gulp.src(['xml/*.txt','css/*.css','!css/aa-*.css']).pipe(gulp.dest('dist/data'))
})
//注意：文件前面加叹号表示复制文件的时候不包括此文件

//创建build任务的时候，会先创建它所依赖的那些任务
gulp.task('build',['copy-index','images','data'],function(){
	console.log("编译成功");
})

//监听文件变化，变化后立即执行规定的任务
gulp.task('watch',function(){
	gulp.watch('index.html',['copy-index']);
})
gulp.task('sass',function(){
	return gulp.src('stylesheet/**/*.css')
	.pipe(sass())
	.pipe(gulp.dest('dist/css'))
	.pipe(minifyCSS())
	.pipe(rename('hebing.min.css'))
	.pipe(gulp.dest('dist/css'));  
})
//表示用pipe来处理读取过来的文件

//gulp.task('default',['server','watch','scripts','copy-index','images','data','sass']);
//gulp.task('default',['server','watch'])
gulp.task('default',['scripts','clean'])
