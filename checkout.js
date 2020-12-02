const {Builder, By, Key, until, ActionSequence} = require('selenium-webdriver');
require('dotenv').config()
const email1 = process.env.EMAIL1;
const nume1 = process.env.NUME1;

const email2 = process.env.EMAIL2;
const nume2 = process.env.NUME2;
const url = process.env.CHECKOUT_URL;
(async function() {
  let driver = new Builder().forBrowser('chrome').build();
  try {
	let today = new Date();

	await driver.get(url);
	await driver.sleep(1000)
    await driver.findElement(By.xpath("//input[@type='email']")).sendKeys(email1);
	await driver.findElement(By.xpath("//input[@type='text']")).sendKeys(nume1);
	await driver.findElement(By.css('.freebirdFormviewerComponentsQuestionDateDateInputs .quantumWizTextinputPaperinputInput')).sendKeys(today.toISOString().split("T")[0].split("-")[1]);
	await driver.findElement(By.css('.freebirdFormviewerComponentsQuestionDateDateInputs .quantumWizTextinputPaperinputInput')).sendKeys(today.toISOString().split("T")[0].split("-")[2]);
	await driver.findElement(By.css('.freebirdFormviewerComponentsQuestionDateDateInputs .quantumWizTextinputPaperinputInput')).sendKeys(today.toISOString().split("T")[0].split("-")[0]);
	await driver.findElement(By.css('div.freebirdFormviewerComponentsQuestionTimeRoot > div > div:nth-child(1) > div.quantumWizTextinputPaperinputEl.freebirdFormviewerComponentsQuestionTimeTimeInput.freebirdThemedInput.freebirdThemedInputDarkerDisabled.freebirdFormviewerComponentsQuestionTimeInput.modeLight > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input')).sendKeys('17');		
	await driver.findElement(By.css('div.freebirdFormviewerComponentsQuestionTimeRoot > div > div:nth-child(3) > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input')).sendKeys('00');		
	await driver.findElement(By.xpath("//div[@role='button']")).sendKeys(Key.ENTER)
	await driver.sleep(2000)
	
	await driver.get(url);
	await driver.sleep(1000)
    await driver.findElement(By.xpath("//input[@type='email']")).sendKeys(email2);
	await driver.findElement(By.xpath("//input[@type='text']")).sendKeys(nume2);
	await driver.findElement(By.css('.freebirdFormviewerComponentsQuestionDateDateInputs .quantumWizTextinputPaperinputInput')).sendKeys(today.toISOString().split("T")[0].split("-")[1]);
	await driver.findElement(By.css('.freebirdFormviewerComponentsQuestionDateDateInputs .quantumWizTextinputPaperinputInput')).sendKeys(today.toISOString().split("T")[0].split("-")[2]);
	await driver.findElement(By.css('.freebirdFormviewerComponentsQuestionDateDateInputs .quantumWizTextinputPaperinputInput')).sendKeys(today.toISOString().split("T")[0].split("-")[0]);
	await driver.findElement(By.css('div.freebirdFormviewerComponentsQuestionTimeRoot > div > div:nth-child(1) > div.quantumWizTextinputPaperinputEl.freebirdFormviewerComponentsQuestionTimeTimeInput.freebirdThemedInput.freebirdThemedInputDarkerDisabled.freebirdFormviewerComponentsQuestionTimeInput.modeLight > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input')).sendKeys('17');		
	await driver.findElement(By.css('div.freebirdFormviewerComponentsQuestionTimeRoot > div > div:nth-child(3) > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input')).sendKeys('00');		
	await driver.findElement(By.xpath("//div[@role='button']")).sendKeys(Key.ENTER)
	await driver.sleep(2000)
  } catch(e) {
	console.log("err", e)
  }finally {
    driver.quit();
  }

}());