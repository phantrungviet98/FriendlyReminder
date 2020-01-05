import * as React from 'react'
import {View, StyleSheet, SafeAreaView} from 'react-native'
import {observer} from 'mobx-react'
import {FRNavigationBar} from '../../Components'
import {ProfileIcon, HomeCard} from './Components'
import {useNavigation} from 'react-navigation-hooks'
import {Colors, Normalize} from '../../Assets'
import Icon from 'react-native-vector-icons/AntDesign'
import {WhiteSpace} from '@ant-design/react-native'
import {selectedTabSubject} from '../../Store/subjectStore'

const HomeScreen = observer(() => {
  const {navigate} = useNavigation()

  const onPressProfile = () => {
    navigate('Profile')
  }

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <FRNavigationBar noGoBack rightComponent={<ProfileIcon onPress={onPressProfile} />} />
      <View style={styles.wrapCard}>
        <HomeCard
          style={styles.card}
          icon={<Icon name={'medicinebox'} size={50} color={Colors.white_FFFFFF} />}
          title={'Add Your Medicines'}
          description={'Add your medicine & never have any health issues because of it.'}
          onPress={() => selectedTabSubject.next('Medicine')}
        />
        <WhiteSpace size={'lg'} />
        <HomeCard
          style={styles.card}
          icon={<Icon name={'calendar'} size={50} color={Colors.white_FFFFFF} />}
          title={'Add Your Appointments'}
          description={`Add appointments and don't worry about forgetting your appointments.`}
          onPress={() => selectedTabSubject.next('Appointment')}
        />
        <WhiteSpace size={'lg'} />
        <HomeCard
          style={styles.card}
          icon={<Icon name={'dingding'} size={50} color={Colors.white_FFFFFF} />}
          title={'Add Your Travels'}
          description={'Add your upcoming travels & never miss any medications to be carried.'}
          onPress={() => selectedTabSubject.next('Travel')}
        />
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapCard: {
    flex: 1,
    padding: Normalize(2),
    alignItems: 'center',
    marginTop: Normalize(10),
  },
  card: {
    width: '90%',
    height: '25%',
  },
})

export default HomeScreen
