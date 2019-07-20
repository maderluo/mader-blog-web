let outputDir = (function(mode){
    switch(mode){
        case 'development':
            return 'dist_development';
        case 'production':
            return 'dist_production';
        case 'staging':
            return 'dist_staging';
    }
})(process.env.BUILD_MODE);
module.exports = {
    publicPath: './',
    outputDir: outputDir
}