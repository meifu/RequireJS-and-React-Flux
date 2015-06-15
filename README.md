# RequireJs-React-Flux
---

透過 RequireJS 的方式進行 React & Flux,

我們先用 todos 範例來做 Demo, 好像可以用, 您可以試試看。

Example

![http://i.imgur.com/1zBvCEq.png?1](http://i.imgur.com/1zBvCEq.png?1)


# 安裝方式
---

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


# 使用方式
---

打開您的 Server, 我是用 PHP, 您也可以用其他方式進行 ( SimpleHTTPServer )

```
$ php -S localhost:9000
```

Flux 會用到 Node EventEmmit, keyMirror, classSet,

我有找到 EventEmmit 的 Bower 套件, keyMirror 跟 classSet 

我是透過 defined 的方式將它們包起來, 就可以使用。

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

classSet.js

```
define('cx', function () {
  function cx(classNames) {
    var names = '';

    if (typeof classNames == 'object') {
      for (var name in classNames) {
        if (!classNames.hasOwnProperty(name) || !classNames[name]) {
          continue;
        }
        names += name + ' ';
      }
    } else {
      for (var i = 0; i < arguments.length; i++) {
        // We should technically exclude 0 too, but for the sake of backward
        // compat we'll keep it (for now)
        if (arguments[i] == null) {
          continue;
        }
        names += arguments[i] + ' ';
      }
    }

    return names.trim();
  }

  return cx;
});
```

Flux 會用到 Dispatcher, Constants, Actions, Store, 所以我將它設定在 config.js 中這樣您就可以在專案中任意的 require 進來。

另外可以寫 .jsx, 只需要在 require 中定義 jsx!component/YOUR_COMPNENTS.jsx,
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
        'cx': 'classSet',
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
---
最後您可以透過 r.js 打包專案

```
$ r.js -o build.js
```


# 備註

若您不想去設定太多 Task Runner, 您或許可以試試看這個方式, 主要還是在設定 RequireJS config.js 就可以去寫作 React & Flux, 或許會有其他問題, 來信告知我, 謝謝。


