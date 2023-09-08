@FeatureHook
Feature: 
  To Validate the Login Fucntionality of Amazon Application

  #Below is for Hooks
  #-----------------------------------------
  @FbScenario @FbHook
  Scenario: 
    To Validate Signin with Valid Email and Invalid Passcode

    Given Launch the Chrome Browser and Push the Url
    When To Enter the Valuable Username in Username field
    And To Click the Continue Button
    And To Enter the Invaluable Passcode in Password field
    And To Click the Signin Button
    Then To Close the Browser we Launched
