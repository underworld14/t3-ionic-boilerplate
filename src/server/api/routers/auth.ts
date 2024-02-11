// import { hash, compare } from 'bcrypt';
import { omit } from 'lodash-es';

import { createTRPCRouter, publicProcedure, authorizedProcedure } from '~/server/api/trpc';
import { TRPCError } from '@trpc/server';
// import { registerSchema } from '~/schemas/register-schema';
// import { loginSchema } from '~/schemas/login-schema';
// import { encodeJwtToken } from '~/server/utils/security';

export const authRouter = createTRPCRouter({
  // register: publicProcedure.input(registerSchema).mutation(async ({ ctx, input }) => {
  //   // Check if email is already registered
  //   const emailExists = await ctx.db.users.findFirst({
  //     where: {
  //       email: input.email,
  //     },
  //   });

  //   if (emailExists) {
  //     throw new TRPCError({
  //       code: 'BAD_REQUEST',
  //       message: 'Email sudah terdaftar',
  //     });
  //   }

  //   await ctx.db.users.create({
  //     data: {
  //       email: input.email,
  //       encrypted_password: await hash(input.password, 10),
  //     },
  //   });

  //   return {
  //     message: 'Berhasil mendaftar, silahkan login',
  //   };
  // }),
  // login: publicProcedure.input(loginSchema).mutation(async ({ ctx, input }) => {
  //   const user = await ctx.db.users.findFirst({
  //     where: {
  //       email: input.email,
  //     },
  //   });

  //   if (!user) {
  //     throw new TRPCError({
  //       code: 'BAD_REQUEST',
  //       message: 'Invalid email or password',
  //     });
  //   }

  //   if (!user.encrypted_password) {
  //     throw new TRPCError({
  //       code: 'BAD_REQUEST',
  //       message: 'Invalid email or password',
  //     });
  //   }

  //   const valid = await compare(input.password, user.encrypted_password);

  //   if (!valid) {
  //     throw new TRPCError({
  //       code: 'BAD_REQUEST',
  //       message: 'Invalid email or password',
  //     });
  //   }

  //   const token = await encodeJwtToken({
  //     userId: user.id,
  //   });

  //   return {
  //     data: omit(user, 'password'),
  //     token,
  //   };
  // }),

  check: authorizedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.users.findFirst({
      where: {
        id: ctx.user.id,
      },
    });

    if (!user) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'Invalid token',
      });
    }

    return {
      data: omit(user, 'password'),
    };
  }),
});
