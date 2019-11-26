import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Styles } from './Styles/FRNavigationBarStyles'

export const FRNavigationBar = () => {
  const { goBack } = useNavigation()

  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={() => goBack()}>
        <Icon name='chevron-left' size={40} />
      </TouchableOpacity>
    </View>
  )
}