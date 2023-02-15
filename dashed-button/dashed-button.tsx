import React from "react"
import { Button, Icon, Text } from "../../base-components"
import { View } from "react-native"
import { spacing } from "../../theme"
import { ms, vs } from "react-native-size-matters"

export const DashedButton = ({ text, onPress }) => {
  return (
    <Button preset="dashed" onPress={onPress}>
      <View style={{ padding: spacing[7], flexDirection: "row" }}>
        <Icon icon="plus" style={{ width: vs(24), height: vs(24), marginRight: spacing[5] }} />
        <Text style={{ fontSize: ms(14, 0.5) }} preset="disabled" text={text} />
      </View>
    </Button>
  )
}
