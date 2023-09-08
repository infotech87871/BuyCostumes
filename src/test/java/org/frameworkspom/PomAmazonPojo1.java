package org.frameworkspom;

import org.frameworkbaseclass.BaseClassForMethodCreation;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PomAmazonPojo1 extends BaseClassForMethodCreation{
	public PomAmazonPojo1() {
		PageFactory.initElements(driver, this);
	}
	//@FindBy(id="nav-link-accountList-nav-line-1")
	//private WebElement txtLogIn;
	@FindBy(name="email")
	private WebElement txtEmail;
	@FindBy(id="continue")
	private WebElement txtContinue;
	@FindBy(name="password")
	private WebElement txtPass;
	@FindBy(id="signInSubmit")
	private WebElement txtSignIn;
	//public WebElement getTxtLogIn() {
	//	return txtLogIn;
	//}
	public WebElement getTxtEmail() {
		return txtEmail;
	}
	public WebElement getTxtContinue() {
		return txtContinue;
	}
	public WebElement getTxtPass() {
		return txtPass;
	}
	public WebElement getTxtSignIn() {
		return txtSignIn;   }                              
	
	
	
	
	
	
	
	
	
	
	
	

}
