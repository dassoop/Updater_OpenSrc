const {ipcRenderer, contextBridge} = require('electron')

contextBridge.exposeInMainWorld('api', {
    req: (req) => ipcRenderer.invoke('req', req)
})

ipcRenderer.on('res', (event, res) => { 
    switch(res.resType) 
    {
      case 'version':
        // return document.querySelector('#version').innerHTML = res.body.version;
        break;
        
      default:   
        break;  
    }
})