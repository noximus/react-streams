import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = (payload) => ({
  type: SIGN_IN,
  payload
})

export const signOut = (payload) => ({
  type: SIGN_OUT,
  payload
})

export const createStream = formValues => async dispatch => {
  streams.post('/streams', formValues);
}

