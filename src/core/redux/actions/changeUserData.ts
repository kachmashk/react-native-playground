import { UserReducerType } from '../reducers/addUserReducer'

export const changeUsersName = (name: string) => {
  console.log(name)
  return {
    type: UserReducerType.CHANGE_USERNAME,
    payload: name
  }
}

export const changeUsersAge = (age: number) => {
  return {
    type: UserReducerType.CHANGE_AGE,
    payload: age
  }
}
