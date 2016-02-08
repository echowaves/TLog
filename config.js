export default {
  test: {
    // ...
  },

  development: {
    baseUrl: 'http://localhost:3000/api/customers',
    auth: {
      restorable: true // whether or not cache auth token
    },
    pullingInterval: 15000,
    smsCooldownSec: 5,    
  },

  production: {
    // ...
  },
}
