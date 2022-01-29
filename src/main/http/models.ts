export type Diet = 'omnivore' | 'pescatarian' | 'vegetarian' | 'vegan'

export type UnconfirmedGuest = {
  name: string
}

export type ConfirmedGuestComing = UnconfirmedGuest & {
  coming: true
  diet: Diet
  comments?: string
}

export type ConfirmedGuestNotComing = UnconfirmedGuest & {
  coming: false
}

export type ConfirmedGuest = ConfirmedGuestComing | ConfirmedGuestNotComing

export type Guest = UnconfirmedGuest | ConfirmedGuest

export type Party = { email: string; code: string; guests: Guest[] }
