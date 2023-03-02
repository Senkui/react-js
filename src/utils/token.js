const key = 'pc-key'

const setToken = (token) => {
  return window.localStorage.setItem(key, '111')
}

const getToken = () => {
  return window.localStorage.getItem(key)
}

const removeToken = () => {
  return window.localStorage.removeItem(key)
}

export {
  setToken,
  getToken,
  removeToken
}