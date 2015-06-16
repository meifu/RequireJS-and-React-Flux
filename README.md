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

`Dispatch`, `Constants`, `Actions`, `Store` will be used in Flux. To require them easier, I use `config.js` to set up the paths of these modules.

In order to write .jsx for react.js components, I need to define `jsx!components/XXX.jsx` in require.

You can use ES6 syntax in this application.

Flux 會用到 Dispatcher，Constants，Actions，Store，所以我將它設定在 config.js 中這樣您就可以在專案中任意的 require 進來。
另外可以寫 .jsx，只需要在 require 中定義 jsx!components/XXX.jsx，
可以寫 ES6 語法 。

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

You can use r.js to wrap/bundle your application.

```
$ r.js -o build.js
```


# Notes

It should be better to set up your application through Webpack.

But if your don't want to set up complicated config for using the Task Runner, you can try this application which don't need any Task Runner.

In this applicaion, I mainly focus on set up RequireJS config.js. So I can start writing React/Flux quickly.

If you encounter other questions, please email me. Thank you.

您因該還是要透過 Webpack 來設定您的專案，
若您不想去設定太多 Task Runner, 您或許可以試試看這個方式，
主要還是在設定 RequireJS config.js 就可以去寫作 React & Flux，或許會有其他問題， 來信告知我, 謝謝。


