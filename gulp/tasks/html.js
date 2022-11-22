import { app } from '../../gulpfile.js';

import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
import GulpPug from 'gulp-pug';

import { errorLog } from '../helpers/errorLog.js';

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(errorLog('html'))
    .pipe(
      GulpPug({
        pretty: true,
        verbose: true,
      })
    )
    .pipe(app.plugins.replace(/@pages\//g, `/`))
    .pipe(app.plugins.replace(/@img\//g, `/img/`))
    .pipe(app.plugins.gulpIf(app.isBuild, webpHtmlNosvg()))
    .pipe(
      app.plugins.gulpIf(
        app.isBuild,
        versionNumber({
          value: '%DT%',
          append: {
            key: '_v',
            cover: 0,
            to: ['css', 'js'],
          },
          output: {
            file: 'gulp/version.json',
          },
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
};
