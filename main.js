const { app, BrowserWindow } = require("electron");
const { Menu } = require("electron/main");

const createWindow = () => {
  const window = new BrowserWindow({
    minWidth: 800,
    minHeight: 300,
    // transparent: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const emptyMenu = Menu.buildFromTemplate([]);
  Menu.setApplicationMenu(emptyMenu);

  window.loadURL("https://chat.openai.com/");
  window.maximize();
  window.resizable = false;
};

app.whenReady().then(() => {
  createWindow();
});
