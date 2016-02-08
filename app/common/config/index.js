import config from '../../../config.js'


export default Object.assign({
  baseUrl: "http://localhost:8080/api",
  auth: {
    restorable: true
  }
}, config[process.env.NODE_ENV] || {})
