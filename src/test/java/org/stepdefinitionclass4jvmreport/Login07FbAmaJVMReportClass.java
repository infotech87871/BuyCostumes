package org.stepdefinitionclass4jvmreport;


import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class Login07FbAmaJVMReportClass {

	public static void generateJVMReport(String jsonFilePath) {

	//1.Mention the Target Folder Location - File
		
		File f = new File("C:\\Users\\UsEr\\eclipse-workspace\\Class55FrameworksDay17Cucumber\\target\\Reports\\JVMReports");
		
	//2.Add details to the report using,
	// Configuration(masterthought.cucumber) - Class & addClassification() - method
		
		Configuration c = new Configuration(f, "Facebook & Amazon");
		c.addClassifications("Platform Name: ", "Windows");
		c.addClassifications("Platform Version: ", "10 pro");
		c.addClassifications("Browser Name: ", "Chrome");
		c.addClassifications("Browser Version: ", "113.56.8");
		
	//3.Add Json file paths into List<String>(1st Complete 4th step and come to 3rd)
		
		List<String> li = new ArrayList<String>();
		li.add(jsonFilePath);
		
	//4.Create Object for Reportbuilder Class and Using the Created object call reportGenerate() method
		
	    ReportBuilder r = new ReportBuilder(li, c);
	    
	    r.generateReports();
		
		
		
		
		
		
		
		
		
		
	}
}
