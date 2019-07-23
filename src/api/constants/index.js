export const API_ROOT = 'https://chit-api.herokuapp.com'
export const API_WS_ROOT = 'ws://localhost:3000/cable'
export const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Bearer ${(() => localStorage.getItem('token'))()}`
}
