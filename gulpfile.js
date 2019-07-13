var gulp        = require('gulp'), // Подключаем Gulp
    sass        = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync = require('browser-sync'), // Подключаем Browser Sync
    sassGlob = require('gulp-sass-glob'),
    smartgrid   = require('smart-grid');
    

    
// gulp.task('less2sass', function(){ // Создаем таск Sass
//     return gulp.src('less/**/*.less') // Берем источник
//         .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
//         .pipe(gulp.dest('sass')) // Выгружаем результата в папку app/css
//         .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
// });



gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('sass/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});



gulp.task('styles', function () {
    return gulp.src('scss/*.scss')
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulp.dest('sass'));
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: './' // Директория для сервера - app
        }
        
    });
});

gulp.task('kod', function() {
  return gulp.src(['./index.html', './*.php'])
  .pipe(browserSync.reload({stream: true}))

});

gulp.task('script', function() {
  return gulp.src(['js/*.js', 'lib/*.js'])
  .pipe(browserSync.reload({stream: true}))

});

/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'sass', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px',
            fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '560px'
        }
        /* 
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};

gulp.task('smartgrid', function(){
  return smartgrid('sass/', settings)
// .pipe(smartgrid())
// .pipe(gulp.dest('css')) 
// .pipe(browserSync.reload({stream: true}))

});

gulp.task('jpg', function() {
  return gulp.src(['images/*.jpg', 'images/*.png'])
  .pipe(browserSync.reload({stream: true}))

});

gulp.task('css', function() {
  return gulp.src('css/**/*.css')
  .pipe(browserSync.reload({stream: true}))

});



gulp.task('watch', function() {
    gulp.watch('sass/**/*.sass', gulp.parallel('smartgrid'));
    gulp.watch('sass/**/*.sass', gulp.parallel('sass'));     // Наблюдение за sass файлами
    gulp.watch('css/**/*.css', gulp.parallel('css'));
    gulp.watch(['js/**/*.js', 'lib/**/*.js'], gulp.parallel('script'));
    gulp.watch('./index.html', gulp.parallel('kod')); 
    gulp.watch(['images/**/*.jpg', 'images/**/*.png'], gulp.parallel('jpg'));
    

});
gulp.task('default', gulp.parallel('sass', 'smartgrid', 'browser-sync', 'watch'));
// gulp.task('mytask', function() {
//     console.log('Привіт бобер!!!');
// });
    