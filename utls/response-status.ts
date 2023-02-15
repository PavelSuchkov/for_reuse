interface StatusesI {
  [key: string]: string
}
//status from back
// RESPOND_CONFIRMED_CHOICE = 'confirmed'
// RESPOND_PENDING_CHOICE = 'pending'
// RESPOND_REJECTED_CHOICE = 'rejected'
// RESPOND_CANCELED_CHOICE = 'canceled'

export const statuses: StatusesI = {
  pending: "На рассмотрении",
  confirmed: "Приглашение",
  rejected: "Отклонено",
  canceled: "Отменено",
}
export const statusesKeyPreset: StatusesI = {
  pending: "default",
  confirmed: "active",
  rejected: "rejected",
  canceled: "canceled",
}
