class Logger {
  constructor() {
    this.config = {
      appName: 'Not configured'
    } 
  }

  setConfig(config) {
    this.config = config
  }

  log(message, ...params) {
    if(params.length > 0) {
      console.log(this.config.appName, message, params)
    }else {
      console.log(this.config.appName, message)
    }
  }
}

module.exports = new Logger()