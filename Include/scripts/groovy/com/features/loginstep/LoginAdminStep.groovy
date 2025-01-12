package com.features.loginstep
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.demo.common.Common
import com.demo.dashboard.Dashboard
import com.demo.login.LoginAdmin
import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class LoginAdminStep {

	LoginAdmin loginAdmin = new LoginAdmin();
	Dashboard dashboard = new Dashboard();
	Common common = new Common()


	@Given("User is on login page")
	public void user_is_on_login_page() {
		common.openWebBrowser("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
	}

	@When("User enters username {string} and password {string}")
	public void User_enters_username_and_password(String username, String password) {
		loginAdmin.inputUsername(username);
		loginAdmin.inputPassword(password);
	}

	@And("User clicks on Login button")
	public void User_clicks_on_Login_button() {
		loginAdmin.clickButtonLogin();
	}

	@Then("User should be logged in to Admin Page")
	public void User_should_be_logged_in_to_Admin_Page() {
		dashboard.verifyUserProfilePresent()
	}

	@Then("User should see login error")
	public void User_should_see_login_error() {
		loginAdmin.verifyErrorMsg();
	}

	@Then("User should see alert error")
	public void User_should_see_alert_error() {
		loginAdmin.verifyCredentialsAlert();
		loginAdmin.verifyCredentialsText("Invalid credentials")
	}
}