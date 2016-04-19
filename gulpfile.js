var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var revReplace =require('gulp-rev-replace');
var useref = require('gulp-useref');

gulp.task('sass',function () {
  return gulp.src("components/*/*.scss")
            .pipe(sass({outputStyle:"expanded"}))
            .pipe(gulp.dest('./dist/build'))
})

gulp.task('concat',['sass'],function () {
  return gulp.src('dist/build/*/*.css')
            .pipe(concat('main.css'))
            .pipe(gulp.dest('dist/build'))
})

gulp.task('rev',['replace'],function () {
  return gulp.src('dist/build/main.css')
            .pipe(rev())
            .pipe(gulp.dest('dist/build/versions'))
            .pipe(rev.manifest())
            .pipe(gulp.dest('.'))
})

gulp.task('replace',function (){
  var mainifest = gulp.src('./rev-manifest.json');

  return gulp.src('dist/build/versions/*.css')
            .pipe(revReplace({mainifest: mainifest}))
            .pipe(gulp.dest('dist/build/versions'))
})


gulp.task('default',['concat'],function () {
  gulp.watch('components/*/*.scss',['concat','rev'])
})
