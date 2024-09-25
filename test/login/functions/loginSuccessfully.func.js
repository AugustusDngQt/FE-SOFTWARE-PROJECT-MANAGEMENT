// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { typeTextSlowly } from "../../utils.js";

export const loginSuccessfully = async (
  usernameElement,
  passwordElement,
  loginButtonElement
) => {
  await typeTextSlowly(usernameElement, "duykhanhtran17062003@gmail.com");
  await typeTextSlowly(passwordElement, "11111111");
  await loginButtonElement.click();
};
