// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { changeDuration, pauseBetweenCases } from "../../utils.js";

export const startSprintSuccessfully = async (
  selectDurationElement,
  startSprintButtonElement
) => {
  await changeDuration(selectDurationElement, "2 weeks");
  await pauseBetweenCases(2000);
  await startSprintButtonElement.click();
};
