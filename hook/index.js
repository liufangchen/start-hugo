async function preInit(inputObj) {
    console.log(`
   _    _ _    _  _____  ____  
  | |  | | |  | |/ ____|/ __ \\ 
  | |__| | |  | | |  __| |  | |
  |  __  | |  | | | |_ | |  | |
  | |  | | |__| | |__| | |__| |
  |_|  |_|\\____/ \\_____|\\____/ 
                               
                               `)
}

async function postInit(inputObj) {

    console.log(`\n    Welcome to the website static application
     This application requires to open these services: 
         OSS : https://oss.console.aliyun.com/
         CDN : https://cdn.console.aliyun.com/

     * 部署前执行请安装go和hugo
         go  : https://golang.google.cn/doc/install
         hugo: https://gohugo.io/getting-started/installing
       
     * 项目初始化完成，您可以直接进入项目目录下，并使用 s deploy 进行项目部署\n`)
}

module.exports = {
    postInit,
    preInit
}
