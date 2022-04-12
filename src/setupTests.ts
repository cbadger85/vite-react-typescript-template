/// <reference path="./types/global.d.ts" />
// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';

beforeAll(() => {
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
});
