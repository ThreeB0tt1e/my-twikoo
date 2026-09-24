const Module = require('module');
const originalLoad = Module._load;
Module._load = function(request, parent, isMain) {
  if (request === 'pushoo') {
    return function() { return Promise.resolve(); };
  }
  return originalLoad.apply(this, arguments);
};

module.exports = require('twikoo-vercel');
