import React from "react"
import { ViewProps } from "react-native"

export interface LoaderProps extends ViewProps {
  loader: boolean,
  children?: React.ReactNode
}
