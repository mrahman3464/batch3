package com.pftc.seleniumEasy.PageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PracticeSelenuimHomePage extends Base{
	
	
	public PracticeSelenuimHomePage() {
		PageFactory.initElements(driver, this);
	}
	
	
	
	@FindBy(linkText="Menu")
	public WebElement menuLink;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
