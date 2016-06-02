let gulp = require('gulp'),
    del = require('del'),
    bowerSync = require('browser-sync'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    concat = require('gulp-concat'),
    es = require('event-stream');

let distFolder = './dev/',
    srcFolder = './src/';
let  processors = [autoprefixer, cssnano];
let pipes = {};

pipes.buildCSS =()=>{
    return gulp.src(srcFolder + '*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(concat('style.css'))
    .pipe(gulp.dest(distFolder))
};

pipes.builtIndex =()=>{
    return gulp.src(srcFolder + 'index.html')
        .pipe(gulp.dest(distFolder));
};

pipes.builtApp =()=>{
    return es.merge(pipes.buildCSS(), pipes.builtIndex());
};

gulp.task('style-dev', pipes.buildCSS);
gulp.task('html-dev', pipes.builtIndex);
gulp.task('clean-dev', ()=> del(distFolder));
gulp.task('clean-build', ['clean-dev'], pipes.builtApp);

gulp.task('watch', ['clean-build'], ()=>{
    let reload = bowerSync.reload;
    bowerSync({
        port:8080,
        server:{
            baseDir: distFolder
        }
    })

    gulp.watch(srcFolder + 'index.html', ()=>{
        return pipes.builtIndex()
        .pipe(reload({stream:true}));
    });

    gulp.watch(srcFolder+'*.scss', ()=>{
        return pipes.buildCSS()
            .pipe(reload({stream:true}));
    });
});

