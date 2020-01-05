import * as React from 'react'
import {Card} from '@ant-design/react-native'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Colors, Normalize} from '../../../Assets'
import {ReactNode} from 'react'

interface Props {
  style?: any
  title: string
  description: string
  icon: ReactNode
  onPress?: () => void
}

export const HomeCard: React.FC<Props> = ({style, title, description, icon, onPress}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Card style={[styles.card]}>
        <Card.Body style={{flex: 1, paddingTop: 0, paddingBottom: 0}}>
          <View style={styles.body}>
            <View style={styles.leftBody}>
              {icon}
            </View>
            <View style={styles.wrapText}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
        </Card.Body>
      </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    paddingBottom: 0,
    paddingTop: 0,
    borderRadius: Normalize(10),
  },
  body: {
    flexDirection: 'row',
    flex: 1,
  },
  leftBody: {
    backgroundColor: Colors.green_2B9654,
    height: '100%',
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: Normalize(6),
    borderBottomLeftRadius: Normalize(6),
  },
  wrapText: {
    width: '65%',
    justifyContent: 'center',
    padding: Normalize(10),
  },
  title: {
    fontWeight: 'bold',
    fontSize: Normalize(20),
    marginBottom: Normalize(10),
  },
  description: {
    fontSize: Normalize(16),
    color: Colors.gray_888888
  },
})
