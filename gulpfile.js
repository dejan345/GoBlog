// Include gulp
var gulp = require("gulp");

// Include plugins
var size = require("gulp-size");
var notify = require("gulp-notify");
var cssmin = require("gulp-cssmin");
var htmlmin = require("gulp-htmlmin");

// gulp.task("move", () => gulp.src("public/**/**.*").pipe(gulp.dest("dist")));

// Html minify task
gulp.task("htmlmin", function() {
  return gulp
    .src("public/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist/"));
});

// Css minify task
gulp.task("cssmin", function() {
  gulp
    .src("public/css/*.css")
    .pipe(cssmin())
    .pipe(gulp.dest("dist/css"));
});

// Default task
gulp.task("default", ["htmlmin", "cssmin"]);
