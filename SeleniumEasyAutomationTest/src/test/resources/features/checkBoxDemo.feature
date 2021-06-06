Feature:   As a user I should be able to verify the  CheckBox Demo field functionalities in Checkbox Demo Page
#Author:Test
#Date:06/06/2021
@smoke
Scenario: Verify Single and and Multiple Checkbox Field functionality 
	Given User Navigate to SeleniumEasy Test Home Page 
	When User Click on Input Forms hyperlink tab
	Then User Click on Checkbox Demo linkText tab
	And User select Single Checkbox Demo radio button
	Then User click on the Check All button in Multiple Checkbox Demo section
	Then User validate the Check All message changed to Uncheck All button
	