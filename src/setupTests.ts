/// <reference path="./types/global.d.ts" />
import '@testing-library/jest-dom';

beforeAll(() => {
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
});
