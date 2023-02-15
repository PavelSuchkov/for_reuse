import { LogBox } from "react-native"

// prettier-ignore
console.disableYellowBox = true
LogBox.ignoreLogs([
  "Require cycle:",
])
