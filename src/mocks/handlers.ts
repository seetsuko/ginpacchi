import { graphql } from 'msw'

export const handlers = [
  // Capture a "Login" mutation
  graphql.get('https://dekitate.com/book', (_, res, ctx) => {
      return res(
        ctx.json({
              id: 'dfghj',
              name: "あゔちゃん"
            })
      )
          })
    ]

    return res(
      ctx.data({
        user: {
          __typename: 'User',
          id: 'dfghj',
          firstName: 'ばらぞの',
          lastName: 'あゔちゃん',
        },
      })
    )
  }),
]