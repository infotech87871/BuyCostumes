package org.stepdefinitionclass4jvmreport;

import org.frameworkbaseclass.BaseClassForMethodCreation;
import org.frameworkspom.POMPojoClassFacebook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Login01Facebook extends BaseClassForMethodCreation{

	 public static POMPojoClassFacebook p;
	 
	@Given("To launch the Chrome Browser and Hit the Url")
	public static void to_launch_the_Chrome_Browser_and_Hit_the_Url() {
	   //chromeBrowser();
		//maximizeWindow();
	   launchUrl("https://www.facebook.com/");
	   
	}
	@When("To Enter Valid Email in Username Field")
	public static void to_Enter_Valid_Email_in_Username_Field() {
		 p = new POMPojoClassFacebook();
		 WebElement txtMail = p.getTxtMail();
		 sendKeys(txtMail, "asakbarsha87@gmail.com");
	}
	@When("To Enter Invalid Password in Password Field")
	public static void to_Enter_Invalid_Password_in_Password_Field() {
		 p = new POMPojoClassFacebook();
		WebElement txtPass = p.getTxtPass();
		//Assert.assertTrue(false);
		sendKeys(txtPass, "123456");
	}
	@When("To Click the Login Button")
	public static void to_Click_the_Login_Button() {
		p = new POMPojoClassFacebook();
		WebElement btnLogin = p.getBtnLogin();
		buttonClick(btnLogin);
	}
	@Then("To Close the Browser")
	public static void to_Close_the_Browser() {
	   //closeBrowser();
	}


}
