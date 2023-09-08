import { graphql } from 'msw'

export const handlers = [
  graphql.query('GetUser', (req, res, ctx) => {
    return res(
      ctx.data({
        user: {
          __typename: 'User',
          id: 'dfghj',
          staffName: '長門　ひのと',
        },
      }),
    )
  }),
]

graphql.mutation('EditUser', (req, res, ctx) => {
  const { staffName } = req.variables;

  return res(
    ctx.data({
      editUser: {
        __typename: 'User',
        id: 'dfghj',
        staffName: staffName,
      },
    }),
  );
}),

graphql.mutation('DeleteUser', (req, res, ctx) => {
  const { id } = req.variables;

  return res(
    ctx.data({
      deleteUser: {
        __typename: 'User',
        id: id,
      },
    }),
  );
})

