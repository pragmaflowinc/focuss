// import PopUpTimer from '../src/components/TimerField'


// require('v8-compile-cache');
const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const { trackEvent } = require('./analytics');
// const { ToggleAlwaysOnTop/*, initAlwaysOnTop*/ } = require('./toggleAlwaysOnTop');
// require('update-electron-app')()

async function createWindow() {
  // let alwaysOnTop = await initAlwaysOnTop();
  // Create the browser window.
  const win = new BrowserWindow({
    id: 'main',
    title: 'mainWin',
    // show: false,
    width: 775,
    minWidth: 775,
    height: 150,
    minHeight: 150,
    maxHeight: 150,
    frame: false, //remove window frame
    roundedCorners: true,
    radii: [50,50,50,50],
    backgroundColor: '#00000000',
    titleBarStyle: 'customButtonsOnHover', //mac buttons mod
    // titleBarStyle: 'hidden', //remove title bar in windows
    titleBarOverlay: false, //remove min/max/close buttons
    hasShadow: true,
    maximizable: false, //prevent double-click to mazimize
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    darkTheme: true,
    transparent: true,
    node: {
      fs: 'empty'
    },
    // alwaysOnTop



  });

  // I think this 👇🏽 is copy pasta for graceful loading
  // win.once('ready-to-show', () => {
  //   win.show()
  // })

  //Always on top -this might not be needed since repeats above. On other hand, might be better implementation for dynamic always on top setting.
  // win.setVisibleOnAllWorkspaces(true, {visibleOnFullScreen:true});
  // win.setAlwaysOnTop(true, "normal")
  win.setBackgroundColor('rgba(0, 0, 0, 0)')
  win.setFullScreenable(false)
  win.moveTop()

  // and load the index.html of the app.
  win.loadFile("index.html");
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }

  win.once('ready-to-show', () => {
    win.show()
    win.moveTop()
  })

  //   win.webContents.openDevTools();
  //   win.webContents.on('devtools-opened', () => {
  //       setImmediate(() => {
  //           // do whatever you want to do after dev tool completely opened here
  //           win.focus();
  //       });
  // });


  // let backOnTop = () => {
  //   console.log("backontop()")
  //   // win.moveTop()
  //   // win.show()
  //   win.setAlwaysOnTop(true, "floating")
  //   win.setAlwaysOnTop(false)
  //   win.moveTop()
  //   win.show()
  //   win.focus()

  // } 

  // let backOnTopTimer = () => {
  //   console.log("backOnToptimer()")
  //   let PopUpTimer = win.document.getElementById('timerField')
  //   return setTimeout(() => backOnTop(), PopUpTimer || 18000) //in ms
  // }

  // win.on('blur', () => { 
  //   console.log("blurred")
  //   backOnTopTimer()
  //   // setTimeout(() => backOnTop(), 2000) //in ms

  // });

  // win.on('focus', () =>{
  //   clearInterval(backOnTopTimer)
  // })

}



 

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);
// let mainWin = BrowserWindow.getAllWindows()[0]
// console.log(`mainWin: ${mainWin}`)



// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// app.on('activate', () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });

if (process.argv.includes('--noAnalytics')) {
  console.log('no analytics');

} else {

  ipcMain.on('get_data', (event, arg) => {

    trackEvent('event', 'AppOnline');
  })
}


//when icp main receives 'ToggleAlwaysOnTop from renderer, it will toggle the window's always on top setting
ipcMain.on('ToggleAlwaysOnTop', (event, arg) => {
  console.log(arg['checked']);
  BrowserWindow.getFocusedWindow().setAlwaysOnTop(arg['checked'], "floating");
});

global.trackEvent = trackEvent;