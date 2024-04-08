import { Router } from '~/shared/routing'
import { Link } from '~/shared/ui/atoms/link'

export const HomePage = () => {
  return (
    <div>
      page <Link to={Router.Index()}>Hello</Link>
      <button
        onClick={() => {
          throw new Error('sentry hi')
        }}
      >
        Break the world
      </button>
      ;
    </div>
  )
}
