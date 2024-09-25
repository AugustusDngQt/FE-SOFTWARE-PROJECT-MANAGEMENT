// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { By } from "selenium-webdriver";
import { openLoginPage } from "./openLoginPage.func.js";
import { loginSuccessfully } from "./loginSuccessfully.func.js";

export const login = async (driver) => {
  await openLoginPage(driver);
  const usernameElement = driver.findElement(By.id("userName"));
  const passwordElement = driver.findElement(By.id("password"));
  const loginButtonElement = driver.findElement(
    By.css("button[type='submit']")
  );
  await loginSuccessfully(usernameElement, passwordElement, loginButtonElement);
};
