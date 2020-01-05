import * as React from 'react'
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native'
import {FRButton, FRNavigationBar, FRPicker, FRTextInput, FRTextPicker} from '../../Components'
import {ApplicationStyles, Normalize} from '../../Assets'
import {userStore} from '../../Store/UserStore'
import {genderType} from '../../Common/constants/GenderType'
import {observer} from 'mobx-react'
import {useRef, useState} from 'react'
import {Modalize} from 'react-native-modalize'
import {useNavigation} from 'react-navigation-hooks'

const pickerData = [
  {
    label: genderType.MALE,
    value: genderType.MALE,
  },
  {
    label: genderType.FEMALE,
    value: genderType.FEMALE,
  },
]

const ProfileScreen = observer(() => {
  const {goBack} = useNavigation()
  const modalRef = useRef<Modalize>(null)
  const {user} = userStore
  const [name, setName] = useState(user ? user.displayName : '')
  const [email, setEmail] = useState(user ? user.email : '')
  const [gender, setGender] = useState(user ? user.gender : undefined)

  const onPressSave = () => {

    if (!name?.trim() || !email?.trim()) {
      alert('Name or Email is empty')
      return
    }

    if (!user) {
      alert('Something wrong when update.')
      return
    }

    userStore.setUser({uid: user.uid, gender, displayName: name, email})
      .then(() => {
        goBack()
        alert('Update successfully!')
      })
      .catch(err => console.log(err.message))
  }

  if (!user) {
    alert('Something wrong')
    return <View />
  }

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <FRNavigationBar title={'Edit Profile'} />
      <ScrollView style={ApplicationStyles.container}>
        <FRTextInput
          placeholder={'Name'}
          defaultValue={user.displayName}
          onChangeText={(text) => setName(text)}
        />
        <FRTextInput
          placeholder={'Email'}
          defaultValue={user.email}
          editable={false}
          onChangeText={(text) => setEmail(text)}
        />
        <FRTextInput
          placeholder={'Password'}
          secured
          defaultValue={'1111111111'}
          editable={false}
        />
        <FRTextPicker
          style={styles.textPicker}
          onPressRight={() => modalRef.current && modalRef.current.open()}
        >
          {gender}
        </FRTextPicker>
        <FRButton title={'Save'} onPress={onPressSave} />
      </ScrollView>
      <FRPicker
        data={pickerData}
        modalRef={modalRef}
        selected={user.gender}
        onPressClose={() => modalRef.current && modalRef.current.close()}
        onPickItem={(data) => setGender(data)}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textPicker: {
    marginTop: Normalize(20),
  },
})

export default ProfileScreen
