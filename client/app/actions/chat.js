import { ADD_MESSAGE } from '../constants/chat'

// message: messageになる
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
})
