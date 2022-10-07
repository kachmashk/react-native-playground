import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IUser from '../../core/models/UserModel'
import SharedScrollableComponent from '../components/SharedScrollableComponent'
import * as ChangeUserData from '../../core/redux/actions/changeUserData'
import TextInputComponent from '../components/text-input-component/TextInputComponent'
import { Button, Text, View } from 'react-native'

const ProfilePage: FC = () => {
  useEffect(() => console.log(ProfilePage.name))

  const dispatch = useDispatch()
  const user: IUser = useSelector((state: any) => state.userReducer)

  return (
    <SharedScrollableComponent>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>{`${user.name}`}</Text>

        <Text>{`${user.age}`}</Text>
      </View>

      <TextInputComponent
        placeholder={user.name}
        onSubmit={(input: string) => {
          dispatch(ChangeUserData.changeUsersName(input))
        }}
      />

      <TextInputComponent
        placeholder={user.age.toString()}
        onSubmit={(input: string) => {
          dispatch(ChangeUserData.changeUsersAge(+input))
        }}
      />
    </SharedScrollableComponent>
  )
}

export default ProfilePage
