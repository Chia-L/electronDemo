const {app, BrowserWindow} = require('electron') // 引入electron
let win = null
let windowConfig = {
  width: 800,
  height: 600
}

function createWindow() {
  const win = new BrowserWindow(windowConfig)
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
