import moment from "moment"

const types = {
  ru: "DD.MM.YYYY",
  sendingToServer: "MM/DD/YYYY",
  picker: "YYYY-MM-DD",
  def: null,
}
export const dataHelper = (date, type = "ru") => {
  return moment(date).format(types[type])
}
