const gulp = require('gulp')
const del = require('del')
const srcExampleOutput = 'example/pages'
const cleanSrcExample = () => del.deleteAsync([
    `${srcExampleOutput}/**`,`!${srcExampleOutput}/{home,gulp-error}/**`
])
const copySrcExample = ()=>{
    return gulp.src()
}
const build = gulp.serial(cleanSrcExample)

module.exports = {
    build,
    wtach
}
