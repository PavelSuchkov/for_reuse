// import { toJS } from "mobx"
import { flow, types } from "mobx-state-tree"
import { withEnvironment, withRootStore } from ".."
import * as storage from "../../utils/storage"

export const AuthStoreModel = types
  .model("AuthStore")
  .props({
    phone: types.maybeNull(types.string),
    pin: types.maybeNull(types.string),
  })
  .actions((self) => ({
    setData: (key, data) => {
      self[key] = data
    },
  }))
  .extend(withEnvironment)
  .extend(withRootStore)
  .actions((self) => ({
    requestPin: flow(function* (navigation) {
      self.rootStore.loaderStore.setLoader("baseLoader", true)
      const body = {
        phone: self.phone,
      }
      const resp = yield self.environment.api.post("getPin", body, false)
      try {
        if (resp.status === "ok") {
          navigation.navigate("confirmPin")
        }
      } catch (e) {
        __DEV__ && console.tron.log(resp.status)
      } finally {
        self.rootStore.loaderStore.setLoader("baseLoader", false)
      }
    }),
    confirmPin: flow(function* (navigation) {
      const body = {
        phone: self.phone,
        pin: self.pin,
      }
      const resp = yield self.environment.api.post("confirmPin", body)
      const data = resp.data
      try {
        yield storage.save("TOKEN", data.token)
        yield self.rootStore.userStore.getMe()
        self.rootStore.choicesStore.getChoices()
        self.setData("pin", null)
        self.setData("phone", null)
        const isActivated = self.rootStore.userStore.user.is_activated
        // const isActivated = false
        if (!isActivated) {
          self.rootStore.userStore.saveData("editMode", true)
        }
        self.rootStore.userStore.saveData("token", data.token)
        navigation.navigate(isActivated ? "catalog" : "profile")
      } catch (e) {
        __DEV__ && console.tron.log(resp.status)
      } finally {
        self.rootStore.loaderStore.setLoader("baseLoader", false)
      }
    }),
    refreshToken: flow(function* (token: string = null) {
      const body = {
        token: token,
      }
      let resp = yield self.environment.api.post("refreshToken", body)
      const data = resp.data
      try {
        // self.rootStore.userStore.getMe()
        yield storage.save("TOKEN", data.token)
        // self.getUserData(3)
      } catch (e) {
        __DEV__ && console.tron.log(resp.status)
      } finally {
        self.rootStore.loaderStore.setLoader("baseLoader", false)
      }
    }),
  }))
  .actions((self) => ({
    isVerifyToken: flow(function* (token: string = null) {
      const body = {
        token: token,
      }
      let resp = yield self.environment.api.post("verifyToken", body)
      const data = resp.data
      try {
        self.refreshToken(data.token)
      } catch (e) {
        __DEV__ && console.tron.log(resp.status)
      } finally {
        self.rootStore.loaderStore.setLoader("baseLoader", false)
      }
    }),
  }))
