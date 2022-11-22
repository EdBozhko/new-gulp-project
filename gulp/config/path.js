import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

const scrImagesList = 'jpg,jpeg,png,gif,webp';
const watchImagesList = `${scrImagesList},svg,ico`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
    php: `${buildFolder}/php/`,
    build: `${buildFolder}/**/*.*`,
  },
  src: {
    js: `${srcFolder}/js/main.js`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/html/pages/**/*.pug`,
    images: `${srcFolder}/img/**/*.{${scrImagesList}}`,
    svg: `${srcFolder}/img/**/*.svg`,
    fonts: `${srcFolder}/fonts/`,
    ttf: `${srcFolder}/fonts/*.ttf`,
    otf: `${srcFolder}/fonts/*.otf`,
    files: `${srcFolder}/files/**/*.*`,
    php: `${srcFolder}/php/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/html/**/*.pug`,
    images: `${srcFolder}/img/**/*.{${watchImagesList}}`,
    files: `${srcFolder}/files/**/*.*`,
    php: `${srcFolder}/php/**/*.*`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
  zip: `./${rootFolder}_build.zip`,
  ftp: 'develop',
};
