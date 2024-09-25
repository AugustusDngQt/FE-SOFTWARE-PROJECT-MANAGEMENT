// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { changeDuration, pauseBetweenCases } from "../../utils.js";

export const startSprintSuccessfully = async (
  selectDurationElement,
  startSprintButtonElement
) => {
  await changeDuration(selectDurationElement, "1 week");
  await pauseBetweenCases(2500);
  await startSprintButtonElement.click();
};
