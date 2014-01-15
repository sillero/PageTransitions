var sass = require('node-sass'),
    grunt = require('grunt');

grunt.file.write('output.css', sass.renderSync({ file: 'teste.scss' }));