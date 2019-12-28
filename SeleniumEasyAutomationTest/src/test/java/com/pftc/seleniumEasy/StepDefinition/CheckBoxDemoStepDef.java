package com.pftc.seleniumEasy.StepDefinition;

import org.junit.Assert;

import com.pftc.seleniumEasy.PageObject.Base;
import com.pftc.seleniumEasy.PageObject.CheckBoxDemoPage;
import cucumber.api.java.en.Then;


public class CheckBoxDemoStepDef extends Base {

	
	CheckBoxDemoPage checkboxDemoPage=new CheckBoxDemoPage() ;

	@Then("^User Click on Checkbox Demo linkText tab$")
	public void user_Click_on_Checkbox_Demo_linkText_tab() throws Throwable {
		checkboxDemoPage.checkboxDemoLinkText();
	}

	@Then("^User select Single Checkbox Demo radio button$")
	public void user_select_Single_Checkbox_Demo_radio_button() throws Throwable {
		checkboxDemoPage.singleCheckBoxRadioButton();
	}

	@Then("^User click on the Check All button in Multiple Checkbox Demo section$")
	public void user_click_on_the_Check_All_button_in_Multiple_Checkbox_Demo_section() throws Throwable {
		checkboxDemoPage.checkAllButton();
	}

	@Then("^User validate the Check All message changed to Uncheck All button$")
	public void user_validate_the_Check_All_message_changed_to_Uncheck_All_button() throws Throwable {
		Thread.sleep(10000);
		//checkboxDemoPage.unCheckAllButton();
		String expected="Uncheck All";
		String actual=checkboxDemoPage.unCheckAllButton();	
        Assert.assertEquals(expected, actual);	
	
		
		
	}



}
