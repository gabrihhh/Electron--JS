const {app,BrowserWindow} = require('electron');

let mainWindows;

app.on('ready',()=>{

    mainWindows = new BrowserWindow({

        width:400,
        height:400
    })

    mainWindows.loadURL(`file://${__dirname}/index.html`)
})