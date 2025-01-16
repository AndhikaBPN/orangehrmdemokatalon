$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Pongo/Documents/Project/orangehrmdemokatalon/Include/features/login/loginAdmin.feature");
formatter.feature({
  "name": "User Login to Admin Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User successfully login to Admin Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be logged in to Admin Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User successfully login to Admin Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginAdminStep.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"Admin\" and password \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginAdminStep.User_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginAdminStep.User_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be logged in to Admin Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginAdminStep.User_should_be_logged_in_to_Admin_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User failed login to Admin Page with wrong username",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should see alert error",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "admin332",
        "admin123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User failed login to Admin Page with wrong username",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginAdminStep.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"admin332\" and password \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginAdminStep.User_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginAdminStep.User_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see alert error",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginAdminStep.User_should_see_alert_error()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User failed login to Admin Page with wrong password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should see alert error",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "admin332",
        "admin123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User failed login to Admin Page with wrong password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginAdminStep.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"admin332\" and password \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginAdminStep.User_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginAdminStep.User_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see alert error",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginAdminStep.User_should_see_alert_error()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User failed login to Admin Page with wrong username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should see alert error",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Adminwe",
        "admin321"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User failed login to Admin Page with wrong username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginAdminStep.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"Adminwe\" and password \"admin321\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginAdminStep.User_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginAdminStep.User_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see alert error",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginAdminStep.User_should_see_alert_error()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User failed login to Admin Page with empty data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should see login error",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "User failed login to Admin Page with empty data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginAdminStep.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"\" and password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginAdminStep.User_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginAdminStep.User_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see login error",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginAdminStep.User_should_see_login_error()"
});
formatter.result({
  "status": "passed"
});
});