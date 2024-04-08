import { createGroup, createRouter } from '@swan-io/chicane'

export const Router = createRouter({
  Index: '/',

  ...createGroup('Post', '/post', {
    List: '/',
    Single: '/?:id',
  }),
})
