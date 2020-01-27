import * as React from 'react'
import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import {FRNavigationBar} from '../../Components'
import {Tabs} from '@ant-design/react-native'
import {selectedTabSubject} from '../../Store/subjectStore'

const MedicineScreen = () => {
  const tabs = [
    { title: 'MEDICINES' },
    { title: 'HISTORY' },
  ]

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <FRNavigationBar title={'Medicines'} onGoBack={() => selectedTabSubject.next('Home')}/>
      <Tabs tabs={tabs}>
        <View>
          <Text>MEDICINES</Text>
        </View>
        <View>
          <Text>HISTORY</Text>
        </View>
      </Tabs>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default MedicineScreen
