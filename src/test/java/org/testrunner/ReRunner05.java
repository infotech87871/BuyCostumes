package org.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="@Rerun File\\failed.txt",
				 glue="org.stepdefinitionclass5rerun",
				 monochrome=true)
public class ReRunner05 {

}
