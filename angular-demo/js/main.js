require.config({
    paths: {
        'angular': 'lib/angular',
        'jquery' : 'lib/jquery',
        'jquery-slider' : 'lib/jquery-slider'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'jquery-slider' : {
            deps : ['jquery'],
            exports: 'jQuery'
        }
    }
});

require(["app"], function (App) {
    App.initialize();
});

