$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("checkBoxDemo.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I should be able to verify the  CheckBox Demo field functionalities in Checkbox Demo Page",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-verify-the--checkbox-demo-field-functionalities-in-checkbox-demo-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10762969900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "#Author:mohdmhaque@gmail.com"
    },
    {
      "line": 3,
      "value": "#Date:09/16/2019"
    }
  ],
  "line": 5,
  "name": "Verify Single and and Multiple Checkbox Field functionality",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-verify-the--checkbox-demo-field-functionalities-in-checkbox-demo-page;verify-single-and-and-multiple-checkbox-field-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User Navigate to SeleniumEasy Test Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Click on Input Forms hyperlink tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Click on Checkbox Demo linkText tab",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User select Single Checkbox Demo radio button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on the Check All button in Multiple Checkbox Demo section",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User validate the Check All message changed to Uncheck All button",
  "keyword": "Then "
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Navigate_to_SeleniumEasy_Test_Home_Page()"
});
formatter.result({
  "duration": 6684529500,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Click_on_Input_Forms_hyperlink_tab()"
});
formatter.result({
  "duration": 333312200,
  "status": "passed"
});
formatter.match({
  "location": "CheckBoxDemoStepDef.user_Click_on_Checkbox_Demo_linkText_tab()"
});
formatter.result({
  "duration": 1025100,
  "error_message": "java.lang.NullPointerException\r\n\tat com.pftc.seleniumEasy.StepDefinition.CheckBoxDemoStepDef.user_Click_on_Checkbox_Demo_linkText_tab(CheckBoxDemoStepDef.java:14)\r\n\tat ✽.Then User Click on Checkbox Demo linkText tab(checkBoxDemo.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CheckBoxDemoStepDef.user_select_Single_Checkbox_Demo_radio_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckBoxDemoStepDef.user_click_on_the_Check_All_button_in_Multiple_Checkbox_Demo_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckBoxDemoStepDef.user_validate_the_Check_All_message_changed_to_Uncheck_All_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://www.seleniumeasy.com/test/");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 6038485600,
  "status": "passed"
});
formatter.uri("simpleFormDemo.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I should be able to verify the  Single and Two Input field functionalities in Simple Form Demo Page",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-verify-the--single-and-two-input-field-functionalities-in-simple-form-demo-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3544705900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Author:mohdmhaque@gmail.com"
    },
    {
      "line": 4,
      "value": "#Date:09/16/2019"
    }
  ],
  "line": 6,
  "name": "Verify Single and Double Input Field Functionalities",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-verify-the--single-and-two-input-field-functionalities-in-simple-form-demo-page;verify-single-and-double-input-field-functionalities",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User Navigate to SeleniumEasy Test Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Click on Input Forms hyperlink tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User Click on  Simple form Demo Hyperlink Test",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Enter a message in the Enter message text box",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Click on Show Message Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User Validate the Message is been displayed in the Your Message section",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User Enter a integer value in the Enter a text box",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User Enter 2nd integer value in the Enter b text box",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Click on the Get Total button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User Validate the Total of a and b being displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Navigate_to_SeleniumEasy_Test_Home_Page()"
});
formatter.result({
  "duration": 4332760500,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Click_on_Input_Forms_hyperlink_tab()"
});
formatter.result({
  "duration": 155049500,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Click_on_Simple_form_Demo_Hyperlink_Test()"
});
formatter.result({
  "duration": 676878500,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Enter_a_message_in_the_Enter_message_text_box()"
});
formatter.result({
  "duration": 513264500,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Click_on_Show_Message_Button()"
});
formatter.result({
  "duration": 126338900,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Validate_the_Message_is_been_displayed_in_the_Your_Message_section()"
});
formatter.result({
  "duration": 76747200,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Enter_a_integer_value_in_the_Enter_a_text_box()"
});
formatter.result({
  "duration": 9512874300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    }
  ],
  "location": "SimpleFormDemoStepDef.user_Enter_nd_integer_value_in_the_Enter_b_text_box(int)"
});
formatter.result({
  "duration": 5248710000,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Click_on_the_Get_Total_button()"
});
formatter.result({
  "duration": 5096199700,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Validate_the_Total_of_a_and_b_being_displayed_correctly()"
});
formatter.result({
  "duration": 154611700,
  "status": "passed"
});
formatter.after({
  "duration": 5150189300,
  "status": "passed"
});
});