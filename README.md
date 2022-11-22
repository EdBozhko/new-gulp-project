# New GULP project

> 1. "Path Autocomlete" plugin for VS Code for alias path configuration
>    1.1. install "Path Autocomlete" plugin for VS Code
>    1.2. add to the "settings.json" file:

```
"path-autocomplete.pathMappings": {
"@img": "${folder}/src/img",
"@scss": "${folder}/src/scss",
"@js": "${folder}/src/js",
},
```

> 2. When adds fonts, always rename files with this pattern "'fontName'-'fontWeightName'"

> 3. To generate new fonts.scss file, remove the old one and restart the project

> 4. Don't use "\r" and "\n" signs

# Commands

npm i - to install dependencies

npm run dev - to start dev environment
npm run build - to build the project
npm run start - to build and start the project
npm run zip - to build and zip the project
npm run ftp - to build an upload the project to ftp server
