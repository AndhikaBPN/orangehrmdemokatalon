package com.demo.login

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.util.KeywordUtil
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import internal.GlobalVariable

public class LoginAdmin {

	public void inputUsername(String username) {
		WebUI.waitForElementPresent(findTestObject('Object Repository/loginPage/inputUsername'), 2, FailureHandling.STOP_ON_FAILURE);
		WebUI.setText(findTestObject('Object Repository/loginPage/inputUsername'), username);
	}

	public void inputPassword(String password ) {
		WebUI.waitForElementPresent(findTestObject('Object Repository/loginPage/inputPassword'), 2, FailureHandling.STOP_ON_FAILURE);
		WebUI.setText(findTestObject('Object Repository/loginPage/inputPassword'), password);
	}

	public void clickButtonLogin() {
		WebUI.click(findTestObject('Object Repository/loginPage/buttonLogin'));
	}

	public void verifyCredentialsAlert() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/loginPage/invalidCredentials'), 5, FailureHandling.STOP_ON_FAILURE);
	}

	public void verifyCredentialsText(String expectedMsg) {
		WebUI.waitForElementPresent(findTestObject('Object Repository/loginPage/invalidCredentials'), 5)
		String actualMsg = WebUI.getText(findTestObject('Object Repository/loginPage/invalidCredentials'));

		boolean isMatch = WebUI.verifyMatch(actualMsg, expectedMsg, false, FailureHandling.OPTIONAL);

		if(!isMatch ) {
			KeywordUtil.markFailed("Message is not Match");
		}
	}

	public void verifyErrorMsg() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/loginPage/informationMsg'), 2);
	}
}
