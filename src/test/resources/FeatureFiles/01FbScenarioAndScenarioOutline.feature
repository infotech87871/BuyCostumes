@FeatureFbSceAndSceOutline
Feature: 
  To Validate the Login Functionality of Facebook Application

  # Below is for NORMAL SCENARIO FOR FACEBOOK
  #-------------------------------------------
  @FbScenario
  Scenario: 
    To Login with Valid Username and Invalid Password

    Given To launch the Chrome Browser and Hit the Url
    When To Enter Valid Email in Username Field
    And To Enter Invalid Password in Password Field
    And To Click the Login Button

  # Below is for NORMAL SCENARIO FOR FACEBOOK
  #-------------------------------------------
  @FbScenarioOutline
  Scenario Outline: 
    Sign in with Invalid Email and Invalid Password

    Given Launch the Browser and Enter URl
    When Enter Invalid Username "<email field>"in Username Field
    And Enter Invalid Password "<password field>" in Password Field
    And Click the Log in button
    Then Close the Browser

    Examples: 
      | email field          | password field |
      | java@gmail.com       | java12345      |
      | selenium@gmail.com   | sele1234       |
      | frameworks@gmail.com | frame09876     |
      | sql@gamil.com        | sql10293       |
