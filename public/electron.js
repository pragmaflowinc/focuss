// import TimerLen from '../src/App'


const path = require('path');
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    id: 'main',
    // show: false,
    width: 775,
    height: 150,
    frame: false, //remove window frame
    titleBarStyle: 'hidden', //remove title bar
    titleBarOverlay: false, //remove min/max/close buttons
    maximizable: false, //prevent double-click to mazimize
    webPreferences: {
      nodeIntegration: true,
    },
    
  });

  // window.once('ready-to-show', () => {
  //   window.show()
  // })


  
  //Always on top -this might not be needed since repeats above. On other hand, might be better implementation for dynamic always on top setting.
  // win.setVisibleOnAllWorkspaces(true, {visibleOnFullScreen:true});
  // win.setAlwaysOnTop(true, "normal")
  win.setFullScreenable(false)
  win.moveTop()

  // and load the index.html of the app.
  // win.loadFile("index.html");
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

  
let backOnTop = () => {
  console.log("backontop()")
  // win.moveTop()
  // win.show()
  win.setAlwaysOnTop(true, "floating")
  win.setAlwaysOnTop(false)
  // win.focus()
  
} 

let backOnTopTimer = () => {
  console.log("backOnToptimer()")
  return setTimeout(() => backOnTop(), 2000) //in ms
}

win.on('blur', () => { 
  console.log("blurred")
  backOnTopTimer()
  // setTimeout(() => backOnTop(), 2000) //in ms
  
});

win.on('focus', () =>{
  clearInterval(backOnTopTimer)
})

}

// let clearInput = () => {
//   document.getElementsByName('mainInput')[0].setState({ value: "" })
// }

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);
let mainWin = BrowserWindow.getAllWindows()[0]
console.log(`mainWin: ${mainWin}`)



// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});



