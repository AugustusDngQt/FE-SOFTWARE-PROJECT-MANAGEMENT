// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Builder, By } from "selenium-webdriver";
import { login } from "../login/functions/login.func.js";
import { openLoginPage } from "../login/functions/openLoginPage.func.js";
import { pauseBetweenCases, typeTextSlowly } from "../utils.js";

const testCaseChat = async () => {
  const driverMember1 = await new Builder().forBrowser("chrome").build();
  const driverMember2 = await new Builder().forBrowser("chrome").build();
  try {
    await Promise.all([
      openLoginPage(driverMember1),
      openLoginPage(driverMember2),
    ]);
    await pauseBetweenCases(3000);
    await Promise.all([
      login(driverMember1, "duykhanhtran17062003@gmail.com", "11111111"),
      login(driverMember2, "trannduykhanh@dtu.edu.vn", "22222222"),
    ]);
    await pauseBetweenCases(3000);
    await runChatTest(driverMember1, driverMember2);
  } catch (error) {
    console.log(error);
  } finally {
    await pauseBetweenCases(3000);
    await driverMember1.quit();
    await driverMember2.quit();
  }
};

async function runChatTest(driver1, driver2) {
  // Member 1 gửi "Hello"
  await driver1
    .findElement(By.className("h-12 w-12 cursor-pointer rounded-full border-2"))
    .click();
  await pauseBetweenCases(2000); // chờ 2 giây
  const chatInput1 = await driver1.findElement(
    By.xpath("//input[@placeholder='Type your message...']")
  );
  await typeTextSlowly(chatInput1, "Hello");
  await chatInput1.sendKeys("\n");
  await pauseBetweenCases(2000); // chờ 2 giây

  // Member 2 nhận và trả lời "Hi! How can I help you?"
  await driver2
    .findElement(By.className("h-12 w-12 cursor-pointer rounded-full border-2"))
    .click();
  await pauseBetweenCases(2000); // chờ 2 giây
  const chatInput2 = await driver2.findElement(
    By.xpath("//input[@placeholder='Type your message...']")
  );
  const receivedMessage1 = await driver2.findElement(
    By.xpath("//div[contains(text(),'Hello')]")
  );
  if (receivedMessage1) {
    await typeTextSlowly(chatInput2, "Hi! How can I help you?");
    await chatInput2.sendKeys("\n");
  }
  await pauseBetweenCases(2000); // chờ 2 giây

  // Member 1 nhận và trả lời "How are you?"
  const receivedMessage2 = await driver1.findElement(
    By.xpath("//div[contains(text(),'Hi! How can I help you?')]")
  );
  if (receivedMessage2) {
    await pauseBetweenCases(2000); // chờ 2 giây
    await typeTextSlowly(chatInput1, "How are you?");
    await chatInput1.sendKeys("\n");
  }
  await pauseBetweenCases(2000); // chờ 2 giây

  // Member 2 nhận và trả lời "I’m doing well, thanks for asking! How about you?"
  const receivedMessage3 = await driver2.findElement(
    By.xpath("//div[contains(text(),'How are you?')]")
  );
  if (receivedMessage3) {
    await pauseBetweenCases(2000); // chờ 2 giây
    await typeTextSlowly(
      chatInput2,
      "I’m doing well, thanks for asking! How about you?"
    );
    await chatInput2.sendKeys("\n");
  }
  await pauseBetweenCases(2000); // chờ 2 giây

  // Member 1 nhận và trả lời "I am fine"
  const receivedMessage4 = await driver1.findElement(
    By.xpath(
      "//div[contains(text(),'I’m doing well, thanks for asking! How about you?')]"
    )
  );
  if (receivedMessage4) {
    await pauseBetweenCases(2000); // chờ 2 giây
    await typeTextSlowly(chatInput1, "I am fine");
    await chatInput1.sendKeys("\n");
  }
  await pauseBetweenCases(2000); // chờ 2 giây

  // Member 2 nhận và trả lời "Glad to hear that!"
  const receivedMessage5 = await driver2.findElement(
    By.xpath("//div[contains(text(),'I am fine')]")
  );
  if (receivedMessage5) {
    await pauseBetweenCases(2000); // chờ 2 giây
    await typeTextSlowly(chatInput2, "Glad to hear that!");
    await chatInput2.sendKeys("\n");
  }
  await pauseBetweenCases(2000); // chờ 2 giây

  // Member 1 nhận và nói "Goodbye"
  const receivedMessage6 = await driver1.findElement(
    By.xpath("//div[contains(text(),'Glad to hear that!')]")
  );
  if (receivedMessage6) {
    await pauseBetweenCases(2000); // chờ 2 giây
    await typeTextSlowly(chatInput1, "Goodbye");
    await chatInput1.sendKeys("\n");
  }
  await pauseBetweenCases(2000); // chờ 2 giây

  // Member 2 nhận và trả lời "Goodbye! Have a great day!"
  const receivedMessage7 = await driver2.findElement(
    By.xpath("//div[contains(text(),'Goodbye')]")
  );
  if (receivedMessage7) {
    await pauseBetweenCases(2000); // chờ 2 giây
    await typeTextSlowly(chatInput2, "Goodbye! Have a great day!");
    await chatInput2.sendKeys("\n");
  }
  await pauseBetweenCases(2000); // chờ 2 giây
}

testCaseChat();
