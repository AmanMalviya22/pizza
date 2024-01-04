// webpack.mix.js

let mix = require('laravel-mix');



mix.js('resources/js/app.js', 'public/js')
   .sass('resources/scss/app.scss', 'public/css');

mix.js('resources/js/admin.js', 'public/js')
   .react(); // Add this line to enable React preset for JSX
