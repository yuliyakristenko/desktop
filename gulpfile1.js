function style () {
	return src('./css/**/*.scss')
	.pipe(gulpStylelint({
		reporters: [
			{
			formatter: 'string',
			console: true
			}
		]
	}))
	.pipe(sass().on('error', sass.logError))
	//.pipe(cleanCSS())
	.pipe(dest('./css/'))
	.pipe(browserSync.stream());
}

function watcher () {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	watch('./css/**/*.scss', style);
	watch('./*.html').on('change',browserSync.reload);
	watch('./js/**/*.js').on('change', browserSync.reload);
}

//function taskCritical () {
	//return src('./*.html')
		//.pipe(
			//critical({
				//base: './',
				//inline: true,
				//css: ['css/styles.css'],
			//})
		//)
		//.on('error', err => {
			//log.error(err.message);
		//})
		//.pipe(dest('./'));
//};

//exports.critical = taskCritical;

exports.style = style;
exports.watch = watcher;