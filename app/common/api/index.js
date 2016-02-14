import humps from 'humps'
import Config from '../config'
import moment from 'moment'
import qs from 'qs'

let headers = (token) => {
  return Object.assign({
    'Accept': 'application/json',
    'Content-Type': 'application/json' },
    token ? {'Authorization': 'bearer ' + token} : {})
}

/*
 * AUTH
 */

export function authenticate(token) {
  return authFetch({ token }, Config.baseUrl + '/viewer')
}

export function login(email, password) {
  const loginUrl = Config.baseUrl + '/auth_token'

  return fetch(loginUrl, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      auth: {
        email,
        password,
      }})
  }).then((response) => {
    if(response.ok) {
      return Promise.resolve(response.json())
    } else {
      return Promise.reject(new Error("Authentication failed"))
    }
  })

  return Promise.resolve({token: '123123'})

}

/*
 * FAQs
 */

export function fetchFaqs(auth) {
  let url = Config.baseUrl + `/faqs`
  return authFetch(auth, url)
}

/*
 * Profile
 */

export function fetchAccount(auth, accountId) {
  return authFetch(auth, Config.baseUrl + `/accounts/${accountId}`)
}

export function updateViewer(auth, data) {
  let url = Config.baseUrl + `/viewer`

  return authFetch(auth, url, {
    method: 'PUT',
    body: JSON.stringify({
      customer: {
        name: data.name,
        email: data.email,
        avatar_base64: data.photoBase64
      }
    })
  })
}


/*
 * Private
 */

function authFetch({ token }, url, options = {}) {
  if (typeof options.body === 'object') {
    options = {
      ...options,
      body: JSON.stringify(humps.decamelizeKeys(options.body)),
    }
  }

  return fetch(url, Object.assign({
    method: 'GET',
    headers: headers(token),
  }, options))
  .then(
    (response) => {
      if (response.status === 401) {
        return Promise.reject(response)
      }

      if (response.ok) {
        return response.json().then((json) => {
          return Promise.resolve(humps.camelizeKeys(json))
        })
      }

      return Promise.reject(response.statusText)
    })
}
