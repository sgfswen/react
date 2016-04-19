var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

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

gulp.task('default',['concat'],function () {
  gulp.watch('components/*/*.scss',['concat'])
})
