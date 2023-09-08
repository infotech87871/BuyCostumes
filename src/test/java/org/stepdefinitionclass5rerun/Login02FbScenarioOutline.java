package org.stepdefinitionclass5rerun;

import org.frameworkbaseclass.BaseClassForMethodCreation;
import org.frameworkspom.POMPojoClassFacebook;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Login02FbScenarioOutline extends BaseClassForMethodCreation{

	public static POMPojoClassFacebook p;
	@Given("Launch the Browser and Enter URl")
	public void launch_the_Browser_and_Enter_URl() {
		 //chromeBrowser();
		//maximizeWindow();
		   launchUrl("https://www.facebook.com/");
		   
	}
	@When("Enter Invalid Username {string}in Username Field")
	public void enter_Invalid_Username_in_Username_Field(String email) {
		p = new POMPojoClassFacebook();
		 WebElement txtMail = p.getTxtMail();
		 sendKeys(txtMail, email);
	}
	@When("Enter Invalid Password {string} in Password Field")
	public void enter_Invalid_Password_in_Password_Field(String pass) {
		 p = new POMPojoClassFacebook();
			WebElement txtPass = p.getTxtPass();
			Assert.assertTrue(false);
			sendKeys(txtPass, pass);
	}
	@When("Click the Log in button")
	public void click_the_Log_in_button() {
		p = new POMPojoClassFacebook();
		WebElement btnLogin = p.getBtnLogin();
		buttonClick(btnLogin);
	}
	@Then("Close the Browser")
	public void close_the_Browser() {
		   //closeBrowser();
	}
}
