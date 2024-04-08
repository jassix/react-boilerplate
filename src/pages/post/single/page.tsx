import { FC } from 'react'

interface PageProps {
  id?: string
}

export const PostSinglePage: FC<PageProps> = ({ id }) => {
  return <div>page #{id}</div>
}
