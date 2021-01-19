const electron = require('electron');
const path = require('path');
const url = require('url');

// SET ENV

const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;
let addWindow;

app.on('ready', function(){
  mainWindow = new BrowserWindow({
    icon: __dirname + '/redV.png'
  });
  mainWindow.maximize();
  mainWindow.loadURL('https://vapq.cf')
  mainWindow.setMenu(null)
  mainWindow.on('closed', function(){
    app.quit();
  });
});