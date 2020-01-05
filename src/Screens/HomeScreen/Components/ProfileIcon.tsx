import * as React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import {TouchableOpacity} from 'react-native'
import {Colors} from '../../../Assets'

interface Props {
  onPress?: () => void
}

export const ProfileIcon: React.FC<Props> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name='user' size={30} color={Colors.purple_4856FF}/>
    </TouchableOpacity>
  )
}
