// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { typeTextSlowly } from "../../utils.js";

export const testEmailIncorrect = async (
  usernameElement,
  passwordElement,
  loginButtonElement
) => {
  await typeTextSlowly(usernameElement, "duykhanhtran17062002@gmail.com");
  await typeTextSlowly(passwordElement, "11111111");
  await loginButtonElement.click();
};
