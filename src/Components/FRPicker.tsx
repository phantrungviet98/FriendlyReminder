import * as React from 'react'
import {observer} from 'mobx-react'
import {Modalize} from 'react-native-modalize'
import {Ref, useState} from 'react'
import {StyleSheet, TouchableOpacity, Picker} from 'react-native'
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

    const onValueChange = (itemValue: any): void => {
      setSelect(itemValue)
      onPickItem && onPickItem(itemValue)
    }


    return (
      <Modalize
        ref={modalRef}
        modalStyle={{height: 300}}
        useNativeDriver={true}
        HeaderComponent={renderHeader()}
      >
        <Picker
          onValueChange={onValueChange}
          itemStyle={styles.item}
          selectedValue={select}
        >
          {data.map((item) =>
            <Picker.Item key={(item.label + item.value)} label={item.label} value={item.value}/>
          )}
        </Picker>
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
