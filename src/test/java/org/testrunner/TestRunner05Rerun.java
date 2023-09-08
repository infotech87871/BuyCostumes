package org.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\UsEr\\eclipse-workspace\\Class55FrameworksDay17Cucumber\\src\\test\\resources\\FeatureFiles",
				 glue="org.stepdefinitionclass5rerun",
				 tags= {"not @FeatureListMap"},
				 monochrome=true,
				 plugin= {"rerun:Rerun File\\failed.txt"})
public class TestRunner05Rerun {

}
