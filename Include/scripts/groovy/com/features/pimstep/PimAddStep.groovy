package com.features.pimstep

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import com.demo.common.Common
import com.demo.dashboard.Dashboard
import com.demo.login.LoginAdmin
import com.demo.pim.PimAdd
import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import internal.GlobalVariable
import io.cucumber.datatable.DataTable
import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

public class PimAddStep {
	
	Common common = new Common()
	Dashboard dashboard = new Dashboard()
	LoginAdmin loginAdmin = new LoginAdmin()
	PimAdd pim = new PimAdd()
	
	@Given("User already on PIM page")
	public void User_already_on_PIM_page() {
		common.openWebBrowser("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
		loginAdmin.inputUsername("Admin")
		loginAdmin.inputPassword("admin123")
		loginAdmin.clickButtonLogin()
		dashboard.verifyUserProfilePresent()
		WebUI.click(findTestObject('Object Repository/sidebar/PIM'))
	}
	
	@When("User click add pim button")
	public void User_click_add_pim_button() {
		pim.clickAddButton()
	}
	
	@And("User insert profile {string}")
	public void User_insert_profile(String fileName) {
		pim.insertProfile(fileName)
	}
	
	@And("User input employee fullname {string}, {string}, {string}")
	public void User_input_employee_fullname(String firstName, String middleName, String lastName) {
		pim.inputFirstName(firstName)
		pim.inputMiddleName(middleName)
		pim.inputLastName(lastName)
	}
	
	@And("User input employee id {string}")
	public void User_input_employee_id(String employeeId) {
		pim.inputEmployeeId(employeeId)
	}
	
	@And("User enabled login details")
	public void User_enabled_login_details() {
		pim.enabledUserLogin()
	}
	
	@And("User input username {string}")
	public void User_input_username(String username) {
		pim.inputUsername(username)
	}
	
	@And("User change status to {string}")
	public void User_change_status_to(String status) {
		pim.changeStatus(status)
	}
	
	@And("User input password {string}")
	public void User_input_password(String password) {
		pim.inputPassword(password)
	}
	
	@And("User input confirm password {string}")
	public void User_input_confirm_password(String confirmPassword) {
		pim.inputConfirmPassword(confirmPassword)
	}
	
	@And("User click save button")
	public void User_click_save_button() {
		pim.clickSaveButton()
	}
	
	@Then("User click PIM page")
	public void User_click_PIM_page() {
		pim.clickPimMenu()
	}
	
	@And("User search employee name {string}, {string}, {string}")
	public void User_search_employee_name(String firstName, String middleName, String lastName) {
		String fullName = String.join(" ", firstName, middleName, lastName);
		
		WebUI.setText(findTestObject('Object Repository/pimPage/searchEmployeeName'), fullName)
	}
	
	@And("User click search button")
	public void User_click_search_button() {
		pim.clickSearchButton()
	}
	
	@Then("User should see the data exist")
	public void User_should_see_the_data_exist(DataTable dataTable) {
		List<Map<String, String>> data = dataTable.asMaps(String, String)
		List<List<String>> resultArray = []
		
		for (Map<String, String> row : data) {
			// Retrieve the values from the row map
			String employeeId = row.get("employeeId")
			String firstName = row.get("firstName")
			String middleName = row.get("middleName")
			String lastName = row.get("lastName")

			String joinName = String.join(" ", firstName, middleName)
			String[] arrData = [employeeId, joinName, lastName]
			
			pim.verifyDataTable(arrData)
		}
	}
	
}
