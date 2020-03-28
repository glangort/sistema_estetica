export const TOKEN_KEY = ''
export const USER_ID = ''
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const getUserid = () => localStorage.getItem(USER_ID)

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token)
}
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
}

export const userId = userid => {
  localStorage.setItem(USER_ID, userid)
}
