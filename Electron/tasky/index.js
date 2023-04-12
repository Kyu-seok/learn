const path = require('path');
const electron = require('electron');
const TimerTray = require('./app/timer_tray');

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    webPreferences: {nodeIntegration: true, contextIsolation: false},
    height: 500,
    width: 300,
    frame: false,
    resizable: false,
    show: false,
  });

  mainWindow.loadURL(`file://${__dirname}/src/index.html`);

  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);
  TimerTray(iconPath, mainWindow);
});
