import { app } from '../../gulpfile.js';

import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

import { errorLog } from '../helpers/errorLog.js';

export const otfToTtf = () => {
  return app.gulp
    .src(app.path.src.otf)
    .pipe(errorLog('fonts'))
    .pipe(
      fonter({
        formats: ['ttf'],
      })
    )
    .pipe(app.gulp.dest(app.path.src.fonts));
};

export const ttfToWoff = () => {
  return app.gulp
    .src(app.path.src.ttf)
    .pipe(errorLog('fonts'))
    .pipe(
      fonter({
        formats: ['woff'],
      })
    )
    .pipe(app.gulp.dest(app.path.build.fonts))
    .pipe(app.gulp.src(app.path.src.ttf))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(app.path.build.fonts));
};

export const fontsStyle = () => {
  const fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;

  const baseFontWeightType = 400;

  const fontWeightTypes = {
    thin: 100,
    extralight: 200,
    light: 300,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    heavy: 800,
    black: 900,
  };

  fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
    if (fontsFiles) {
      if (!fs.existsSync(fontsFile)) {
        fs.writeFile(fontsFile, '', cb);
        let newFileOnly;
        for (var i = 0; i < fontsFiles.length; i++) {
          const fontFileName = fontsFiles[i].split('.')[0];
          if (newFileOnly !== fontFileName) {
            const fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
            const fontWeightName = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
            const fontWeight = fontWeightTypes[`${fontWeightName.toLowerCase()}`] || baseFontWeightType;
            fs.appendFile(
              fontsFile,
              `@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`,
              cb
            );
            newFileOnly = fontFileName;
          }
        }
      } else {
        console.log('The file scss/fonts.scss already exists. To update the file, you need to delete it!');
      }
    }
  });
  return app.gulp.src(`${app.path.srcFolder}`);
  function cb() {}
};
