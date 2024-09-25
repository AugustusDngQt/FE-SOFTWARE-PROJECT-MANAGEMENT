// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Builder, By } from "selenium-webdriver";
import { login } from "../login/functions/login.func.js";
import { getSprintElement, pauseBetweenCases } from "../utils.js";
import { startSprint } from "./functions/startSprint.func.js";
import { addAssignee } from "./functions/addAssignee.func.js";
import { openLoginPage } from "../login/functions/openLoginPage.func.js";

const testProjectProcess = async () => {
  const adminDriver = await new Builder().forBrowser("chrome").build();
  const memberDriver = await new Builder().forBrowser("chrome").build();
  try {
    const sprintElement = await runProjectProcessTestsAdmin(adminDriver);
    await pauseBetweenCases(2000);
    await runProjectProcessTestsMember(memberDriver);
    await pauseBetweenCases(2000);
    const openDialogCompletedSprintElement = await sprintElement.findElement(
      By.className("open-dialog-complete-sprint-button")
    );
    await openDialogCompletedSprintElement.click();
    await pauseBetweenCases(1000);
    const completedSprintElement = await adminDriver.findElement(
      By.name("Complete sprint")
    );
    await completedSprintElement.click();
  } catch (error) {
    console.log(error);
  } finally {
    await pauseBetweenCases(4000);
    await adminDriver.quit();
    await memberDriver.quit();
  }
};

const runProjectProcessTestsAdmin = async (driver) => {
  await openLoginPage(driver);
  await login(driver, "duykhanhtran17062003@gmail.com", "11111111");
  await pauseBetweenCases(4000);
  const sprintElement = await startSprint(driver);
  await pauseBetweenCases(2500);
  const issueElements = await sprintElement.findElements(By.className("issue"));
  const selectElements = await issueElements[0].findElements(
    By.css('button[data-state="closed"]')
  );
  await selectElements[1].click();
  await addAssignee(driver, 2);
  await pauseBetweenCases(1000);
  await selectElements[0].sendKeys("DONE");
  return sprintElement;
};
const runProjectProcessTestsMember = async (driver) => {
  await openLoginPage(driver);
  await login(driver, "trannduykhanh@dtu.edu.vn", "22222222");
  await pauseBetweenCases(4000);
  const sprintElement = await getSprintElement(driver, "Bottom");
  await pauseBetweenCases(2500);
  const issueElements = await sprintElement.findElements(By.className("issue"));
  const selectElements = await issueElements[1].findElements(
    By.css('button[data-state="closed"]')
  );
  await selectElements[1].click();
  await addAssignee(driver, 1);
  await pauseBetweenCases(1000);
  await selectElements[0].sendKeys("DONE");
};

testProjectProcess();
