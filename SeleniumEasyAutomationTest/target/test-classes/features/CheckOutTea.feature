Feature: As a user I should be able to checkout differnet tea.



#Scenario Outline: CheckOut Green Tea
#Given User Navigate to Practice Selenium Home Page
#Then User Click on the Menu button 
#Then User Verify Wheather Green Tea and Red Tea is displayed
#And User Click on the Checkout Button for the Green Tea
#Then User Fill Up"<Email>"and "<Name>"and "<Address>"
#And User Fill Up Payment Information
#
#
#Examples:
#|Email|Name|Address|
#|abc@gmail.com|MD Haque|123 Test Drive|
#|efg@gmail.com|Abdul Quddus|456 Test Drive|
#|hij@gmail.com|Ahmed Azam|789 Test Drive|
#




Scenario Outline: CheckOut Green Tea2
Given User Navigate to Practice Selenium Home Page
Then User Click on the Menu button 
Then User Verify Wheather Green Tea and Red Tea is displayed
And User Click on the Checkout Button for the Green Tea
Then User Fill Up"<Email>"and "<Name>"and "<Address>"
And User Fill "<CardType>" and "<CardNumber>" and "<CardHolderName>" and "<VerificationCode>"

Examples:
|Email|Name|Address|CardType|CardNumber|CardHolderName|VerificationCode|
|abc@gmail.com|Md Haque|123 Test Drive|Visa|5555555|Mike Miller|12345|
|efg@gmail.com|Abdul bhi|456 Test Drive||Mastercard|666666|jimmy Jonse|5678|
|abc1@gmail.com|Ahmed Azam|789 Test Drive|American Express|7777777|Jhony Boy|9101|















