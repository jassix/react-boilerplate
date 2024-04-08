import { FC } from 'react'

interface PageProps {
  error: Error
}

export const ErrorPage: FC<PageProps> = ({ error }) => {
  return <div>something went wrong! {error.message}</div>
}
