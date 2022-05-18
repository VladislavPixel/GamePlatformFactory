import { createSlice } from "@reduxjs/toolkit"

// Auxiliary
import fakeApi from "../fakeAPI"

const initialState = {
	valueRegisteredUsers: null,
   isLoadingValueRegisteredUsers: true,
   errorValueRegisteredUsers: null
}

const usersSlice = createSlice({
   name: "users",
   initialState,
   reducers: {
      usersRegisteredRequested(state) {
         state.errorValueRegisteredUsers = null
         state.isLoadingValueRegisteredUsers = true
      },
      usersRegisteredReceived(state, action) {
         state.valueRegisteredUsers = action.payload
         state.isLoadingValueRegisteredUsers = false
      },
      usersRegisteredRequestField(state, action) {
         state.errorValueRegisteredUsers = action.payload
         state.isLoadingValueRegisteredUsers = false
      }
   }
})

const { actions, reducer:usersReducer } = usersSlice
const {
   usersRegisteredRequested,
   usersRegisteredReceived,
   usersRegisteredRequestField
} = actions

// Actions
export function fetchDataValueRegisteredUsers() {
   return async (dispatch) => {
      dispatch(usersRegisteredRequested())
      try {
         const valueRegisteredUsers = await fakeApi.getValueAllUsers()
         dispatch(usersRegisteredReceived(valueRegisteredUsers))
      } catch(err) {
         const { message } = err
         dispatch(usersRegisteredRequestField(message))
      }
   }
}

// Selectors
export const getValueRegisteredUsers = () => {
   return (state) => {
      return state.users.valueRegisteredUsers
   }
}
export const getStatusLoadingValueRegisteredUsers = () => {
   return (state) => {
      return state.users.isLoadingValueRegisteredUsers
   }
}
export const getErrorValueRegisteredUsers = () => {
   return (state) => {
      return state.users.errorValueRegisteredUsers
   }
}

export default usersReducer