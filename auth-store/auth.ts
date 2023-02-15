import { Instance, types } from "mobx-state-tree"
import { TitleModel } from "../models"

const { model, string, optional, maybeNull, number, array } = types

const UserModel = model("SkillsModel").props({
  id: number,
  phone: maybeNull(string),
  name: maybeNull(string),
})
export const AuthModel = model("Cv").props({
  id: maybeNull(number),
  title: maybeNull(string),
  photo: maybeNull(string),
  user: maybeNull(UserModel),
  position: optional(TitleModel, {}),
  skills: optional(array(TitleModel), []),
  hourly_rate: maybeNull(string),
  day_rate: maybeNull(string),
})

export type Cv_Type = Instance<typeof AuthModel>
