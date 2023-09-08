package org.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

//This Test Runner Class is for "Hooks"
//-----------------------------------------------------------------------------

@RunWith(Cucumber.class)

@CucumberOptions(features="C:\\Users\\UsEr\\eclipse-workspace\\Class55FrameworksDay17Cucumber\\src\\test\\resources\\FeatureFiles",
				glue="org.stepdefinitionclass3", 
				monochrome=true,
				tags="@FeatureHook")
public class TestRunner03AmazonHooks {

}
