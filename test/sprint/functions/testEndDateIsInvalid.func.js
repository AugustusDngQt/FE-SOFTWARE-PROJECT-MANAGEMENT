// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  changeDuration,
  getDateMinusDays,
  pauseBetweenCases,
  setValueInputTypeDate,
} from "../../utils.js";

export const testEndDateIsInvalid = async (
  driver,
  selectDurationElement,
  endDateElement,
  startSprintButtonElement
) => {
  await changeDuration(selectDurationElement, "custom");
  const date = getDateMinusDays(1);
  await setValueInputTypeDate(driver, endDateElement, date);
  await pauseBetweenCases(2000);
  await startSprintButtonElement.click();
};
