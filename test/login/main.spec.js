// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Builder } from "selenium-webdriver";
import { pauseBetweenCases } from "../utils.js";
import { openLoginPage } from "./functions/openLoginPage.func.js";
import { login } from "./functions/login.func.js";

const testCaseLogin = async () => {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await openLoginPage(driver);
    await pauseBetweenCases(3500);
    await login(driver, "duykhanhtran17062002@gmail.com", "11111111");
    await pauseBetweenCases(3500);
    await login(driver, "duykhanhtran17062003@gmail.com", "11111112");
    await pauseBetweenCases(3500);
    await login(driver, "duykhanhtran17062003@gmail.com", "11111111");
  } catch (error) {
    console.log(error);
  } finally {
    await driver.sleep(3000);
    await driver.quit();
  }
};

testCaseLogin();
