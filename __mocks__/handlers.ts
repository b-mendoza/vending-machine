import { rest } from 'msw';

import { APIResponse } from 'typings/shared';

import { apiResponse } from './apiResponse';

export const handlers = [
  rest.get<Record<string, unknown>, APIResponse>(
    'https://vending-machine-test.vercel.app/api/products',
    (_, res, context) =>
      res(context.delay(100), context.status(200), context.json(apiResponse)),
  ),
];
