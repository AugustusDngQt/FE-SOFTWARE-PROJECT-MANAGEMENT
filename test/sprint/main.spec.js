// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Builder, By } from "selenium-webdriver";
import { login } from "../login/functions/login.func.js";
import { pauseBetweenCases } from "../utils.js";
import { openStartSprintDialog } from "./functions/openStartSprintDialog.func.js";
import { testEndDateIsInvalid } from "./functions/testEndDateIsInvalid.func.js";
import { startSprintSuccessfully } from "./functions/startSprintSuccessfully.func.js";

const testCaseSprint = async () => {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await login(driver);
    await pauseBetweenCases(2000);
    await runUpdateSprintTests(driver);
  } catch (error) {
    console.log(error);
  } finally {
    await driver.sleep(5000);
    await driver.quit();
  }
};

const runUpdateSprintTests = async (driver) => {
  await openStartSprintDialog(driver);
  await pauseBetweenCases(4000);
  // Find Elements
  const startSprintDialogElement = driver.findElement(By.id("radix-:rn:"));
  const selectDurationElement = startSprintDialogElement.findElement(
    By.css("select")
  );
  const endDateElement = startSprintDialogElement.findElement(By.id("endDate"));
  const startSprintButtonElement = startSprintDialogElement.findElement(
    By.name("Start sprint")
  );

  await testEndDateIsInvalid(
    driver,
    selectDurationElement,
    endDateElement,
    startSprintButtonElement
  );
  await pauseBetweenCases(4000);
  await startSprintSuccessfully(
    selectDurationElement,
    startSprintButtonElement
  );
};

testCaseSprint();
