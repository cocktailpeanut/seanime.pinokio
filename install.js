module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "conda install -y -c conda-forge go"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "go mod download"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app/seanime-web",
        message: [
          "npm i --no-audit --no-fund",
          "npm run build"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "node -e \"const fs=require('fs');fs.rmSync('web',{recursive:true,force:true});fs.cpSync('seanime-web/out','web',{recursive:true});\""
        ]
      }
    },
    {
      method: "notify",
      params: {
        html: "Install complete. Click Start."
      }
    }
  ]
}
