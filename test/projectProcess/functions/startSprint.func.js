// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { getSprintElement, pauseBetweenCases } from "../../utils.js";
import { By } from "selenium-webdriver";
import { createIssue } from "./createIssue.func.js";
import { startSprintSuccessfully } from "../../sprint/functions/startSprintSuccessfully.func.js";
import { openStartSprintDialog } from "../../sprint/functions/openStartSprintDialog.func.js";

export const startSprint = async (driver) => {
  const buttonCreateSprintElement = await driver.findElement(
    By.css(".create-sprint")
  );
  await buttonCreateSprintElement.click();
  await pauseBetweenCases(3000);
  const sprintElement = await getSprintElement(driver, "Bottom");
  await pauseBetweenCases(2000);
  const openDialogButtonElement = await sprintElement.findElement(
    By.className("open-dialog-start-sprint-button")
  );
  const dialogId = await openDialogButtonElement.getAttribute("aria-controls");
  await createIssue(sprintElement, "Issue 1");
  await pauseBetweenCases(1500);
  await createIssue(sprintElement, "Issue 2");
  await pauseBetweenCases(1000);
  await openStartSprintDialog(openDialogButtonElement);
  await pauseBetweenCases(3000);
  const startSprintDialogElement = await driver.findElement(By.id(dialogId));
  const selectDurationElement = await startSprintDialogElement.findElement(
    By.css("select")
  );
  const startSprintButtonElement = await startSprintDialogElement.findElement(
    By.name("Start sprint")
  );
  await startSprintSuccessfully(
    selectDurationElement,
    startSprintButtonElement
  );

  return sprintElement;
};
