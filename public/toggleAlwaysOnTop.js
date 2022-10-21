const { app, BrowserWindow } = require('electron');
const { JSONStorage } = require('node-localstorage');
const nodeStorage = new JSONStorage(app.getPath('userData'));


// async function initAlwaysOnTop() {
//   console.log(nodeStorage._getStat('isAlwaysOnTop'));
//   let isAlwaysOnTop = await nodeStorage.getItem('isAlwaysOnTop');
//   return isAlwaysOnTop === 'true';
// }

function ToggleAlwaysOnTop(_isAlwaysOnTop) {
  console.log('ToggleAlwaysOnTop', _isAlwaysOnTop);
  BrowserWindow.getAllWindows()[0].setAlwaysOnTop(_isAlwaysOnTop);
  // if (_isAlwaysOnTop === true) {
  //   _win.setAlwaysOnTop(true, "floating");
  // }
  // else {
  //   _win.setAlwaysOnTop(false);
  // }
  nodeStorage.setItem('isAlwaysOnTop', _isAlwaysOnTop.toString());



}

module.exports = { ToggleAlwaysOnTop, /*initAlwaysOnTop*/ };