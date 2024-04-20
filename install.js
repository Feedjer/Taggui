module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: [
        "git clone https://github.com/jhc13/taggui app",
      ]
    }
  }, {
    method: "script.start",
    params: {
      uri: "torch.js",
      params: {
        path: "app",
        venv: "env",
        xformers: true
      }
    }
  }, {
    method: "shell.run",
    params: {
      venv: "env",
      path: "app",
      message: [
        "pip install -r requirements.txt"
      ]
    }
  },{
    method: "notify",
    params: {
      html: "Click the 'start' tab to get started!"
    }
  }]
}
