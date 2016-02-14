export default {
  test: {
    // ...
  },

  development: {
    baseUrl: 'http://localhost:3000/',
    auth: {
      restorable: true // whether or not cache auth token
    },
  },

  production: {
    // ...
  },
}
