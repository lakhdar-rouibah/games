const { app, BrowserWindow } = require('electron')

function createWindow () {
    // Cree la fenetre du navigateur.
    win = new BrowserWindow({ width: 1000, height: 800 })
    win.maximize() 
    // et charge le index.html de l'application.
    win.loadFile('index.html');
    //win.openDevTools();
}

app.on('ready', createWindow)