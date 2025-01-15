package com.demo.pim

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import org.openqa.selenium.By
import org.openqa.selenium.Keys
import org.openqa.selenium.WebDriver
import org.openqa.selenium.WebElement
import org.openqa.selenium.interactions.Actions

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.util.KeywordUtil
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.driver.DriverFactory
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import internal.GlobalVariable

public class PimAdd {

	String userPath = System.getProperty("user.dir") + "/Data Files/photos/"

	public void clickPimMenu() {
		WebUI.click(findTestObject('Object Repository/sidebar/PIM'))
	}

	public void clickAddButton() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/pimPage/ButtonAdd'), 2)
		WebUI.click(findTestObject('Object Repository/pimPage/ButtonAdd'))
	}

	public void insertProfile(String fileName) {
		String fullPath = userPath + fileName
		WebUI.uploadFile(findTestObject('Object Repository/pimPage/insertImage'), fullPath)
	}

	public void inputFirstName(String firstName) {
		WebUI.setText(findTestObject('Object Repository/pimPage/inputFirstName'), firstName)
	}

	public void inputMiddleName(String middleName) {
		WebUI.setText(findTestObject('Object Repository/pimPage/inputMiddleName'), middleName)
	}

	public void inputLastName(String lastName) {
		WebUI.setText(findTestObject('Object Repository/pimPage/inputLastName'), lastName)
	}

	public void inputEmployeeId(String employeeId) {
		WebDriver driver = DriverFactory.getWebDriver()
		WebElement clearEmployeeId = driver.findElement(By.xpath("//label[text()='Employee Id']/parent::div/following-sibling::div/input"))
		Actions actions = new Actions(driver);
		actions.click(clearEmployeeId)
				.keyDown(Keys.CONTROL)
				.sendKeys("a")
				.keyUp(Keys.CONTROL)
				.sendKeys(Keys.BACK_SPACE)
				.perform();
		WebUI.setText(findTestObject('Object Repository/pimPage/inputEmployeeId'), employeeId)
	}

	public void enabledUserLogin() {
		WebUI.click(findTestObject('Object Repository/pimPage/loginDetails'))
	}

	public void inputUsername(String username) {
		WebUI.setText(findTestObject('Object Repository/pimPage/inputUsername'), username)
	}

	public void changeStatus(String status) {
		WebUI.click(findTestObject('Object Repository/pimPage/status', [('status') : status]))
	}

	public void inputPassword(String password) {
		WebUI.setText(findTestObject('Object Repository/pimPage/inputPassword'), password)
	}

	public void inputConfirmPassword(String confirmPassword) {
		WebUI.setText(findTestObject('Object Repository/pimPage/inputConfirmPassword'), confirmPassword)
	}

	public void clickSaveButton() {
		WebUI.click(findTestObject('Object Repository/pimPage/buttonSave'))
	}

	public void searchEmployeeName(String employeeName) {
		WebUI.setText(findTestObject('Object Repository/pimPage/searchEmployeeName'), employeeName)
	}

	public void clickSearchButton() {
		WebUI.click(findTestObject('Object Repository/pimPage/buttonSearch'))
	}

	public void verifyDataPresent() {
		TestObject result = new TestObject().addProperty("result", ConditionType.EQUALS, "//span[text()[contains(.,'Record Found')]]")
		WebUI.verifyElementPresent(result, 2)
	}

	public void verifyDataTable(String[] data) {
		int j = 1

		for (int i = 0; i <data.size(); i++) {
			j++
			String actualData = WebUI.getText(findTestObject('Object Repository/pimPage/dataTable', [('index') : j]))
			KeywordUtil.logInfo("Actual Data: " + actualData)
			KeywordUtil.logInfo("Expected Data: " + data[i])

			WebUI.verifyMatch(actualData, data[i], false)
		}
	}
}
