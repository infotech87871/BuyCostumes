package org.stepdefinitionclass2;


import java.util.List;

import org.frameworkbaseclass.BaseClassForMethodCreation;
import org.frameworkspom.POMPojoClassFacebook;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login03FbDataTableList extends BaseClassForMethodCreation {

	public static POMPojoClassFacebook p;
	@Given("To Open the Chrome Browser and Enter Url")
	public void to_Open_the_Chrome_Browser_and_Enter_Url() {
		chromeBrowser();
		launchUrl("https://www.facebook.com/");
		maximizeWindow();
	}
	@When("To Enter Valuable Email in Username Field")
	public void to_Enter_Valuable_Email_in_Username_Field(io.cucumber.datatable.DataTable d) {
		p = new POMPojoClassFacebook();
		List<String> li = d.asList();
		WebElement txtMail = p.getTxtMail();
		String email = li.get(2);
		sendKeys(txtMail, email);
	}
	@When("To Enter Invaluable Password in Password Field")
	public void to_Enter_Invaluable_Password_in_Password_Field(io.cucumber.datatable.DataTable d) {
	   p = new POMPojoClassFacebook();
	   List<List<String>> li = d.asLists();
		WebElement txtPass = p.getTxtPass();
		sendKeys(txtPass, li.get(1).get(1));
	}

	@When("To Click the Btn Log")
	public void to_Click_the_Btn_Log() {
		 p = new POMPojoClassFacebook();
		WebElement btnLogin = p.getBtnLogin();
		buttonClick(btnLogin);
	}
	@Then("To Close the Chrome Browser")
	public void to_Close_the_Chrome_Browser() {
	   closeBrowser();
	}


}
