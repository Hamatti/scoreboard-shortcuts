const electron = require("electron");
const { app, globalShortcut } = electron;
const BrowserWindow = electron.BrowserWindow;
const fs = require("fs");

const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680 });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", () => {
  // Add global shortcuts
  globalShortcut.register("Alt+Control+a", () => {
    // Increase home score
    fs.readFile(path.join(__dirname, "home_score.txt"), (err, data) => {
      if (err) {
        data = "0";
      }
      const score = parseInt(data, 10) + 1;
      fs.writeFile(path.join(__dirname, "home_score.txt"), score, err => {});
    });
  });

  globalShortcut.register("Alt+Control+z", () => {
    // Decrease home score
    fs.readFile(path.join(__dirname, "home_score.txt"), (err, data) => {
      if (err) {
        data = "0";
      }
      let score = parseInt(data, 10) - 1;
      if (score < 0) {
        score = 0;
      }
      fs.writeFile(path.join(__dirname, "home_score.txt"), score, err => {});
    });
  });

  globalShortcut.register("Alt+Control+s", () => {
    // Increase away score
    fs.readFile(path.join(__dirname, "away_score.txt"), (err, data) => {
      if (err) {
        data = "0";
      }
      const score = parseInt(data, 10) + 1;
      fs.writeFile(path.join(__dirname, "away_score.txt"), score, err => {});
    });
  });

  globalShortcut.register("Alt+Control+x", () => {
    // Decrease away score
    fs.readFile(path.join(__dirname, "away_score.txt"), (err, data) => {
      if (err) {
        data = "0";
      }
      let score = parseInt(data, 10) - 1;
      if (score < 0) {
        score = 0;
      }
      fs.writeFile(path.join(__dirname, "away_score.txt"), score, err => {});
    });
  });

  globalShortcut.register("Alt+Control+r", () => {
    // Reset scores to 0
    fs.writeFile(path.join(__dirname, "home_score.txt"), "0", err => {});
    fs.writeFile(path.join(__dirname, "away_score.txt"), "0", err => {});
  });

  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
