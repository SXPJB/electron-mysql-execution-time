const {BrowserWindow}=require('electron')

let window=null

const createWindow=()=>{
    let config={
        width:1200,
        height:800,
        webPreferences:{
            nodeIntegration:true,
            enableRemoteModule:true
        }
    }
    window=new BrowserWindow(config)
    window.loadFile('src/ui/index.html')
}

module.exports={
    createWindow
}
