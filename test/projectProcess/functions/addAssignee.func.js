// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { By, until } from "selenium-webdriver";

export const addAssignee = async (driver, index) => {
  await driver.wait(until.elementLocated(By.css('[role="option"]')), 1000);
  let options = await driver.findElements(By.css('[role="option"]'));
  await options[index].click();
};
