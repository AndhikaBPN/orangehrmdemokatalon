$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/NEXSOFT/Documents/Project/orangehrmdemokatalon/Include/features/pim/pimAdd.feature");
formatter.feature({
  "name": "User Add PIM Data",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User Successfully add PIM",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "User already on PIM page",
  "keyword": "Given "
});
formatter.step({
  "name": "User click add pim button",
  "keyword": "When "
});
formatter.step({
  "name": "User insert profile \"\u003cfileName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User input employee fullname \"\u003cfirstName\u003e\", \"\u003cmiddleName\u003e\", \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User input employee id \"\u003cemployeeId\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enabled login details",
  "keyword": "And "
});
formatter.step({
  "name": "User input username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User change status to \"Disabled\"",
  "keyword": "And "
});
formatter.step({
  "name": "User input password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User input confirm password \"\u003cconfirm password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click save button",
  "keyword": "And "
});
formatter.step({
  "name": "User click PIM page",
  "keyword": "Then "
});
formatter.step({
  "name": "User search employee name \"\u003cfirstName\u003e\", \"\u003cmiddleName\u003e\", \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click search button",
  "keyword": "And "
});
formatter.step({
  "name": "User should see the data exist",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "employeeId",
        "firstName",
        "middleName",
        "lastName"
      ]
    },
    {
      "cells": [
        "\u003cemployeeId\u003e",
        "\u003cfirstName\u003e",
        "\u003cmiddleName\u003e",
        "\u003clastName\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fileName",
        "firstName",
        "middleName",
        "lastName",
        "employeeId",
        "username",
        "password",
        "confirm password"
      ]
    },
    {
      "cells": [
        "profile.png",
        "Archie",
        "Grey",
        "Buster",
        "099080",
        "archiebuster",
        "ArcBust123",
        "ArcBust123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User Successfully add PIM",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "User already on PIM page",
  "keyword": "Given "
});
formatter.match({
  "location": "PimAddStep.User_already_on_PIM_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click add pim button",
  "keyword": "When "
});
formatter.match({
  "location": "PimAddStep.User_click_add_pim_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User insert profile \"profile.png\"",
  "keyword": "And "
});
formatter.match({
  "location": "PimAddStep.User_insert_profile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input employee fullname \"Archie\", \"Grey\", \"Buster\"",
  "keyword": "And "
});
formatter.match({
  "location": "PimAddStep.User_input_employee_fullname(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input employee id \"099080\"",
  "keyword": "And "
});
formatter.match({
  "location": "PimAddStep.User_input_employee_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enabled login details",
  "keyword": "And "
});
formatter.match({
  "location": "PimAddStep.User_enabled_login_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input username \"archiebuster\"",
  "keyword": "And "
});
formatter.match({
  "location": "PimAddStep.User_input_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User change status to \"Disabled\"",
  "keyword": "And "
});
formatter.match({
  "location": "PimAddStep.User_change_status_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"ArcBust123\"",
  "keyword": "And "
});
formatter.match({
  "location": "PimAddStep.User_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input confirm password \"ArcBust123\"",
  "keyword": "And "
});
formatter.match({
  "location": "PimAddStep.User_input_confirm_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click save button",
  "keyword": "And "
});
formatter.match({
  "location": "PimAddStep.User_click_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click PIM page",
  "keyword": "Then "
});
formatter.match({
  "location": "PimAddStep.User_click_PIM_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User search employee name \"Archie\", \"Grey\", \"Buster\"",
  "keyword": "And "
});
formatter.match({
  "location": "PimAddStep.User_search_employee_name(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click search button",
  "keyword": "And "
});
formatter.match({
  "location": "PimAddStep.User_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see the data exist",
  "rows": [
    {
      "cells": [
        "employeeId",
        "firstName",
        "middleName",
        "lastName"
      ]
    },
    {
      "cells": [
        "099080",
        "Archie",
        "Grey",
        "Buster"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PimAddStep.User_should_see_the_data_exist(DataTable)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to get text of object \u0027Object Repository/pimPage/dataTable\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.getText(GetTextKeyword.groovy:88)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.execute(GetTextKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.getText(WebUiBuiltInKeywords.groovy:918)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$getText$7.call(Unknown Source)\r\n\tat com.demo.pim.PimAdd.verifyDataTable(PimAdd.groovy:118)\r\n\tat com.demo.pim.PimAdd$verifyDataTable$13.call(Unknown Source)\r\n\tat com.features.pimstep.PimAddStep.User_should_see_the_data_exist(PimAddStep.groovy:133)\r\n\tat ✽.User should see the data exist(C:/Users/NEXSOFT/Documents/Project/orangehrmdemokatalon/Include/features/pim/pimAdd.feature:19)\r\nCaused by: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/pimPage/dataTable\u0027 located by \u0027//div[@role\u003d\u0027table\u0027]/div[2]/div/div/div[2]/div\u0027 not found\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findWebElement(WebUiCommonHelper.java:1381)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword$_getText_closure1.doCall(GetTextKeyword.groovy:78)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword$_getText_closure1.call(GetTextKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.getText(GetTextKeyword.groovy:88)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.execute(GetTextKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.getText(WebUiBuiltInKeywords.groovy:918)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$getText$7.call(Unknown Source)\r\n\tat com.demo.pim.PimAdd.verifyDataTable(PimAdd.groovy:118)\r\n\tat com.demo.pim.PimAdd$verifyDataTable$13.call(Unknown Source)\r\n\tat com.features.pimstep.PimAddStep.User_should_see_the_data_exist(PimAddStep.groovy:133)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat TC - PIM Add.run(TC - PIM Add:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:148)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:187)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1736686378277.run(TempTestSuite1736686378277.groovy:36)\r\n",
  "status": "failed"
});
});