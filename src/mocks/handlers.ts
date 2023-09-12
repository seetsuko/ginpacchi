import { graphql } from 'msw';
import { users } from './mockData'

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
    const { staffName, shift } = req.variables;
    const newUser = {
      id: String(users.length + 1), // ユーザーIDを自動生成
      staffName,
      shift: {
        date: shift.date,
        startTime: shift.startTime,
        endTime: shift.endTime
      },
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
    const { id, name, shift } = req.variables;
    const userIndex = users.findIndex((u) => u.id === id);

    if (userIndex !== -1) {
      users[userIndex].staffName = name;
      users[userIndex].shift.startTime = shift.startTime;
      users[userIndex].shift.endTime = shift.endTime;

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
