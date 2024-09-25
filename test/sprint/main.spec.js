// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Builder, By } from "selenium-webdriver";
import { login } from "../login/functions/login.func.js";
import { getSprintElement, pauseBetweenCases } from "../utils.js";
import { testEndDateIsInvalid } from "./functions/testEndDateIsInvalid.func.js";
import { startSprintSuccessfully } from "./functions/startSprintSuccessfully.func.js";
import { openStartSprintDialog } from "./functions/openStartSprintDialog.func.js";
import { openLoginPage } from "../login/functions/openLoginPage.func.js";

const testCaseSprint = async () => {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await openLoginPage(driver);
    await login(driver, "duykhanhtran17062003@gmail.com", "11111111");
    await pauseBetweenCases(4000);
    await runUpdateSprintTests(driver);
  } catch (error) {
    console.log(error);
  } finally {
    await driver.sleep(5000);
    await driver.quit();
  }
};

const runUpdateSprintTests = async (driver) => {
  const sprintElement = await getSprintElement(driver, "Top");
  const openDialogButtonElement = await sprintElement.findElement(
    By.className("open-dialog-start-sprint-button")
  );
  const dialogId = await openDialogButtonElement.getAttribute("aria-controls");
  await openStartSprintDialog(openDialogButtonElement);
  await pauseBetweenCases(4000);
  // Find Elements
  const startSprintDialogElement = await driver.findElement(By.id(dialogId));
  const selectDurationElement = await startSprintDialogElement.findElement(
    By.css("select")
  );
  const endDateElement = await startSprintDialogElement.findElement(
    By.id("endDate")
  );
  const startSprintButtonElement = await startSprintDialogElement.findElement(
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
