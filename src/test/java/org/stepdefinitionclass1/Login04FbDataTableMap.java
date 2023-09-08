package org.stepdefinitionclass1;

import java.util.List;
import java.util.Map;

import org.frameworkbaseclass.BaseClassForMethodCreation;
import org.frameworkspom.POMPojoClassFacebook;
import org.openqa.selenium.WebElement;
import io.cucumber.datatable.*;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login04FbDataTableMap extends BaseClassForMethodCreation {

	public static POMPojoClassFacebook p;
	@Given("Launch Browser and Push Url")
	public void launch_Browser_and_Push_Url() {
		chromeBrowser();
		launchUrl("https://www.facebook.com/");
		maximizeWindow();
	}

	@When("Enter Valid Mail in Email Field")
	public void enter_Valid_Mail_in_Email_Field(DataTable d) {
	    p = new POMPojoClassFacebook();
	    Map<String, String> mp = d.asMap(String.class, String.class);
	    WebElement txtMail = p.getTxtMail();
	    sendKeys(txtMail, mp.get("email1"));
	}

	@When("Enter Invalid Passcode in Pasword Field")
	public void enter_Invalid_Passcode_in_Pasword_Field(DataTable d) {
	   p = new POMPojoClassFacebook();
	   List<Map<String, String>> mp = d.asMaps(String.class,String.class);
	   WebElement txtPass = p.getTxtPass();
	   sendKeys(txtPass, mp.get(1).get("pass1"));
	}

	@When("Click the Log Button")
	public void click_the_Log_Button() {
		 p = new POMPojoClassFacebook();
			WebElement btnLogin = p.getBtnLogin();
			buttonClick(btnLogin);
	}

	@Then("Close the Chrome Browser")
	public void close_the_Chrome_Browser() {
		//closeBrowser();
	}


}
