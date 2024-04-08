import { fork } from 'effector'
import { Provider } from 'effector-react'
import { ReactElement } from 'react'

const scope = fork()

export const withEffector = (component: () => ReactElement) => () => (
  <Provider value={scope}>{component()}</Provider>
)
