import React, {useRef, useState} from 'react'
import {StyleSheet, TextInput, Text, View} from 'react-native'
import {Colors, Normalize} from '../Assets'

export interface Props {
  placeholder: string
  onChangeText?: (text: string) => void
  secured?: boolean
  defaultValue?: string | null
  value?: string
  onFocusText?: () => void
  onBlurText?: () => void
  editable?: boolean
}

export const FRTextInput = ({
  placeholder,
  onChangeText,
  secured,
  defaultValue = '',
  value,
  onFocusText,
  onBlurText,
  editable = true,
}: Props) => {
  const textInputRef: React.RefObject<TextInput> = useRef<TextInput>(null)
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [text, setText] = useState(defaultValue)

  const onFocus = () => {
    if (secured && textInputRef) {
      textInputRef.current && textInputRef.current.clear()
    }
    setIsFocus(true)
    onFocusText && onFocusText()
  }

  const onBlur = () => {
    setIsFocus(false)
    onBlurText && onBlurText()
  }

  return (
    <View
      style={[
        styles.container,
        {borderBottomColor: isFocus ? Colors.purple_4856FF : Colors.gray_7E7E7F},
      ]}
    >
      {text ? <Text style={styles.title}>{placeholder}</Text> : <Text style={styles.title}/>}
      <TextInput
        ref={textInputRef}
        editable={editable}
        style={styles.input}
        placeholder={placeholder}
        defaultValue={defaultValue ? defaultValue : ''}
        value={value}
        onChangeText={(text) => {
          setText(text)
          onChangeText && onChangeText(text)
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        secureTextEntry={secured ? secured : false}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Normalize(24),
    borderBottomWidth: 1,
  },
  input: {
    paddingBottom: Normalize(5),
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: Normalize(10),
    color: Colors.gray_7E7E7F,
    marginBottom: Normalize(2),
  },
  touchableRight: {
    marginTop: Normalize(12),
    position: 'absolute',
    right: 4,
    bottom: 4,
  }
})
