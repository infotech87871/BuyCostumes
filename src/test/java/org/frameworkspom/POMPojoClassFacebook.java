package org.frameworkspom;

import org.frameworkbaseclass.BaseClassForMethodCreation;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class POMPojoClassFacebook
      extends BaseClassForMethodCreation{

	public POMPojoClassFacebook() {
	PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="/html/body/div[1]/div/div[1]/div/div/div/div[2]/div/div/form/div[1]/div[1]/input")
	private WebElement txtMail;
	@FindBy(id="pass")
	private WebElement txtPass;
	@FindBy(name="login")
	private WebElement btnLogin;
	
	public WebElement getTxtMail() {
		return txtMail;
	}
	public WebElement getTxtPass() {
		return txtPass;
	}
	public WebElement getBtnLogin() {
		return btnLogin;
	}
	
	
	
}
