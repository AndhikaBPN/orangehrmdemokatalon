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
  "status": "passed"
});
});