// export const API_ROOT = 'http://localhost:3000/api/v1'
export const API_ROOT = 'https://chit-api.herokuapp.com/api/v1'
export const API_WS_ROOT = 'ws://chit-api.herokuapp.com/api/v1/cable'
export const HEADERS = () => {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
}
