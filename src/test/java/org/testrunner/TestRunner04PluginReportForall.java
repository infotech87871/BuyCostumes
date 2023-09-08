package org.testrunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.stepdefinitionclass4jvmreport.Login07FbAmaJVMReportClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions
       (features="C:\\Users\\UsEr\\eclipse-workspace\\Class55FrameworksDay17Cucumber\\src\\test\\resources\\FeatureFiles",
		glue="org.stepdefinitionclass4", 
		monochrome=true,
		tags= {"~@Feature1D2DMap","~@FbScenarioOutline"},
		plugin= {"json:JsonReport\\Json.json"})
//                                (or)
//				"html:C:\\Users\\UsEr\\eclipse-workspace\\Class55FrameworksDay17Cucumber\\target\\Reports\\HtmlReports"
//				"junit:C:\\Users\\UsEr\\eclipse-workspace\\Class55FrameworksDay17Cucumber\\target\\Reports\\JunitReports\\Junit.xml"
//				"json:C:\\Users\\UsEr\\eclipse-workspace\\Class55FrameworksDay17Cucumber\\target\\Reports\\JsonReports\\Json.json"
//				"html:HtmlReport(folderName)"
//				"junit:JunitReport(folderName)\\junit.xml"
//				"json:JsonReport(folderName)\\Json.json"

public class TestRunner04PluginReportForall {

	@AfterClass
	
	public static void report() {
		
		Login07FbAmaJVMReportClass.generateJVMReport
		("C:\\Users\\UsEr\\eclipse-workspace\\Class55FrameworksDay17Cucumber\\JsonReport\\Json.json");
	//Above is the Location path of json file After Json is Generated
	}
	
	
	
	}
	
	
	
	
	
	


