import config from '../../../config.js'


export default Object.assign({
  baseUrl: "http://localhost:3000/",
  auth: {
    restorable: true
  }
}, config[process.env.NODE_ENV] || {})
