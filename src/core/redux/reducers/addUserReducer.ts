import IUser from '../../models/UserModel'

const inititalState: IUser = { name: 'User 1', age: 23 }

export enum UserReducerType {
  CHANGE_USERNAME,
  CHANGE_AGE
}

const userReducer = (state = inititalState, action: any) => {
  switch (action.type) {
    case UserReducerType.CHANGE_USERNAME: {
      return { ...state, name: action.payload }
    }

    case UserReducerType.CHANGE_AGE: {
      return { ...state, age: action.payload }
    }
  }

  return state
}

export default userReducer
