// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { By } from "selenium-webdriver";

export const openStartSprintDialog = async (startSprintButtonElement) => {
  const startSprintSpanElement = await startSprintButtonElement.findElement(
    By.css("span")
  );

  await startSprintSpanElement.click();
};
