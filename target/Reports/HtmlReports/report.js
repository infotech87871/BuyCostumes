$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/UsEr/eclipse-workspace/Class55FrameworksDay17Cucumber/src/test/resources/FeatureFiles/01FbScenarioAndScenarioOutline.feature");
formatter.feature({
  "name": "",
  "description": "  To Validate the Login Functionality of Facebook Application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FeatureFbSceAndSceOutline"
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "    To Login with Valid Username and Invalid Password",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FeatureFbSceAndSceOutline"
    },
    {
      "name": "@FbScenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the Chrome Browser and Hit the Url",
  "keyword": "Given "
});
formatter.match({
  "location": "Login01Facebook.to_launch_the_Chrome_Browser_and_Hit_the_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter Valid Email in Username Field",
  "keyword": "When "
});
formatter.match({
  "location": "Login01Facebook.to_Enter_Valid_Email_in_Username_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter Invalid Password in Password Field",
  "keyword": "And "
});
formatter.match({
  "location": "Login01Facebook.to_Enter_Invalid_Password_in_Password_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Login01Facebook.to_Click_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "",
  "description": "    Sign in with Invalid Email and Invalid Password",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FbScenario"
    },
    {
      "name": "@FbScenarioOutline"
    }
  ]
});
formatter.step({
  "name": "Launch the Browser and Enter URl",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter Invalid Username \"\u003cemail field\u003e\"in Username Field",
  "keyword": "When "
});
formatter.step({
  "name": "Enter Invalid Password \"\u003cpassword field\u003e\" in Password Field",
  "keyword": "And "
});
formatter.step({
  "name": "Click the Log in button",
  "keyword": "And "
});
formatter.step({
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email field",
        "password field"
      ]
    },
    {
      "cells": [
        "java@gmail.com",
        "java12345"
      ]
    },
    {
      "cells": [
        "selenium@gmail.com",
        "sele1234"
      ]
    },
    {
      "cells": [
        "frameworks@gmail.com",
        "frame09876"
      ]
    },
    {
      "cells": [
        "sql@gamil.com",
        "sql10293"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "    Sign in with Invalid Email and Invalid Password",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FeatureFbSceAndSceOutline"
    },
    {
      "name": "@FbScenario"
    },
    {
      "name": "@FbScenarioOutline"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the Browser and Enter URl",
  "keyword": "Given "
});
formatter.match({
  "location": "Login02FbScenarioOutline.launch_the_Browser_and_Enter_URl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Invalid Username \"java@gmail.com\"in Username Field",
  "keyword": "When "
});
formatter.match({
  "location": "Login02FbScenarioOutline.enter_Invalid_Username_in_Username_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Invalid Password \"java12345\" in Password Field",
  "keyword": "And "
});
formatter.match({
  "location": "Login02FbScenarioOutline.enter_Invalid_Password_in_Password_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Log in button",
  "keyword": "And "
});
formatter.match({
  "location": "Login02FbScenarioOutline.click_the_Log_in_button()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat org.stepdefinitionclass3.Login02FbScenarioOutline.click_the_Log_in_button(Login02FbScenarioOutline.java:38)\r\n\tat ✽.Click the Log in button(C:/Users/UsEr/eclipse-workspace/Class55FrameworksDay17Cucumber/src/test/resources/FeatureFiles/01FbScenarioAndScenarioOutline.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login02FbScenarioOutline.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    Sign in with Invalid Email and Invalid Password",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FeatureFbSceAndSceOutline"
    },
    {
      "name": "@FbScenario"
    },
    {
      "name": "@FbScenarioOutline"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the Browser and Enter URl",
  "keyword": "Given "
});
formatter.match({
  "location": "Login02FbScenarioOutline.launch_the_Browser_and_Enter_URl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Invalid Username \"selenium@gmail.com\"in Username Field",
  "keyword": "When "
});
formatter.match({
  "location": "Login02FbScenarioOutline.enter_Invalid_Username_in_Username_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Invalid Password \"sele1234\" in Password Field",
  "keyword": "And "
});
formatter.match({
  "location": "Login02FbScenarioOutline.enter_Invalid_Password_in_Password_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Log in button",
  "keyword": "And "
});
formatter.match({
  "location": "Login02FbScenarioOutline.click_the_Log_in_button()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat org.stepdefinitionclass3.Login02FbScenarioOutline.click_the_Log_in_button(Login02FbScenarioOutline.java:38)\r\n\tat ✽.Click the Log in button(C:/Users/UsEr/eclipse-workspace/Class55FrameworksDay17Cucumber/src/test/resources/FeatureFiles/01FbScenarioAndScenarioOutline.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login02FbScenarioOutline.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    Sign in with Invalid Email and Invalid Password",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FeatureFbSceAndSceOutline"
    },
    {
      "name": "@FbScenario"
    },
    {
      "name": "@FbScenarioOutline"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the Browser and Enter URl",
  "keyword": "Given "
});
formatter.match({
  "location": "Login02FbScenarioOutline.launch_the_Browser_and_Enter_URl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Invalid Username \"frameworks@gmail.com\"in Username Field",
  "keyword": "When "
});
formatter.match({
  "location": "Login02FbScenarioOutline.enter_Invalid_Username_in_Username_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Invalid Password \"frame09876\" in Password Field",
  "keyword": "And "
});
formatter.match({
  "location": "Login02FbScenarioOutline.enter_Invalid_Password_in_Password_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Log in button",
  "keyword": "And "
});
formatter.match({
  "location": "Login02FbScenarioOutline.click_the_Log_in_button()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat org.stepdefinitionclass3.Login02FbScenarioOutline.click_the_Log_in_button(Login02FbScenarioOutline.java:38)\r\n\tat ✽.Click the Log in button(C:/Users/UsEr/eclipse-workspace/Class55FrameworksDay17Cucumber/src/test/resources/FeatureFiles/01FbScenarioAndScenarioOutline.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login02FbScenarioOutline.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    Sign in with Invalid Email and Invalid Password",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FeatureFbSceAndSceOutline"
    },
    {
      "name": "@FbScenario"
    },
    {
      "name": "@FbScenarioOutline"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the Browser and Enter URl",
  "keyword": "Given "
});
formatter.match({
  "location": "Login02FbScenarioOutline.launch_the_Browser_and_Enter_URl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Invalid Username \"sql@gamil.com\"in Username Field",
  "keyword": "When "
});
formatter.match({
  "location": "Login02FbScenarioOutline.enter_Invalid_Username_in_Username_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Invalid Password \"sql10293\" in Password Field",
  "keyword": "And "
});
formatter.match({
  "location": "Login02FbScenarioOutline.enter_Invalid_Password_in_Password_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Log in button",
  "keyword": "And "
});
formatter.match({
  "location": "Login02FbScenarioOutline.click_the_Log_in_button()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat org.stepdefinitionclass3.Login02FbScenarioOutline.click_the_Log_in_button(Login02FbScenarioOutline.java:38)\r\n\tat ✽.Click the Log in button(C:/Users/UsEr/eclipse-workspace/Class55FrameworksDay17Cucumber/src/test/resources/FeatureFiles/01FbScenarioAndScenarioOutline.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login02FbScenarioOutline.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("C:/Users/UsEr/eclipse-workspace/Class55FrameworksDay17Cucumber/src/test/resources/FeatureFiles/03AmazonScenarioHooks.feature");
formatter.feature({
  "name": "",
  "description": "  To Validate the Login Fucntionality of Amazon Application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FeatureHook"
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "    To Validate Signin with Valid Email and Invalid Passcode",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FeatureHook"
    },
    {
      "name": "@FbScenario"
    },
    {
      "name": "@FbHook"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the Chrome Browser and Push the Url",
  "keyword": "Given "
});
formatter.match({
  "location": "Login05Amazon.launchTheChromeBrowserAndPushTheUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter the Valuable Username in Username field",
  "keyword": "When "
});
formatter.match({
  "location": "Login05Amazon.toEnterTheValuableUsernameInUsernameField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click the Continue Button",
  "keyword": "And "
});
formatter.match({
  "location": "Login05Amazon.toClickTheContinueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter the Invaluable Passcode in Password field",
  "keyword": "And "
});
formatter.match({
  "location": "Login05Amazon.toEnterTheInvaluablePasscodeInPasswordField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click the Signin Button",
  "keyword": "And "
});
formatter.match({
  "location": "Login05Amazon.toClickTheSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Close the Browser we Launched",
  "keyword": "Then "
});
formatter.match({
  "location": "Login05Amazon.toCloseTheBrowserWeLaunched()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});