package com.pftc.seleniumEasy.PageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MenuPage extends Base {
	
		
	public MenuPage() {
		PageFactory.initElements(driver, this);
		
	}
	
	
	
	
	@FindBy(xpath="//*[@id=\'wsb-button-00000000-0000-0000-0000-000451955160\']/span")
	public WebElement greenTeaCheckOutButton;
	
	@FindBy(xpath="//*[@id=\'wsb-element-00000000-0000-0000-0000-000453230000\']/div/p/span/span/strong")
	public WebElement greenTeaText;
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
