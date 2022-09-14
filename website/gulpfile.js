        
const {
    src,
    dest,
    parallel,
    series,
    watch
} = require('gulp');

// Load plugins

const pugtohtml = require('gulp-pug');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const changed = require('gulp-changed');
const browsersync = require('browser-sync').create();

// Clean assets

function clear() {
    return src('./public/*', {
            read: false
        })
        .pipe(clean());
}

// JS function 

function js() {
    const source = './src/scripts/*.js';

    return src(source)
        .pipe(changed(source))
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest('./public/js/'))
        .pipe(browsersync.stream());
}

// Pug function

function pug() {
    const source = './src/html/index.pug';

    return src(source)
        .pipe(changed(source))
        .pipe(pugtohtml())
        .pipe(rename({
            extname: '.html'
        }))
        .pipe(dest('./public/html/'))
        .pipe(browsersync.stream());
}

// CSS function 

function css() {
    const source = './src/styles/main.sass';

    return src(source)
        .pipe(changed(source))
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(cssnano())
        .pipe(dest('./public/styles/'))
        .pipe(browsersync.stream());
}

// Watch files

function watchFiles() {
    watch('./src/styles/*', css);
    watch('./src/html/index.pug', pug);
    watch('./src/html/includes/*', pug);
    watch('./src/scripts/*', js);
    // watch('./src/img/*', img);
}

// BrowserSync

function browserSync() {
    browsersync.init({
        server: {
            baseDir: './'
        },
        port: 3000
    });
}

// Tasks to define the execution of the functions simultaneously or in series

exports.watch = parallel(browserSync, watchFiles);
exports.default = series(clear, parallel(pug, css, js));
    