import { app } from '../../gulpfile.js';

import webpack from 'webpack-stream';

import { errorLog } from '../helpers/errorLog.js';

export const js = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(errorLog('js'))
    .pipe(
      webpack({
        mode: app.isBuild ? 'production' : 'development',
        output: {
          filename: 'main.min.js',
        },
      })
    )
    .pipe(app.plugins.replace(/@php\//g, `/php/`))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
};
