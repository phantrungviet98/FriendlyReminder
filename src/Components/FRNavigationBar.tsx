import React, {ReactNode} from 'react'
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native'
import {useNavigation} from 'react-navigation-hooks'
import Icon from 'react-native-vector-icons/AntDesign'
import {Normalize} from '../Assets'

export interface Props {
  noGoBack?: boolean,
  title?: string,
  rightComponent?: ReactNode
  onGoBack?: () => void
}

export const FRNavigationBar: React.FC<Props> = ({noGoBack = false, title, rightComponent, onGoBack}) => {
  const {goBack} = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.wrapRight}>
        {rightComponent}
      </View>
      {!noGoBack &&
      <TouchableOpacity style={styles.wrapLeft} onPress={() => onGoBack ? onGoBack() : goBack()}>
        <View style={styles.buttonBack}>
          <Icon name='left' size={Normalize(30)}/>
        </View>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Normalize(50),
    flexDirection: 'row-reverse',
    paddingHorizontal: 4,
    justifyContent: 'space-between',
  },
  wrapLeft: {
    flexDirection: 'row'
  },
  wrapRight: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
    alignSelf: 'center'
  },
  buttonBack: {
    justifyContent: 'center',
  }
})
