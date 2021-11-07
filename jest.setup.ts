import '@testing-library/jest-dom/extend-expect';

import { mwsServer } from '__mocks__/server';

beforeAll(() => mwsServer.listen());

afterEach(() => mwsServer.resetHandlers());

afterAll(() => mwsServer.close());
