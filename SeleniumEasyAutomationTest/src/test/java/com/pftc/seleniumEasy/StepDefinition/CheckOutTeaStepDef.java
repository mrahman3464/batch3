package com.pftc.seleniumEasy.StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import com.pftc.seleniumEasy.PageObject.Base;
import com.pftc.seleniumEasy.PageObject.CheckOutPage;
import com.pftc.seleniumEasy.PageObject.MenuPage;
import com.pftc.seleniumEasy.PageObject.PracticeSelenuimHomePage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class CheckOutTeaStepDef extends Base {
	
	
	PracticeSelenuimHomePage practiceSelenuimHomePage;
	MenuPage menuPage=new MenuPage();
	CheckOutPage checkOutPage=new CheckOutPage();
	
	@Given("^User Navigate to Practice Selenium Home Page$")
	public void user_Navigate_to_Practice_Selenium_Home_Page() throws Throwable {
		String URL = prop.getProperty("teaURL");
		driver.get(URL);
		practiceSelenuimHomePage=new PracticeSelenuimHomePage();
	}

	@Then("^User Click on the Menu button$")
	public void user_Click_on_the_Menu_button() throws Throwable {
		practiceSelenuimHomePage.menuLink.click();
	}

	@Then("^User Verify Wheather Green Tea and Red Tea is displayed$")
	public void user_Verify_Wheather_Green_Tea_and_Red_Tea_is_displayed() throws Throwable {
	    
		String expectedResult="Green Tea";
		String actualResult=menuPage.greenTeaText.getText();
		Assert.assertEquals(expectedResult, actualResult);
		
			
		
	}
	

	@Then("^User Click on the Checkout Button for the Green Tea$")
	public void user_Click_on_the_Checkout_Button_for_the_Green_Tea() throws Throwable {
	    menuPage.greenTeaCheckOutButton.click();
	}

	@Then("^User Fill Up\"([^\"]*)\"and \"([^\"]*)\"and \"([^\"]*)\"$")
	public void user_Fill_Up_and_and(String arg1, String arg2, String arg3) throws Throwable {
	   
		checkOutPage.emailAddress.sendKeys(arg1);
		checkOutPage.nameTextField.sendKeys(arg2);
		checkOutPage.addressTextField.sendKeys(arg3);
		
	}

	@Then("^User Fill Up Payment Information$")
	public void user_Fill_Up_Payment_Information() throws Throwable {
		
		Thread.sleep(10000);
		
		//This is how we select form DropDown
		Select selectCardType=new Select(driver.findElement(By.id("card_type")));
		//Select selectCardType=new Select(checkOutPage.cardTypeDropDown);
		
		selectCardType.selectByVisibleText("Visa");
		
		
		checkOutPage.cardNumber.sendKeys("41111111111");
		checkOutPage.cardHolderName.sendKeys("MK Test");
		checkOutPage.verificationCode.sendKeys("121");
			
	   
	}
	
	
	@And("^User Fill \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_Fill_and_and_and(String arg1, String arg2, String arg3, String arg4) throws Throwable {
	    

		
		//This is how we select form DropDown
		
		Select selectCardType=new Select(checkOutPage.cardTypeDropDown);
		selectCardType.selectByVisibleText(arg1);
		checkOutPage.cardNumber.sendKeys(arg2);
		checkOutPage.cardHolderName.sendKeys(arg3);
		checkOutPage.verificationCode.sendKeys(arg4);
		Thread.sleep(10000);
		
		
	}
	

}
