requirejs.config({
    baseUrl: 'js',
    paths: {
        'react': 'vendor/react/react-with-addons',
        'JSXTransformer': 'vendor/react/JSXTransformer',
        'jsx': 'vendor/requirejs-react-jsx/jsx',
        'text': 'vendor/requirejs-text/text',
        'flux': 'vendor/flux/dist/Flux',
        'EventEmitter': 'vendor/eventEmitter/EventEmitter',
        'underscore': 'vendor/underscore/underscore',
        // for React Flux
        'keyMirror': 'keyMirror',
        'TodoStore': 'stores/TodoStore',
        'AppDispatcher': 'dispatcher/AppDispatcher',
        'TodoConstants': 'constants/TodoConstants',
        'TodoActions': 'actions/TodoActions'
    },
    shim: {
        'react': {
            'exports': 'React'
        },
        'JSXTransformer': 'JSXTransformer'
    },
    config: {
        jsx: {
            fileExtension: '.jsx',
            transformOptions: {
                harmony: true,
                stripTypes: false,
                inlineSourceMap: true
            },
            usePragma: false
        }
    }
});