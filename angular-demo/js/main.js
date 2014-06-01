require.config({
    paths: {
        'angular': 'lib/angular',
        'jquery' : 'lib/jquery',
        'jquery-ui' : 'lib/jquery-ui',
        'jquery-slider' : 'lib/jquery-slider'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'jquery-ui' : ['jquery'],
        'jquery-slider' : {
            deps : ['jquery-ui'],
            exports: 'jQuery'
        }
    }
});

require(["app"], function (App) {
    App.initialize();
});

