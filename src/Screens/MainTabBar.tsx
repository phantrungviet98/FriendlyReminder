import * as React from 'react'
import {TabBar} from '@ant-design/react-native'
import HomeScreen from './HomeScreen/HomeScreen'
import MedicineScreen from './MedicineScreen/MedicineScreen'
import Icon from 'react-native-vector-icons/AntDesign'
import {useEffect, useState} from 'react'
import {Colors} from '../Assets'
import AppointmentScreen from './AppointmentScreen/AppointmentScreen'
import TravelScreen from './TravelScreen/TravelScreen'
import HealthTipScreen from './HealthTipScreen/HealthTipScreen'
import {selectedTabSubject} from '../Store/subjectStore'
import {BackHandler} from 'react-native'

const MainTabBar = () => {
  const [selectedTab, setSelectedTab] = useState<any>('Home')

  /**
   * Todo: BackHandler is not working, check and fix its
   */

  useEffect(() => {
    const subscribe = selectedTabSubject.subscribe(
      (tabName) => {
        setSelectedTab(tabName)},
    )

    BackHandler.addEventListener('hardwareBackPress', () => {
      setSelectedTab('Home')
    })

    return () => {
      subscribe.unsubscribe()
      BackHandler.removeEventListener('hardwareBackPress', () => {})
    }
  }, [])

  return (
    <TabBar
      unselectedTintColor={Colors.black_3B3B3B}
      tintColor={Colors.purple_4856FF}
      animated={true}
      swipeable={true}
    >
      {/* Home */}
      <TabBar.Item
        title={'Home'}
        icon={<Icon name={'home'} size={25} />}
        selected={selectedTab === 'Home'}
        selectedIcon={<Icon name={'home'} size={30} color={Colors.purple_4856FF} />}
        onPress={() => setSelectedTab('Home')}
      >
        <HomeScreen />
      </TabBar.Item>

      {/* Medicine */}
      <TabBar.Item
        title={'Medicines'}
        icon={<Icon name={'medicinebox'} size={25} />}
        selected={selectedTab === 'Medicine'}
        selectedIcon={<Icon name={'medicinebox'} size={30} color={Colors.purple_4856FF} />}
        onPress={() => setSelectedTab('Medicine')}
      >
        <MedicineScreen />
      </TabBar.Item>

      {/* Appointment */}
      <TabBar.Item
        title={'Appointments'}
        icon={<Icon name={'calendar'} size={25} />}
        selected={selectedTab === 'Appointment'}
        selectedIcon={<Icon name={'calendar'} size={30} color={Colors.purple_4856FF} />}
        onPress={() => setSelectedTab('Appointment')}
      >
        <AppointmentScreen />
      </TabBar.Item>

      {/* Travel */}
      <TabBar.Item
        title={'Travels'}
        icon={<Icon name={'dingding'} size={25} />}
        selected={selectedTab === 'Travel'}
        selectedIcon={<Icon name={'dingding'} size={30} color={Colors.purple_4856FF} />}
        onPress={() => setSelectedTab('Travel')}
      >
        <TravelScreen />
      </TabBar.Item>

      {/* HealthTip */}
      <TabBar.Item
        title={'Health Tips'}
        icon={<Icon name={'smileo'} size={25} />}
        selected={selectedTab === 'HealthTip'}
        selectedIcon={<Icon name={'smileo'} size={30} color={Colors.purple_4856FF} />}
        onPress={() => setSelectedTab('HealthTip')}
      >
        <HealthTipScreen />
      </TabBar.Item>
    </TabBar>
  )
}

export default MainTabBar
