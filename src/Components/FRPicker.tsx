import * as React from 'react'
import {PickerView} from '@ant-design/react-native'
import {observer} from 'mobx-react'
import {Modalize} from 'react-native-modalize'
import {Ref, useState} from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import {Normalize} from '../Assets'

interface Props {
  data: {label: string; value: string}[]
  selected: string | undefined | null
  modalRef: Ref<Modalize>
  onPressClose: () => void
  onPickItem?: (data: string) => void
}

export const FRPicker: React.FC<Props> = observer(
  ({data, modalRef, onPressClose, onPickItem, selected}) => {
    const [select, setSelect] = useState([selected])

    const renderHeader = () => {
      return (
        <TouchableOpacity style={styles.header} onPress={onPressClose}>
          <Icon name={'closecircle'} size={20} />
        </TouchableOpacity>
      )
    }

    const onPick = (data: Array<string>): void => {
      setSelect(data)
      onPickItem && onPickItem(data[0])
    }


    return (
      <Modalize
        ref={modalRef}
        modalStyle={{height: 300}}
        useNativeDriver={true}
        HeaderComponent={renderHeader()}
      >
        <PickerView
          data={data}
          value={select}
          onChange={onPick}
          styles={{width: '100%'}}
          itemStyle={styles.item}
        />
      </Modalize>
    )
  },
)

const styles = StyleSheet.create({
  header: {
    paddingTop: Normalize(12),
    paddingHorizontal: Normalize(12),
    flexDirection: 'row-reverse',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
})
