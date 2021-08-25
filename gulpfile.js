var gulp= require('gulp'); 
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var csso = require('gulp-csso');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
// const minifyCSS = require('gulp-minify-css');
// const autoprefixer = require('gulp-autoprefixer');

var AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];
// guvalp.task('js', function(){
//     gulp.src('src/scripts/*.js')
//     .pipe(concat('script.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('build/scripts/'));
//  });
 
async function css(){
    gulp.src('./src/assets/css/*.css')
    .pipe(cleanCSS({debug: true}, (details) => {
        console.log(`${details.name}: ${details.stats.originalSize}`);
        console.log(`${details.name}: ${details.stats.minifiedSize}`);
      }))
      .pipe( rename(function(path){
        path.basename += ".min";
        path.extname = ".css";
      }))
    .pipe(gulp.dest('./src/assets/css/vendor'))
};

exports.default=css;