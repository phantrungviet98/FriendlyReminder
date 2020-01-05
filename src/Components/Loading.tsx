import React from 'react'
import {ActivityIndicator, Image, StyleSheet} from 'react-native'
import * as Animatable from 'react-native-animatable'
import {Images, Colors, Normalize} from '../Assets'

interface Props {
}

export const Loading: React.FC<Props> = () => {

    return (
      <Animatable.View
        style={[styles.wrapView, {backgroundColor: Colors.white_FFFFFF}]}
        pointerEvents={'auto'}
        animation={'fadeOut'}
        duration={250}
        useNativeDriver
      >
        <Animatable.View animation={'pulse'} iterationCount={'infinite'} duration={2000}
        iterationDelay={500} useNativeDriver>
          <Image
            source={Images.loading}
            style={styles.logo}/>
        </Animatable.View>
        <ActivityIndicator color={Colors.purple_4856FF} style={styles.loading}/>
      </Animatable.View >
    )
}

const styles = StyleSheet.create({
  wrapView: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0
  },
  blur: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    zIndex: -1
  },
  logo: {
    height: Normalize(50),
    width: Normalize(150),
    tintColor: Colors.purple_4856FF
  },
  loading: {
    marginTop: Normalize(4)
  }
})


