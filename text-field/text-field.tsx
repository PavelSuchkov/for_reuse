import React, { useState } from "react"
import { StyleProp, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native"
import { color, spacing, typography } from "../../theme"
import { translate } from "../../i18n"
import { Text } from ".."
import { ms, s, vs } from "react-native-size-matters"
import { FLEX_ON } from "../../../assets/global_styles"

// the base styling for the container

// the base styling for the TextInput
const INPUT: TextStyle = {
  fontFamily: typography.primary,
  color: color.palette.black,
  fontSize: ms(16, 0.5),
  borderRadius: 6,
  paddingVertical: spacing[4],
  paddingLeft: spacing[7],
}

const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
  defaultIn: {
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.palette.gray,
    paddingLeft: spacing[7],
    paddingVertical: spacing[7],
  },
}

export interface TextFieldProps extends TextInputProps {
  focusMethod?: () => void
  blurMethod?: () => void
  placeholderTx?: string
  placeholder?: string
  labelTx?: string
  label?: string
  style?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<TextStyle>
  preset?: keyof typeof PRESETS
  forwardedRef?: any
  isPayment?: boolean
  placeholderColor?: string
}

export function TextField(props: TextFieldProps) {
  const {
    focusMethod,
    blurMethod,
    placeholderTx,
    placeholder,
    labelTx,
    label,
    preset = "default",
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    isPayment = false,
    placeholderColor = null,
    keyboardType,
    ...otherProps
  } = props
  const [isFocus, setFocus] = useState(false)
  const containerStyles = [PRESETS[preset], styleOverride]
  const inputStyles = [INPUT, inputStyleOverride]
  const actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder
  const LABEL = { color: !isFocus ? color.palette.black : color.primary, marginBottom: vs(5) }
  const PAYMENT: TextStyle = { fontWeight: "500", color: color.text, lineHeight: 22 }
  const PADDING_RIGHT: ViewStyle = { paddingRight: spacing[8] }
  const PLACEHOLDER_TEXT = placeholderColor ? placeholderColor : color.disabled
  const BORDER_CONTAINER: ViewStyle = {
    borderWidth: 1,
    borderColor: !isFocus ? color.palette.gray : color.primary,
    flexDirection: "row",
    borderRadius: s(5),
    justifyContent: "space-between",
    alignItems: "center",
  }
  const onFocusFunc = () => {
    setFocus(true)
    if (focusMethod) focusMethod()
  }
  const onBlurFunc = () => {
    setFocus(false)
    if (blurMethod) blurMethod()
  }
  return (
    <View style={containerStyles}>
      {labelTx || (label && <Text preset="disabled" style={LABEL} tx={labelTx} text={label} />)}
      <View style={[isPayment && PADDING_RIGHT, BORDER_CONTAINER]}>
        <TextInput
          keyboardType={keyboardType}
          placeholder={actualPlaceholder}
          placeholderTextColor={PLACEHOLDER_TEXT}
          underlineColorAndroid={color.transparent}
          {...otherProps}
          style={[inputStyles, FLEX_ON]}
          ref={forwardedRef}
          onFocus={onFocusFunc}
          onBlur={onBlurFunc}
        />
        {isPayment && <Text style={PAYMENT} preset="title" text="BYN" />}
      </View>
    </View>
  )
}
