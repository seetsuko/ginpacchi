import { graphql } from 'msw';

// モックデータ
const users = [
  {
    id: 'haddfaefa',
    staffName: 'うちは サスケ',
  },
  {
    id: 'lkjaoijap',
    staffName: 'うずまき ナルト',
  },
  {
    id: ',bpsrtlkh',
    staffName: '春野 サクラ',
  },
  
];

// GraphQLのクエリをモック
const handlers = [
  // ユーザー一覧を取得するクエリ
  graphql.query('GetUsers', (req, res, ctx) => {
    return res(
      ctx.data({
        users,
      })
    );
  }),

  // 特定のユーザーを取得するクエリ
  graphql.query('GetUser', (req, res, ctx) => {
    const { id } = req.variables;
    const user = users.find((u) => u.id === id);

    if (user) {
      return res(
        ctx.data({
          user,
        })
      );
    } else {
      return res(
        ctx.errors([
          {
            message: 'User not found',
            extensions: {
              code: 'NOT_FOUND',
            },
          },
        ])
      );
    }
  }),

  // ユーザーを作成するミューテーション
  graphql.mutation('CreateUser', (req, res, ctx) => {
    const { staffName } = req.variables;
    const newUser = {
      id: String(users.length + 1), // ユーザーIDを自動生成
      staffName,
    };
    users.push(newUser);

    return res(
      ctx.data({
        createUser: newUser,
      })
    );
  }),

  // ユーザーを更新するミューテーション
  graphql.mutation('UpdateUser', (req, res, ctx) => {
    const { id, name } = req.variables;
    const userIndex = users.findIndex((u) => u.id === id);

    if (userIndex !== -1) {
      users[userIndex].staffName = name;

      return res(
        ctx.data({
          updateUser: users[userIndex],
        })
      );
    } else {
      return res(
        ctx.errors([
          {
            message: 'User not found',
            extensions: {
              code: 'NOT_FOUND',
            },
          },
        ])
      );
    }
  }),

  // ユーザーを削除するミューテーション
  graphql.mutation('DeleteUser', (req, res, ctx) => {
    const { id } = req.variables;
    const userIndex = users.findIndex((u) => u.id === id);

    if (userIndex !== -1) {
      const deletedUser = users.splice(userIndex, 1)[0];

      return res(
        ctx.data({
          deleteUser: deletedUser,
        })
      );
    } else {
      return res(
        ctx.errors([
          {
            message: 'User not found',
            extensions: {
              code: 'NOT_FOUND',
            },
          },
        ])
      );
    }
  }),
];

export { handlers };
