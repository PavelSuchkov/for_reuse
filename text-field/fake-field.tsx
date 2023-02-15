import { TouchableOpacity } from "react-native"
import { Text } from ".."
import { ms } from "react-native-size-matters"
import { color, spacing } from "../../theme"
import { SystemModal } from "../../hoc/systemModal/systemModal"
import React from "react"

export const FakeField = ({
  filedKey,
  isOpenBottomMenu,
  setOpenBottomMenu,
  value = null,
  title,
  choiseItem,
  children = null,
  style = null,
}) => {
  const isOpen = filedKey === isOpenBottomMenu
  return (
    <>
      <TouchableOpacity
        onPress={() => setOpenBottomMenu(filedKey)}
        activeOpacity={0.7}
        style={[style ? style : FAKE_FIELD, BASE]}
      >
        {!value ? (
          children
        ) : (
          <Text style={[{ fontSize: ms(18, 0.5), color: color.disabled }]} text={value} />
        )}
      </TouchableOpacity>
      <SystemModal isOpen={isOpen} title={title} onClose={() => setOpenBottomMenu(null)}>
        {choiseItem}
      </SystemModal>
    </>
  )
}
const BASE = {
  borderWidth: 1,
  borderRadius: 5,
  borderColor: color.palette.gray,
}
const FAKE_FIELD = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[8],
}
