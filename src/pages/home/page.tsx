import { Router } from '~/shared/routing'
import { Link } from '~/shared/ui/atoms/link'

export const HomePage = () => {
  return (
    <div>
      page <Link to={Router.Index()}>Hello</Link>
      <button
        onClick={() => {
          console.log('test')
        }}
      >
        Break the world
      </button>
      ;
    </div>
  )
}
