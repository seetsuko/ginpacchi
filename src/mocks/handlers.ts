import { graphql } from 'msw'

export const handlers = [
  graphql.query('GetUser', (req, res, ctx) => {
    return res(
      ctx.data({
        user: {
          __typename: 'User',
          id: 'dfghj',
          firstName: 'ばらぞの',
          lastName: 'あゔちゃん',
        },
      }),
    )
  }),
]
