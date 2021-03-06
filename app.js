const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
let window = null

app.once('ready', () => {
  // Create a new window
  window = new BrowserWindow({
    // Set the initial width to 500px
    width: 700,
    // Set the initial height to 400px
    height: 700,
    // set the title bar style
    titleBarStyle: 'hiddenInset',
    // set the background color to green
    backgroundColor: "#6ff542",
    // Don't show the window until it's ready, this prevents any white flickering
    show: false
  })


  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  window.once('ready-to-show', () => {
    window.show()
  })
})


//
//
//
//
//
//
// (c) 2020 Evan Gubarev
//
//
//
//
//
//
//
