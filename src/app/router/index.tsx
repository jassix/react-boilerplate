import { match } from 'ts-pattern'

import { BaseLayout, ContentSlot } from '~/app/layouts'
import { NotFoundPage } from '~/pages/404'
import { HomePage } from '~/pages/home'
import { PostListPage } from '~/pages/post/list'
import { PostSinglePage } from '~/pages/post/single'
import { Router } from '~/shared/routing'

export const ApplicationRouter = () => {
  const router = Router.useRoute(['Index', 'PostList', 'PostSingle'])

  return match(router)
    .with({ name: 'Index' }, () => (
      <BaseLayout>
        <ContentSlot>
          <HomePage />
        </ContentSlot>
      </BaseLayout>
    ))
    .with({ name: 'PostList' }, () => (
      <BaseLayout>
        <ContentSlot>
          <PostListPage />
        </ContentSlot>
      </BaseLayout>
    ))
    .with({ name: 'PostSingle' }, ({ params }) => (
      <BaseLayout>
        <ContentSlot>
          <PostSinglePage {...params} />
        </ContentSlot>
      </BaseLayout>
    ))
    .otherwise(() => <NotFoundPage />)
}
