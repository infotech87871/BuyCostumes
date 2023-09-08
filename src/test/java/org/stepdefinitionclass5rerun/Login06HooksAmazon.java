package org.stepdefinitionclass5rerun;

import org.frameworkbaseclass.BaseClassForMethodCreation;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Login06HooksAmazon extends BaseClassForMethodCreation {

	@Before
	public void bef() {
		chromeBrowser();
		maximizeWindow();
	}
	@After
	public void aft() {
		closeBrowser();
	}
}

