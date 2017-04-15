import { combineReducers } from 'redux'
import { ADD_MESSAGE, CREATE_MESSAGE_LIST, TOGGLE_DISPLAY_STATE, UPDATE_MESSAGE, REMOVE_MESSAGE } from '../constants/chat'

export const chatInitialState = [{"id":2,"text":"message2"},{"id":1,"text":"message1"}]

const chat = (state = '', action) => {
  switch (action.type) {
    case TOGGLE_DISPLAY_STATE:
      const id = action.id
      return state.map((message) => {
        if (message['id'] === id) {
          message['displayState'] = !message['displayState']
        }
        return message
      })
    case CREATE_MESSAGE_LIST:
      return action.messages.map((message) => {
        message['displayState'] = true
        return message
      })
    case ADD_MESSAGE:
      const message = action.message
      message['displayState'] = true
      return [...state, message]
    case UPDATE_MESSAGE:
      const updatedMessage = action.message
      return state.map((m) => {
        if (m['id'] === updatedMessage['id']) {
          updatedMessage['displayState'] = true
          return updatedMessage
        } else {
          return m
        }
      })
    case REMOVE_MESSAGE:
      const remove_id = action.id
      return state.filter((message) => message['id'] !== remove_id)
    default:
      return state
  }
}

export default chat
