package com.pftc.seleniumEasy.PageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckOutPage extends Base {
	
	public CheckOutPage() {
		PageFactory.initElements(driver, this);
	}
	
	
	
	@FindBy(id="email")
	public WebElement emailAddress;
	
	
	@FindBy(id="name")
	public WebElement nameTextField;

	
	@FindBy(id="address")
	public WebElement addressTextField;
	
	@FindBy(id="card_type")
	public WebElement cardTypeDropDown;
	
	@FindBy(id="card_number")
	public WebElement cardNumber;
	
	@FindBy(id="cardholder_name")
	public WebElement cardHolderName;
	
	@FindBy(id="verification_code")
	public WebElement verificationCode;
	
	
	@FindBy(id="//*[@id=\'wsb-element-00000000-0000-0000-0000-000452010925\']/div/div/form/div/button")
	public WebElement placeOrderButton;
	
	
	
	
	
	

}
