// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"main.js":[function(require,module,exports) {
var string = '#bingdundun{\n    position: relative;\n    width: 400px;\n    height: 400px;\n    box-sizing: border-box;\n}\n#bingdundun>.body{\n    position: absolute;\n    top:76px;\n    left:93px;\n    width: 211px;\n    height: 237px;\n    border-radius: 91px 105px 74px 84px/128px 119px 129px 114px;\n    background-color: #fff;\n    border:4px solid #3a3a3a;\n    z-index: 1;\n}\n#bingdundun>.earLeft{\n    position: absolute;\n    top:77px;\n    left: 113px;\n    width: 43px;\n    height: 66px;\n    transform: rotate(340deg);\n    border-radius: 91px 52px 74px 84px/128px 68px 129px 114px;\n    background-color: #3a3a3a;\n}\n#bingdundun>.earRight{\n    position: absolute;\n    top:77px;\n    left: 243px;\n    width: 43px;\n    height: 66px;\n    transform: rotate(195deg);\n    border-radius: 7px 52px 74px 84px/33px 68px 129px 114px;\n    background-color: #3a3a3a;\n}\n#bingdundun>.face{\n    position: absolute;\n    top: 108px;\n    left: 117px;\n    width: 164px;\n    height: 131px;\n    border-radius: 98px 124px 82px 84px/104px 93px 66px 70px;\n    box-shadow: rgb(150, 191, 220) 0 0 0 3px,rgb(108, 76, 128) 0 0 0 5px,rgb(197, 185, 138) 0 0 0 7px,rgb(159, 194, 132) 0 0 0 9px;\n    background-color:#fff; \n    z-index: 2;\n}\n#bingdundun>.eyeLeft{\n    position: absolute;\n    top:132px;\n    left: 133px;\n    width: 47px;\n    height: 65px;\n    border-radius: 69px 62px 69px 69px/97px 93px 97px 97px;\n    transform: rotate(45deg);\n    background-color: #3a3a3a;\n    z-index: 3;\n}\n#bingdundun>.eyeLeft::before{\n    content: \'\';\n    position: absolute;\n    top:13px;\n    left: 15px;\n    width: 23px;\n    height: 23px;\n    border-radius: 50%;\n    border: 5px solid #fff;\n    background-color: rgb(60,60,57);\n    z-index:4;\n    box-sizing: border-box;\n}\n#bingdundun>.eyeLeft::after{\n    content: \'\';\n    position: absolute;\n    top:18px;\n    left:25px;\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    background-color: #fff;\n    z-index: 5;\n}\n#bingdundun>.eyeRight{\n   left:218px;\n   transform: rotate(-45deg);\n}\n#bingdundun>.eyeRight::before{\n    top:10px;\n    left:9px;\n}\n#bingdundun>.eyeRight::after{\n    top:15px;\n    left:16px;\n}\n#bingdundun>.nose{\n    position: absolute;\n    top:175px;\n    left:188px;\n    width: 25px;\n    height: 14px;\n    transform: rotate(180deg);\n    z-index: 6;\n    overflow: hidden;\n}\n#bingdundun>.nose::after{\n    position: absolute;\n    content: \'\';\n    width: 20px;\n    height: 20px;\n    top:-1px;\n    left: 0;\n    transform-origin: top left;\n    background-color: #3a3a3a;\n    border-radius: 6px 9px 9px 16px/6px 8px 6px 6px;\n    transform: rotate(45deg) translate3d(50%,-50%,0);\n    box-sizing: border-box;\n}\n#bingdundun>.mouth{\n    position: absolute;\n    top:192px;\n    left: 176px;\n    width: 50px;\n    height: 35px;\n    border-radius: 50% 48% 60%/48% 45%;\n    transform: rotate(-1deg);\n    background-color: #3a3a3a;\n    z-index: 5;\n}\n#bingdundun>.mouth::before{\n    content: \'\';\n    position: absolute;\n    top:-12px;\n    left: 4px;\n    width: 35px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: #fff;\n}\n#bingdundun>.mouth::after{\n    content: \'\';\n    position: absolute;\n    bottom: 3px;\n    left: 7px;\n    width: 36px;\n    height: 13px;\n    background-color: #a33232;\n    border-radius: 50% 48% 80% 80%/68% 45% 80% 60%;\n}\n#bingdundun>.handLeft{\n    position: absolute;\n    top:203px;\n    left: 83px;\n    width: 40px;\n    height: 70px;\n    background-color: #3a3a3a;\n    transform: rotate(30deg);\n}\n#bingdundun>.handLeft::after{\n    content: \'\';\n    position: absolute;\n    bottom: -22px;\n    left: 0;\n    width: 41px;\n    height: 40px;\n    background-color: #3a3a3a;\n    border-radius: 50%;\n}\n#bingdundun>.handRight{\n    position: absolute;\n    top:160px;\n    left: 270px;\n    width: 40px;\n    height: 70px;\n    background-color: #3a3a3a;\n    transform: rotate(40deg);\n    border-radius: 44px 0 80px/100px 30px 100px;\n    transform-origin: bottom center;\n}\n#bingdundun>.handRight::after{\n    content: \'\u2764\';\n    position: absolute;\n    top:-14px;\n    left: 5px;\n    width: 35px;\n    height: 35px;\n    font-size: 20px;\n    color:#9f3432;\n    text-align: center;\n    letter-spacing: -2px;\n    border-radius: 40px 40px 55px/100px 100px 0;\n    transform: rotate(-55deg);\n    transform-origin: center;\n}\n#bingdundun>.footLeft{\n    position: absolute;\n    top:310px;\n    left: 142px;\n    width: 40px;\n    height: 40px;\n    background-color: #3a3a3a;\n    border-radius: 0 50px/0 18px 0 0;\n    z-index:8;\n}\n#bingdundun>.footLeft::before{\n    content: \'\';\n    position: absolute;\n    bottom: -14px;\n    left: 0;\n    width: 42px;\n    height: 20px;\n    background-color: #3a3a3a;\n    border-radius: 0 14px 4px;\n}\n#bingdundun>.footRight{\n    left:220px;\n    transform: rotateY(180deg);\n}\n';
var demo = document.querySelector('#demo');
var demo2 = document.querySelector('#demo2');

var player = {
    id: undefined,
    n: 1,
    time: 100,
    init: function init() {
        demo.innerText = string.substring(0, player.n);
        demo2.innerHTML = string.substring(0, player.n);
        player.play();
        player.bindEvents();
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    bindEvents: function bindEvents() {
        for (var key in player.events) {
            if (player.events.hasOwnProperty) {
                var value = player.events[key];
                document.querySelector(key).onclick = player[value];
            }
        }
    },
    run: function run() {
        player.n += 1;
        if (player.n > string.length) {
            window.clearInterval(id);
            return;
        }
        demo.innerText = string.substring(0, player.n);
        demo2.innerHTML = string.substring(0, player.n);
        demo.scrollTop = demo.scrollHeight;
    },
    play: function play() {
        player.id = setInterval(player.run, player.time);
    },
    pause: function pause() {
        window.clearInterval(player.id);
    },
    slow: function slow() {
        player.time = 300;
        player.pause();
        player.play();
    },
    normal: function normal() {
        player.time = 100;
        player.pause();
        player.play();
    },
    fast: function fast() {
        player.time = 0;
        player.pause();
        player.play();
    }
};

player.init();
},{}],"..\\..\\..\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '53410' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.8dc47efe.map