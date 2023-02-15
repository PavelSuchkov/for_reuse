import * as ReactNativeKeychain from "react-native-keychain"
//если будут данные для защиты
export async function save(username: string, password: string, server?: string) {
  if (server) {
    await ReactNativeKeychain.setInternetCredentials(server, username, password)
    return true
  } else {
    return ReactNativeKeychain.setGenericPassword(username, password)
  }
}

export async function load(server?: string) {
  if (server) {
    const creds = await ReactNativeKeychain.getInternetCredentials(server)
    return {
      username: creds ? creds.username : null,
      password: creds ? creds.password : null,
      server,
    }
  } else {
    const creds = await ReactNativeKeychain.getGenericPassword()
    if (typeof creds === "object") {
      return {
        username: creds.username,
        password: creds.password,
        server: null,
      }
    } else {
      return {
        username: null,
        password: null,
        server: null,
      }
    }
  }
}

export async function reset(server?: string) {
  if (server) {
    await ReactNativeKeychain.resetInternetCredentials(server)
    return true
  } else {
    const result = await ReactNativeKeychain.resetGenericPassword()
    return result
  }
}
