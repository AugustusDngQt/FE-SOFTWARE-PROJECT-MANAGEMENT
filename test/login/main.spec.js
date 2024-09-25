// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Builder, By } from "selenium-webdriver";
import { pauseBetweenCases } from "../utils.js";
import { openLoginPage } from "./functions/openLoginPage.func.js";
import { testEmailIncorrect } from "./functions/testPasswordIncorrect.func.js";
import { testPasswordIncorrect } from "./functions/testUserNameIncorrect.func.js";
import { loginSuccessfully } from "./functions/loginSuccessfully.func.js";

const testCaseLogin = async () => {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await openLoginPage(driver);
    const usernameElement = driver.findElement(By.id("userName"));
    const passwordElement = driver.findElement(By.id("password"));
    const loginButtonElement = driver.findElement(
      By.css("button[type='submit']")
    );

    await runLoginTests(usernameElement, passwordElement, loginButtonElement);
  } catch (error) {
    console.log(error);
  } finally {
    await driver.sleep(5000);
    await driver.quit();
  }
};

const runLoginTests = async (
  usernameElement,
  passwordElement,
  loginButtonElement
) => {
  await testEmailIncorrect(
    usernameElement,
    passwordElement,
    loginButtonElement
  );

  await pauseBetweenCases();

  await testPasswordIncorrect(
    usernameElement,
    passwordElement,
    loginButtonElement
  );

  await pauseBetweenCases();

  await loginSuccessfully(usernameElement, passwordElement, loginButtonElement);
};

testCaseLogin();
