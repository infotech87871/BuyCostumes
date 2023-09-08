package org.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

//This Test Runner Class is for "SCENARIO AND SCENARIO OUTLINE",
//"ONE AND TWO DIMENSIONAL LIST AND MAP","Hooks","TAGS" Etc..............
//----------------------------------------------------------------------

@RunWith(Cucumber.class)

@CucumberOptions(features = "C:\\Users\\UsEr\\eclipse-workspace\\Class55FrameworksDay17Cucumber\\src\\test\\resources\\FeatureFiles", 
glue = "org.stepdefinitionclass1",monochrome=true,tags= {"@FbScenario"}) 
//														"@FbScenarioOutline"   (or)
//														"@FbScenario"         (or)
//											    "@FeatureFbSceAndSceOutline"  (or)
//														"@Feature1D2DList"    (or)
//													    "@Feature1D2DMap"     (or)
//														"@FeatureHook"

// Here give Universal Path of, 
//      -> Feature file that is Folder(contains n nos of feature file) Path, and then
//      ->Path of stepdefinition package and 
//		->access by using Tag names of Feature and Scenarios

public class TestRunner01FbScenarioAndScenarioOutline{

}

//feature ="path of feature file"

//glue = "path of stepdefinition package, or class"

//monochrome false= irregular output
//			 true = regular output

//dryRun false = Lead normal execution, snippets generated at end
//		  true = Skip noraml execution, snippets generated at end

//strict false = lead normal execution, snippets generated,
//                build is marked as Passed at end.
//        true = lead normal execution, snippets generated,
//                build is marked as Failed at end

//snippets  SnippetType.UNDERSCORE - snippets generate with underscore
//			SnippetType.CAMELCASE  - snippets generate with camercase(asusual)
