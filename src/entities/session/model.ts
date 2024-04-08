import { createEvent, createStore } from 'effector'

export const $isAuth = createStore<boolean>(false)
export const authChanged = createEvent<boolean>()

$isAuth.on(authChanged, (_, payload) => payload)
