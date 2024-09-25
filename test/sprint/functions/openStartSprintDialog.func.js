// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { By } from "selenium-webdriver";

export const openStartSprintDialog = async (driver) => {
  const sprintListElement = await driver.findElements(By.css(".sprint-ne"));
  const startSprintButtonElement = sprintListElement[0].findElement(
    By.css("button > span")
  );
  await startSprintButtonElement.click();
};
