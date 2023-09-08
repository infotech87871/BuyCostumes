package org.stepdefinitionclass1;

import org.frameworkbaseclass.BaseClassForMethodCreation;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Login06HooksAmazon extends BaseClassForMethodCreation {

	@Before(order=2)
	public void bef() {
		chromeBrowser();
		
	}
	@Before(order=3)
	public void bef1() {
		maximizeWindow();
	}
	@Before(order=1)
	public void bef2() {
		System.out.println("Take Screenshot Before Execution.........");
	}
	@After(order=2)
	public void aft1() {
		closeBrowser();
	}
	@After(order=1)
	public void aft2() {
		System.out.println("Take Screenshot After Execution.........");
	}
}
