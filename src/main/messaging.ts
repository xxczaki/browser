import { ipcMain } from "electron";

import { 
    createView, 
    selectView, 
    destroyView, 
    refreshView, 
    stopView, 
    backView, 
    forwardView, 
    navigateView
} from "./tools/view";
import { appWindow } from ".";

export const startMessagingAgent = () => {
    ipcMain.on('view-create', (e, options) => createView(options))
    ipcMain.on('view-select', (e, id) => selectView(id))
    ipcMain.on('view-destroy', (e, id) => destroyView(id))
    
    ipcMain.on('view-refresh', (e, id, ignoreCache?: boolean) => refreshView(id, ignoreCache))
    ipcMain.on('view-stop', (e, id) => stopView(id))
    ipcMain.on('view-back', (e, id) => backView(id))
    ipcMain.on('view-forward', (e, id) => forwardView(id))

    ipcMain.on('view-navigate', (e, id, url) => navigateView(id, url))

    ipcMain.on('app-close', (e) => { appWindow.window.close() })

    ipcMain.on('ignore-mouse-overlay', () => {appWindow.overlay.setIgnoreMouseEvents(true, { forward: true })})
    ipcMain.on('allow-mouse-overlay', () => {appWindow.overlay.setIgnoreMouseEvents(false, { forward: true })})
}