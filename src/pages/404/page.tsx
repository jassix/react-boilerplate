import { Router } from '~/shared/routing'
import { Link } from '~/shared/ui/atoms/link'

export const NotFoundPage = () => (
  <div>
    page not found <Link to={Router.Index()}>go back</Link>
  </div>
)
