// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { By } from "selenium-webdriver";
import { pauseBetweenCases, typeTextSlowly } from "../../utils.js";

export const createIssue = async (sprintElement, title) => {
  const buttonCreateIssueElement = await sprintElement.findElement(
    By.css(".create-issue")
  );
  await buttonCreateIssueElement.click();
  await pauseBetweenCases(1000);
  const inputTitleElement = await sprintElement.findElement(
    By.id("empty-issue-input")
  );
  await pauseBetweenCases(1000);
  await typeTextSlowly(inputTitleElement, title);
  const buttonSubmitElement = await sprintElement.findElement(
    By.css(".save-change")
  );
  await buttonSubmitElement.click();
};
