const { app } = require('electron');
const { JSONStorage } = require('node-localstorage');
const nodeStorage = new JSONStorage(app.getPath('userData'));

function initAlwaysOnTop() {
  let isAlwaysOnTop = nodeStorage.getItem('alwaysOnTop') || false;
  return isAlwaysOnTop;
}

function ToggleAlwaysOnTop(_isAlwaysOnTop, _win) {
  console.log('ToggleAlwaysOnTop', _isAlwaysOnTop);
  if (_isAlwaysOnTop === true) {
    _win.setAlwaysOnTop(true, "normal");
  }
  else {
    _win.setAlwaysOnTop(false);
  }
  nodeStorage.setItem('isAlwaysOnTop', _isAlwaysOnTop);



}

module.exports = { ToggleAlwaysOnTop, initAlwaysOnTop };