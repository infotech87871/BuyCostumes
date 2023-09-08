package org.stepdefinitionclass5rerun;

import org.frameworkbaseclass.BaseClassForMethodCreation;
import org.frameworkspom.PomAmazonPojo1;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en_au.ButattheendofthedayIreckon;

public class Login05Amazon extends BaseClassForMethodCreation {

	public static PomAmazonPojo1 p;
	
	@Given("Launch the Chrome Browser and Push the Url")
	public void launchTheChromeBrowserAndPushTheUrl() {
		//chromeBrowser();
		//maximizeWindow();
		launchUrl("https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3F%26ext_vrnc%3Dhi%26tag%3Dgooghydrabk1-21%26ref%3Dnav_ya_signin%26adgrpid%3D60571832564%26hvpone%3D%26hvptwo%3D%26hvadid%3D610644605478%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D1170741869827560952%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9061948%26hvtargid%3Dkwd-296458795081%26hydadcr%3D14452_2316413&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&");
	}

	@When("To Enter the Valuable Username in Username field")
	public void toEnterTheValuableUsernameInUsernameField() {
		 p = new PomAmazonPojo1();
		   WebElement txtEmail = p.getTxtEmail();
		   sendKeys(txtEmail, "asakbarsha87@gmail.com");
	}

	@When("To Click the Continue Button")
	public void toClickTheContinueButton() {
	    p = new PomAmazonPojo1();
	    WebElement txtContinue = p.getTxtContinue();
	    buttonClick(txtContinue);
	}

	@When("To Enter the Invaluable Passcode in Password field")
	public void toEnterTheInvaluablePasscodeInPasswordField() {
	   p = new PomAmazonPojo1();
	   WebElement txtPass = p.getTxtPass();
	   Assert.assertTrue(false);
	   sendKeys(txtPass, "12345asdfg");
	}

	@When("To Click the Signin Button")
	public void toClickTheSigninButton() {
	    p = new PomAmazonPojo1();
	    WebElement txtSignIn = p.getTxtSignIn();
	    buttonClick(txtSignIn);
	}

	@Then("To Close the Browser we Launched")
	public void toCloseTheBrowserWeLaunched() {
	   //closeBrowser();
	}



}
