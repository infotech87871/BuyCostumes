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
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat org.stepdefinitionclass4.Login01Facebook.to_Enter_Invalid_Password_in_Password_Field(Login01Facebook.java:34)\r\n\tat ✽.To Enter Invalid Password in Password Field(C:/Users/UsEr/eclipse-workspace/Class55FrameworksDay17Cucumber/src/test/resources/FeatureFiles/01FbScenarioAndScenarioOutline.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To Click the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Login01Facebook.to_Click_the_Login_Button()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d114.0.5735.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-FBLO2R3\u0027, ip: \u0027192.168.0.221\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.90, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\UsEr\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:49160}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 5474af741c216f017802a04f12491cae\n*** Element info: {Using\u003did, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat org.frameworkbaseclass.BaseClassForMethodCreation.sendKeys(BaseClassForMethodCreation.java:69)\r\n\tat org.stepdefinitionclass4.Login02FbScenarioOutline.enter_Invalid_Username_in_Username_Field(Login02FbScenarioOutline.java:26)\r\n\tat ✽.Enter Invalid Username \"java@gmail.com\"in Username Field(C:/Users/UsEr/eclipse-workspace/Class55FrameworksDay17Cucumber/src/test/resources/FeatureFiles/01FbScenarioAndScenarioOutline.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter Invalid Password \"java12345\" in Password Field",
  "keyword": "And "
});
formatter.match({
  "location": "Login02FbScenarioOutline.enter_Invalid_Password_in_Password_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the Log in button",
  "keyword": "And "
});
formatter.match({
  "location": "Login02FbScenarioOutline.click_the_Log_in_button()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d114.0.5735.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-FBLO2R3\u0027, ip: \u0027192.168.0.221\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.90, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\UsEr\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:49160}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 5474af741c216f017802a04f12491cae\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat org.frameworkbaseclass.BaseClassForMethodCreation.closeBrowser(BaseClassForMethodCreation.java:64)\r\n\tat org.stepdefinitionclass4.Login06HooksAmazon.aft(Login06HooksAmazon.java:17)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
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
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat org.stepdefinitionclass4.Login02FbScenarioOutline.enter_Invalid_Password_in_Password_Field(Login02FbScenarioOutline.java:32)\r\n\tat ✽.Enter Invalid Password \"sele1234\" in Password Field(C:/Users/UsEr/eclipse-workspace/Class55FrameworksDay17Cucumber/src/test/resources/FeatureFiles/01FbScenarioAndScenarioOutline.feature:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click the Log in button",
  "keyword": "And "
});
formatter.match({
  "location": "Login02FbScenarioOutline.click_the_Log_in_button()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat org.stepdefinitionclass4.Login02FbScenarioOutline.enter_Invalid_Password_in_Password_Field(Login02FbScenarioOutline.java:32)\r\n\tat ✽.Enter Invalid Password \"frame09876\" in Password Field(C:/Users/UsEr/eclipse-workspace/Class55FrameworksDay17Cucumber/src/test/resources/FeatureFiles/01FbScenarioAndScenarioOutline.feature:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click the Log in button",
  "keyword": "And "
});
formatter.match({
  "location": "Login02FbScenarioOutline.click_the_Log_in_button()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat org.stepdefinitionclass4.Login02FbScenarioOutline.enter_Invalid_Password_in_Password_Field(Login02FbScenarioOutline.java:32)\r\n\tat ✽.Enter Invalid Password \"sql10293\" in Password Field(C:/Users/UsEr/eclipse-workspace/Class55FrameworksDay17Cucumber/src/test/resources/FeatureFiles/01FbScenarioAndScenarioOutline.feature:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click the Log in button",
  "keyword": "And "
});
formatter.match({
  "location": "Login02FbScenarioOutline.click_the_Log_in_button()"
});
formatter.result({
  "status": "skipped"
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
formatter.uri("C:/Users/UsEr/eclipse-workspace/Class55FrameworksDay17Cucumber/src/test/resources/FeatureFiles/02FbOneDimenTwoDimenListMap.feature");
formatter.feature({
  "name": "",
  "description": "  To Verify the Login Performance of Facebook",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FeatureListMap"
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "    To Login with Valuable Email and Invaluable Password",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FeatureListMap"
    },
    {
      "name": "@Feature1D2DList"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To Open the Chrome Browser and Enter Url",
  "keyword": "Given "
});
formatter.match({
  "location": "Login03FbDataTableList.to_Open_the_Chrome_Browser_and_Enter_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter Valuable Email in Username Field",
  "rows": [
    {
      "cells": [
        "java1@gmail.com",
        "selenium2@gmail.com",
        "framework3@gmail.com",
        "sql4@gmail.com"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Login03FbDataTableList.to_Enter_Valuable_Email_in_Username_Field(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter Invaluable Password in Password Field",
  "rows": [
    {
      "cells": [
        "java",
        "selenium",
        "python"
      ]
    },
    {
      "cells": [
        "framework",
        "sql",
        "git"
      ]
    },
    {
      "cells": [
        "jenkins",
        "abc123",
        "rst333"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login03FbDataTableList.to_Enter_Invaluable_Password_in_Password_Field(DataTable)"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat org.stepdefinitionclass4.Login03FbDataTableList.to_Enter_Invaluable_Password_in_Password_Field(Login03FbDataTableList.java:36)\r\n\tat ✽.To Enter Invaluable Password in Password Field(C:/Users/UsEr/eclipse-workspace/Class55FrameworksDay17Cucumber/src/test/resources/FeatureFiles/02FbOneDimenTwoDimenListMap.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To Click the Btn Log",
  "keyword": "And "
});
formatter.match({
  "location": "Login03FbDataTableList.to_Click_the_Btn_Log()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To Close the Chrome Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login03FbDataTableList.to_Close_the_Chrome_Browser()"
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