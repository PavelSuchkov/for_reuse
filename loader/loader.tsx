import React from "react"
import { ActivityIndicator, View, ViewStyle } from "react-native"
import { color } from "../../theme"
import { LoaderProps } from "./loader.props"

export const Loader = (props: LoaderProps) => {
  const { loader = true, children } = props
  return (
    <>
      {loader ? (
        <View style={CONTAINER_LOADER}>
          <ActivityIndicator size="large" color={color.palette.purple} />
        </View>
      ) : (
        <>{children}</>
      )}
    </>
  )
}
const CONTAINER_LOADER: ViewStyle = {
  flex: 1,
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
}
