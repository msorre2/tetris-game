'use strict';
var app = (function () { //jshint ignore:line
  var callbacks = {};

  return {
    on: function (id, callback) {
      callbacks[id] = callbacks[id] || [];
      callbacks[id].push(callback);
    },
    emit: function (id, data) {
      (callbacks[id] || []).forEach(c => window.setTimeout(c, 0, data));
    }
  };
})();

chrome.app.window.getAll()[0].onClosed.addListener(() => app.emit('unload'));
