let sass = require('sass');
let path = require('path');
let fs = require('fs');

let result = sass.renderSync({file: path.resolve(__dirname, './styles/styles.scss')});

fs.writeFileSync(path.resolve(__dirname, 'styles.css'), result.css);
