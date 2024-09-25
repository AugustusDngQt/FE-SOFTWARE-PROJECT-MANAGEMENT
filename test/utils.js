// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const clearFields = async (...elements) => {
  await Promise.all(elements.map((element) => element.clear()));
};

export const typeTextSlowly = async (element, text, delay = 50) => {
  await clearFields(element);
  for (let i = 0; i < text.length; i++) {
    await element.sendKeys(text.charAt(i));
    await new Promise((r) => setTimeout(r, delay));
  }
};

export const pauseBetweenCases = async (time = 2000) => {
  await new Promise((resolve) => setTimeout(resolve, time));
};

export const getDateMinusDays = (days) => {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - days);
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return `${year}-${month}-${day}`;
};

export const setValueInputTypeDate = async (driver, element, value) => {
  await driver.executeScript(
    `function setNativeValue(element, value) {
        const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
        const prototype = Object.getPrototypeOf(element);
        const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
  
        if (valueSetter && valueSetter !== prototypeValueSetter) {
          prototypeValueSetter.call(element, value);
        } else {
          valueSetter.call(element, value);
        }
  
        var event = new Event('input', { bubbles: true });
        element.dispatchEvent(event);
      }
  
      setNativeValue(arguments[0], arguments[1]);
    `,
    element,
    value
  );
};

export const changeDuration = async (element, value) => {
  await element.sendKeys(value);
};
