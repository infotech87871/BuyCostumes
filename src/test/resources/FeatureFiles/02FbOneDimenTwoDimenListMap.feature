@FeatureListMap
Feature: 
  To Verify the Login Performance of Facebook

  #Below is for ONE AND TWO DIMENSIONAL LIST
  #-----------------------------------------
  @Feature1D2DList
  Scenario: 
    To Login with Valuable Email and Invaluable Password

    Given To Open the Chrome Browser and Enter Url
    When To Enter Valuable Email in Username Field
      | java1@gmail.com | selenium2@gmail.com | framework3@gmail.com | sql4@gmail.com |
    And To Enter Invaluable Password in Password Field
      | java      | selenium | python |
      | framework | sql      | git    |
      | jenkins   | abc123   | rst333 |
    And To Click the Btn Log
    Then To Close the Chrome Browser

  #Below is for ONE AND TWO DIMENSIONAL MAP
  #-----------------------------------------
  @Feature1D2DMap
  Scenario: 
    Login With Valid Mail and Invalid Passcode with Map

    Given Launch Browser and Push Url
    When Enter Valid Mail in Email Field
      | email1 | java@gmail.com      |
      | email2 | selenium@gmail.com  |
      | email3 | pythn@gmail.com     |
      | email4 | framework@gmail.com |
    And Enter Invalid Passcode in Pasword Field
      | pass1  | pass2    | pass3     |
      | java   | selenium | framework |
      | git    | sql      | jenkins   |
      | abc123 | efg456   | ghk888    |
    And Click the Log Button
    Then Close the Chrome Browser
