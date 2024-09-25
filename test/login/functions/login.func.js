// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { By } from "selenium-webdriver";
import { typeTextSlowly } from "../../utils.js";

export const login = async (driver, username, password) => {
  const usernameElement = driver.findElement(By.id("userName"));
  const passwordElement = driver.findElement(By.id("password"));
  const loginButtonElement = driver.findElement(
    By.css("button[type='submit']")
  );
  await typeTextSlowly(usernameElement, username);
  await typeTextSlowly(passwordElement, password);
  await loginButtonElement.click();
};
