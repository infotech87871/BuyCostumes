package org.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//This Test Runner Class is for "ONE AND TWO DIMENSIONAL LIST AND MAP with Tags"
//----------------------------------------------------------------------

@RunWith(Cucumber.class)

@CucumberOptions(features="C:\\Users\\UsEr\\eclipse-workspace\\Class55FrameworksDay17Cucumber\\src\\test\\resources\\FeatureFiles",
glue="org.stepdefinitionclass2",monochrome=true,tags="@Feature1D2DList")
//														   (or)
//													  "@Feature1D2DMap"

public class TestRunner02FbDataListAndMap {

}
