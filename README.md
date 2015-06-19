# RequireJs-React-Flux

This is a React + Flux application implemented with RequireJS.

I use [todos example from the official website](https://github.com/facebook/flux/tree/master/examples/flux-todomvc/) and it seems to work. You can give it a try.

Example

![http://i.imgur.com/1zBvCEq.png?1](http://i.imgur.com/1zBvCEq.png?1)


# Install

.bowerrc

```
{
	"directory": "js/vendor"
}
```

Bower packages

```
  "dependencies": {
    "requirejs-react-jsx": "~0.14.1",
    "requirejs": "~2.1.17",
    "flux": "~2.0.2",
    "eventEmitter": "~4.2.11",
    "underscore": "~1.8.3"
  }

```

Install

```
$ bower install
```


# Usage

Run your local server.

I use PHP server. (You can use other ways, like: Python's Simple HTTPServer) 

```
$ php -S localhost:9000
```

Flux will need `Node EventEmmit`,  `keyMirror`. But we are not in node environment(no npm) so these modules must be packaged in another way.

I wrap `keyMirror` by `define`(RequireJS), then it can be used in Flux.

keyMirror.js

```
define('keyMirror', function () {
  var keyMirror = function(obj) {
    var ret = {};
    var key;
    if (!(obj instanceof Object && !Array.isArray(obj))) {
      throw new Error('keyMirror(...): Argument must be an object.');
    }
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        ret[key] = key;
      }
    }
    return ret;
  };
  return keyMirror;
});
```

`Dispatch`, `Constants`, `Actions`, `Store` will be used in Flux. The paths of these modules were defined in config.js then I can require them anywhere easily.

In order to write .jsx for react.js components, I need to define `jsx!components/XXX.jsx` in require.

You can write ES6 syntax in this application.

config.js

```
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
```


# Building

最後您可以透過 r.js 打包專案

You can use r.js (RequireJS) to bundle your application.

```
$ r.js -o build.js
```


# Notes

It should be better to set up your application through [Webpack](http://webpack.github.io/).

But if you don't want to use complicated config for Task Runner(Grunt/Gulp), you can try this application which don't need any Task Runner.

In this applicaion, I can start writing React/Flux quickly. Just after setting up the config.js for RequireJS which doesn't need much time.

If you encounter other questions, please email me. Thank you.

