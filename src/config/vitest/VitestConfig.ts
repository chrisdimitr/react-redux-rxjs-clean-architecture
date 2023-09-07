import "@testing-library/jest-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

expect.extend(matchers);

Object.defineProperty(global.self, "crypto", {
  value: {
    // @ts-ignore
    getRandomValues: (arr: any) => crypto.randomBytes(arr.length)
  }
});

// @ts-ignore
global.crypto.subtle = {}; // this gets around the 'auth0-spa-js must run on a secure origin' error
