import { FETCH_USER } from './constant'

export const fetchCurrentUser = () => {
  return {
    type: FETCH_USER
  }
}