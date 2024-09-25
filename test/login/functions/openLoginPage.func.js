// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const openLoginPage = async (driver) => {
  await driver.get("http://localhost:3000");
  await driver.manage().window().maximize();
  await driver.navigate().to("http://localhost:3000/login");
};
