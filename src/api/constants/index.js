export const API_ROOT = 'https://chit-api.herokuapp.com/api/v1'
export const API_WS_ROOT = 'wss://chit-api.herokuapp.com/cable'
export const HEADERS = () => {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`}
}
