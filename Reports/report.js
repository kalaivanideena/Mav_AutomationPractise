$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MAP_AutomationPractise_Smoketest.feature");
formatter.feature({
  "line": 2,
  "name": "User to signin, place orders and navigate to different pages in Automation Practise website",
  "description": "Contains 19 scenarios like clicking signIn button, entering email, duplicate email and click submit",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@EnterEmailToSignUP"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "Launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user prefers to launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "URL is launched in the chrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_prefers_to_launch_chrome_browser()"
});
formatter.result({
  "duration": 7977446743,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.URL_is_launched_in_the_chrome_browser()"
});
formatter.result({
  "duration": 13423608756,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User clicks SignIn button to enter valid email address",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;user-clicks-signin-button-to-enter-valid-email-address",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@TC_1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters valid email \u0027sample3@gmail.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks submit",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button_on_the_home_page()"
});
formatter.result({
  "duration": 2349788323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sample3@gmail.com",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.user_enters_valid_email(String)"
});
formatter.result({
  "duration": 196729204,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_submit()"
});
formatter.result({
  "duration": 306260954,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user prefers to launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "URL is launched in the chrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_prefers_to_launch_chrome_browser()"
});
formatter.result({
  "duration": 2902483131,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.URL_is_launched_in_the_chrome_browser()"
});
formatter.result({
  "duration": 19901568196,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User clicks SignIn button to enter invalid email address",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;user-clicks-signin-button-to-enter-invalid-email-address",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@TC_2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters invalid email",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks submit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User verifies the email to proceed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button_on_the_home_page()"
});
formatter.result({
  "duration": 2701022851,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enters_invalid_email()"
});
formatter.result({
  "duration": 203358576,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_submit()"
});
formatter.result({
  "duration": 264503339,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_verifies_the_email_to_proceed()"
});
formatter.result({
  "duration": 3194033272,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user prefers to launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "URL is launched in the chrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_prefers_to_launch_chrome_browser()"
});
formatter.result({
  "duration": 2293636604,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.URL_is_launched_in_the_chrome_browser()"
});
formatter.result({
  "duration": 16106423316,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User clicks SignIn button to enter duplicate email address",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;user-clicks-signin-button-to-enter-duplicate-email-address",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@TC_3"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enters duplicate email",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User clicks submit",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User verifies the email to proceed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button_on_the_home_page()"
});
formatter.result({
  "duration": 2151685250,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enters_duplicate_email()"
});
formatter.result({
  "duration": 201997413,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_submit()"
});
formatter.result({
  "duration": 221448589,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_verifies_the_email_to_proceed()"
});
formatter.result({
  "duration": 3078717194,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user prefers to launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "URL is launched in the chrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_prefers_to_launch_chrome_browser()"
});
formatter.result({
  "duration": 3760908601,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.URL_is_launched_in_the_chrome_browser()"
});
formatter.result({
  "duration": 16849389994,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User enters his details to register as Automation Practise customer",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;user-enters-his-details-to-register-as-automation-practise-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@TC4"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User enters valid email \u0027samp1@gmail.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User clicks submit",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User selects Mr and Mrs",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User enters first name \u0027Anvesh\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User enters last name",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User clicks on email field to confirm the entered email address",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User enters password",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User enters DOB",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User clicks checkbox to subscribe for newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User clicks checkbox to receive special offers from partners",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User enters address line1",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User enters the name of the city",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User selects a state from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User enters the poscode",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User enters mobile number",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User enters alias information",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User clicks submit in registration page",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User checks his name in the header on accounts page \u0027Anvesh\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "User logs off",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button_on_the_home_page()"
});
formatter.result({
  "duration": 2050831213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samp1@gmail.com",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.user_enters_valid_email(String)"
});
formatter.result({
  "duration": 249888809,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_submit()"
});
formatter.result({
  "duration": 240414927,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_selects_Mr_and_Mrs()"
});
formatter.result({
  "duration": 30229987009,
  "error_message": "java.lang.Exception: Element is not clickable\r\n\tat com.maven.baseclass.BaseClass.elementClick(BaseClass.java:67)\r\n\tat com.maven.stepdefinition.StepDefinitions.user_selects_Mr_and_Mrs(StepDefinitions.java:83)\r\n\tat ✽.And User selects Mr and Mrs(MAP_AutomationPractise_Smoketest.feature:35)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anvesh",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.user_enters_first_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.user_enters_last_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_on_email_field_to_confirm_the_entered_email_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.user_enters_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.user_enters_DOB()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_checkbox_to_subscribe_for_newsletter()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_checkbox_to_receive_special_offers_from_partners()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.user_enters_address_line1()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.user_enters_the_name_of_the_city()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.user_selects_a_state_from_the_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.user_enters_the_poscode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.user_enters_mobile_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.user_enters_alias_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_submit_in_registration_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Anvesh",
      "offset": 53
    }
  ],
  "location": "StepDefinitions.user_checks_his_name_in_the_header_on_accounts_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.user_logs_off()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "Launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user prefers to launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "URL is launched in the chrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_prefers_to_launch_chrome_browser()"
});
formatter.result({
  "duration": 3600095012,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.URL_is_launched_in_the_chrome_browser()"
});
formatter.result({
  "duration": 17613681706,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "User enters his details except password to register as Automation Practise customer",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;user-enters-his-details-except-password-to-register-as-automation-practise-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@TC5"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User enters valid email \u0027sample3@gmail.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User clicks submit",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User selects Mr and Mrs",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User enters first name \u0027Ankita\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User enters last name",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User clicks on email field to confirm the entered email address",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User enters DOB",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User clicks checkbox to subscribe for newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User clicks checkbox to receive special offers from partners",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User enters address line1",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User enters the name of the city",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "User selects a state from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User enters the poscode",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "User enters mobile number",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User enters alias information",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User clicks submit in registration page",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User checks error occured for not providing all the details to register \u0027pass\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button_on_the_home_page()"
});
formatter.result({
  "duration": 2415922223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sample3@gmail.com",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.user_enters_valid_email(String)"
});
formatter.result({
  "duration": 649324600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_submit()"
});
formatter.result({
  "duration": 207498756,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_selects_Mr_and_Mrs()"
});
formatter.result({
  "duration": 1490339416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ankita",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.user_enters_first_name(String)"
});
formatter.result({
  "duration": 252042720,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enters_last_name()"
});
formatter.result({
  "duration": 293768078,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_on_email_field_to_confirm_the_entered_email_address()"
});
formatter.result({
  "duration": 102659960,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enters_DOB()"
});
formatter.result({
  "duration": 838742629,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_checkbox_to_subscribe_for_newsletter()"
});
formatter.result({
  "duration": 109950607,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_checkbox_to_receive_special_offers_from_partners()"
});
formatter.result({
  "duration": 110613837,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enters_address_line1()"
});
formatter.result({
  "duration": 416683691,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enters_the_name_of_the_city()"
});
formatter.result({
  "duration": 153229204,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_selects_a_state_from_the_dropdown()"
});
formatter.result({
  "duration": 168425832,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enters_the_poscode()"
});
formatter.result({
  "duration": 141972370,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enters_mobile_number()"
});
formatter.result({
  "duration": 215754680,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enters_alias_information()"
});
formatter.result({
  "duration": 209173694,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_submit_in_registration_page()"
});
formatter.result({
  "duration": 6552423553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.user_checks_error_occured_for_not_providing_all_the_details_to_register(String)"
});
formatter.result({
  "duration": 57552469,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user prefers to launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "URL is launched in the chrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_prefers_to_launch_chrome_browser()"
});
formatter.result({
  "duration": 2390155939,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.URL_is_launched_in_the_chrome_browser()"
});
formatter.result({
  "duration": 16096860481,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "User enters his details except alias information to register as Automation Practise customer",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;user-enters-his-details-except-alias-information-to-register-as-automation-practise-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 74,
      "name": "@TC6"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User enters valid email \u0027sample3@gmail.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User clicks submit",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User selects Mr and Mrs",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User enters first name \u0027Alwin\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "User enters last name",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "User clicks on email field to confirm the entered email address",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "User enters password",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "User enters DOB",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "User clicks checkbox to subscribe for newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "User clicks checkbox to receive special offers from partners",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "User enters address line1",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "User enters the name of the city",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "User selects a state from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "User enters mobile number",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "User enters alias information",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "User clicks submit in registration page",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "User checks error occured for not providing all the details to register \u0027code\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button_on_the_home_page()"
});
formatter.result({
  "duration": 2000944260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sample3@gmail.com",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.user_enters_valid_email(String)"
});
formatter.result({
  "duration": 197393901,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_submit()"
});
formatter.result({
  "duration": 156507722,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_selects_Mr_and_Mrs()"
});
formatter.result({
  "duration": 1483771626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alwin",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.user_enters_first_name(String)"
});
formatter.result({
  "duration": 199869896,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enters_last_name()"
});
formatter.result({
  "duration": 166918535,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_on_email_field_to_confirm_the_entered_email_address()"
});
formatter.result({
  "duration": 223146498,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enters_password()"
});
formatter.result({
  "duration": 222289235,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enters_DOB()"
});
formatter.result({
  "duration": 683138600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_checkbox_to_subscribe_for_newsletter()"
});
formatter.result({
  "duration": 100968893,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_checkbox_to_receive_special_offers_from_partners()"
});
formatter.result({
  "duration": 96790590,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enters_address_line1()"
});
formatter.result({
  "duration": 367779610,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enters_the_name_of_the_city()"
});
formatter.result({
  "duration": 131612388,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_selects_a_state_from_the_dropdown()"
});
formatter.result({
  "duration": 170940927,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enters_mobile_number()"
});
formatter.result({
  "duration": 192058243,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enters_alias_information()"
});
formatter.result({
  "duration": 201541412,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_submit_in_registration_page()"
});
formatter.result({
  "duration": 6586458955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "code",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.user_checks_error_occured_for_not_providing_all_the_details_to_register(String)"
});
formatter.result({
  "duration": 64519077,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user prefers to launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "URL is launched in the chrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_prefers_to_launch_chrome_browser()"
});
formatter.result({
  "duration": 2393334754,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.URL_is_launched_in_the_chrome_browser()"
});
formatter.result({
  "duration": 17957481895,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "User logs in with valid user credentials",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;user-logs-in-with-valid-user-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 95,
      "name": "@TC7"
    }
  ]
});
formatter.step({
  "line": 97,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "User enters user ID in email field2 \u0027samp@gmail.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "User enters password in the password field \u0027abc123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "User clicks SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "User checks his name in the header on accounts page \u0027Anu\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "User logs off",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button_on_the_home_page()"
});
formatter.result({
  "duration": 2066588435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samp@gmail.com",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.user_enters_user_ID_in_email_field(String)"
});
formatter.result({
  "duration": 175725766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.user_enters_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 1150065052,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button()"
});
formatter.result({
  "duration": 1669241552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anu",
      "offset": 53
    }
  ],
  "location": "StepDefinitions.user_checks_his_name_in_the_header_on_accounts_page(String)"
});
formatter.result({
  "duration": 3140023734,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_logs_off()"
});
formatter.result({
  "duration": 2689059777,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user prefers to launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "URL is launched in the chrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_prefers_to_launch_chrome_browser()"
});
formatter.result({
  "duration": 2329840092,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.URL_is_launched_in_the_chrome_browser()"
});
formatter.result({
  "duration": 18583059227,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
  "name": "User tries to log in with invalid password",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;user-tries-to-log-in-with-invalid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 104,
      "name": "@TC8"
    }
  ]
});
formatter.step({
  "line": 106,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "User enters user ID in email field2 \u0027samp@gmail.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "User enters password in the password field \u0027abc\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "User clicks SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "User checks if error occurs on providing invalid details \u0027Invalid password\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button_on_the_home_page()"
});
formatter.result({
  "duration": 2538386234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samp@gmail.com",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.user_enters_user_ID_in_email_field(String)"
});
formatter.result({
  "duration": 184012969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.user_enters_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 1145482555,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button()"
});
formatter.result({
  "duration": 1016330522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid password",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.user_checks_if_error_occurs_on_providing_invalid_details(String)"
});
formatter.result({
  "duration": 64533251,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 113,
  "name": ": User tries to log in with invalid user id",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;:-user-tries-to-log-in-with-invalid-user-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 112,
      "name": "@TC9"
    }
  ]
});
formatter.step({
  "line": 114,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "User enters user ID in email field2 \u0027\u003cusername\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "User enters password in the password field \u0027\u003cpwd\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "User clicks SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "User checks if error occurs on providing invalid details \u0027Invalid email\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 120,
  "name": "",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;:-user-tries-to-log-in-with-invalid-user-id;",
  "rows": [
    {
      "cells": [
        "username",
        "pwd"
      ],
      "line": 121,
      "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;:-user-tries-to-log-in-with-invalid-user-id;;1"
    },
    {
      "cells": [
        "samp@g",
        "abc123"
      ],
      "line": 122,
      "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;:-user-tries-to-log-in-with-invalid-user-id;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "Launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user prefers to launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "URL is launched in the chrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_prefers_to_launch_chrome_browser()"
});
formatter.result({
  "duration": 2516140889,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.URL_is_launched_in_the_chrome_browser()"
});
formatter.result({
  "duration": 19818997226,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": ": User tries to log in with invalid user id",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;:-user-tries-to-log-in-with-invalid-user-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 112,
      "name": "@TC9"
    },
    {
      "line": 1,
      "name": "@EnterEmailToSignUP"
    }
  ]
});
formatter.step({
  "line": 114,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "User enters user ID in email field2 \u0027samp@g\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "User enters password in the password field \u0027abc123\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "User clicks SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "User checks if error occurs on providing invalid details \u0027Invalid email\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button_on_the_home_page()"
});
formatter.result({
  "duration": 2039955602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samp@g",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.user_enters_user_ID_in_email_field(String)"
});
formatter.result({
  "duration": 151387114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.user_enters_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 1165273899,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button()"
});
formatter.result({
  "duration": 1209023649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email",
      "offset": 58
    }
  ],
  "location": "StepDefinitions.user_checks_if_error_occurs_on_providing_invalid_details(String)"
});
formatter.result({
  "duration": 60136478,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user prefers to launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "URL is launched in the chrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_prefers_to_launch_chrome_browser()"
});
formatter.result({
  "duration": 5419953412,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.URL_is_launched_in_the_chrome_browser()"
});
formatter.result({
  "duration": 22244164110,
  "status": "passed"
});
formatter.scenario({
  "line": 125,
  "name": "User accesses Order History page",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;user-accesses-order-history-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 124,
      "name": "@TC10"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "User enters user ID in email field2 \u0027samp@gmail.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "User enters password in the password field \u0027abc123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "User clicks SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "User clicks Order History button",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "user checks if he has landed on the Order History page \u0027Order history\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 132,
  "name": "User logs off",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button_on_the_home_page()"
});
formatter.result({
  "duration": 2113349358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samp@gmail.com",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.user_enters_user_ID_in_email_field(String)"
});
formatter.result({
  "duration": 205968488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.user_enters_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 1152296674,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button()"
});
formatter.result({
  "duration": 1554033976,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Order_History_button()"
});
formatter.result({
  "duration": 2142527099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Order history",
      "offset": 56
    }
  ],
  "location": "StepDefinitions.user_checks_if_he_has_landed_on_the_Order_History_page(String)"
});
formatter.result({
  "duration": 56629714,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_logs_off()"
});
formatter.result({
  "duration": 1986560420,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user prefers to launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "URL is launched in the chrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_prefers_to_launch_chrome_browser()"
});
formatter.result({
  "duration": 4084562126,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.URL_is_launched_in_the_chrome_browser()"
});
formatter.result({
  "duration": 24455605593,
  "status": "passed"
});
formatter.scenario({
  "line": 135,
  "name": "User accesses My Credit Slip page",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;user-accesses-my-credit-slip-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 134,
      "name": "@TC11"
    }
  ]
});
formatter.step({
  "line": 136,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "User enters user ID in email field2 \u0027samp@gmail.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "User enters password in the password field \u0027abc123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "User clicks SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "User clicks My Credit Slip button",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "user checks if he has landed on the My Credit Slip page \u0027Credit\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 142,
  "name": "User logs off",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button_on_the_home_page()"
});
formatter.result({
  "duration": 2135221300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samp@gmail.com",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.user_enters_user_ID_in_email_field(String)"
});
formatter.result({
  "duration": 206153234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.user_enters_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 1139381030,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button()"
});
formatter.result({
  "duration": 1569570284,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_My_Credit_Slip_button()"
});
formatter.result({
  "duration": 1326513676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit",
      "offset": 57
    }
  ],
  "location": "StepDefinitions.user_checks_if_he_has_landed_on_the_My_Credit_Slip_page(String)"
});
formatter.result({
  "duration": 61200482,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_logs_off()"
});
formatter.result({
  "duration": 1943549168,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user prefers to launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "URL is launched in the chrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_prefers_to_launch_chrome_browser()"
});
formatter.result({
  "duration": 3212974684,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.URL_is_launched_in_the_chrome_browser()"
});
formatter.result({
  "duration": 26125813887,
  "status": "passed"
});
formatter.scenario({
  "line": 145,
  "name": "User accesses My Addresses page",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;user-accesses-my-addresses-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 144,
      "name": "@TC12"
    }
  ]
});
formatter.step({
  "line": 146,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "User enters user ID in email field2 \u0027samp@gmail.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "User enters password in the password field \u0027abc123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "User clicks SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "User clicks My Addresses button",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "user checks if he has landed on the My Addresses page \u0027My addresses\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "User logs off",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button_on_the_home_page()"
});
formatter.result({
  "duration": 1946023697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samp@gmail.com",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.user_enters_user_ID_in_email_field(String)"
});
formatter.result({
  "duration": 189677065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.user_enters_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 1156558552,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button()"
});
formatter.result({
  "duration": 1636980791,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_My_Addresses_button()"
});
formatter.result({
  "duration": 1264052226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My addresses",
      "offset": 55
    }
  ],
  "location": "StepDefinitions.user_checks_if_he_has_landed_on_the_My_Addresses_page(String)"
});
formatter.result({
  "duration": 51135702,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_logs_off()"
});
formatter.result({
  "duration": 1991559818,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user prefers to launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "URL is launched in the chrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_prefers_to_launch_chrome_browser()"
});
formatter.result({
  "duration": 3008993444,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.URL_is_launched_in_the_chrome_browser()"
});
formatter.result({
  "duration": 18101724985,
  "status": "passed"
});
formatter.scenario({
  "line": 155,
  "name": "User accesses Personal Information page",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;user-accesses-personal-information-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 154,
      "name": "@TC13"
    }
  ]
});
formatter.step({
  "line": 156,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "User enters user ID in email field2 \u0027samp@gmail.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "User enters password in the password field \u0027abc123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "User clicks SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "User clicks My Personal Information button",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "user checks if he has landed on the Personal Information page \u0027personal information\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 162,
  "name": "User logs off",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button_on_the_home_page()"
});
formatter.result({
  "duration": 2139776427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samp@gmail.com",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.user_enters_user_ID_in_email_field(String)"
});
formatter.result({
  "duration": 255724945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.user_enters_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 1143252888,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button()"
});
formatter.result({
  "duration": 1559862779,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_My_Personal_Information_button()"
});
formatter.result({
  "duration": 1484506213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "personal information",
      "offset": 63
    }
  ],
  "location": "StepDefinitions.user_checks_if_he_has_landed_on_the_Personal_Information_page(String)"
});
formatter.result({
  "duration": 75706509,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_logs_off()"
});
formatter.result({
  "duration": 2067390469,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user prefers to launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "URL is launched in the chrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_prefers_to_launch_chrome_browser()"
});
formatter.result({
  "duration": 4249879035,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.URL_is_launched_in_the_chrome_browser()"
});
formatter.result({
  "duration": 22571453428,
  "status": "passed"
});
formatter.scenario({
  "line": 165,
  "name": "User accesses My Wishlists page",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;user-accesses-my-wishlists-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 164,
      "name": "@TC14"
    }
  ]
});
formatter.step({
  "line": 166,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "User enters user ID in email field2 \u0027samp@gmail.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "User enters password in the password field \u0027abc123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "User clicks SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "User clicks My Wishlists button",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "user checks if he has landed on the My Wishlists page \u0027My wishlists\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "User logs off",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button_on_the_home_page()"
});
formatter.result({
  "duration": 2690920928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samp@gmail.com",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.user_enters_user_ID_in_email_field(String)"
});
formatter.result({
  "duration": 268718788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.user_enters_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 1135334689,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button()"
});
formatter.result({
  "duration": 1601986465,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_My_Wishlists_button()"
});
formatter.result({
  "duration": 2438997461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My wishlists",
      "offset": 55
    }
  ],
  "location": "StepDefinitions.user_checks_if_he_has_landed_on_the_My_Wishlists_page(String)"
});
formatter.result({
  "duration": 62178954,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_logs_off()"
});
formatter.result({
  "duration": 2318839851,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user prefers to launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "URL is launched in the chrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_prefers_to_launch_chrome_browser()"
});
formatter.result({
  "duration": 2719063990,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.URL_is_launched_in_the_chrome_browser()"
});
formatter.result({
  "duration": 18140022268,
  "status": "passed"
});
formatter.scenario({
  "line": 175,
  "name": "User selects articles and adds to cart",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;user-selects-articles-and-adds-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 174,
      "name": "@TC15"
    }
  ]
});
formatter.step({
  "line": 176,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "User enters user ID in email field2 \u0027samp@gmail.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "User enters password in the password field \u0027abc123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "User clicks SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "User navigates to Women menu",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "User chooses Causal Dresses",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "User clicks Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "User clicks continue shopping",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "User navigates to Dresses",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "User selects Evening dresses",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "User clicks Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "User clicks continue shopping",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "User logs off",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button_on_the_home_page()"
});
formatter.result({
  "duration": 2050812152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samp@gmail.com",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.user_enters_user_ID_in_email_field(String)"
});
formatter.result({
  "duration": 204728535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.user_enters_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 1143449365,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button()"
});
formatter.result({
  "duration": 1531136641,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_navigates_to_Women_menu()"
});
formatter.result({
  "duration": 427210336,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_chooses_Causal_Dresses()"
});
formatter.result({
  "duration": 4757791858,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Add_to_Cart()"
});
formatter.result({
  "duration": 2223497419,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_continue_shopping()"
});
formatter.result({
  "duration": 2112982797,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_navigates_to_Dresses()"
});
formatter.result({
  "duration": 2093255968,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_selects_Evening_dresses()"
});
formatter.result({
  "duration": 2391936936,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Add_to_Cart()"
});
formatter.result({
  "duration": 2204161588,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_continue_shopping()"
});
formatter.result({
  "duration": 2119754883,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_logs_off()"
});
formatter.result({
  "duration": 2691202935,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user prefers to launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "URL is launched in the chrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_prefers_to_launch_chrome_browser()"
});
formatter.result({
  "duration": 3996834382,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.URL_is_launched_in_the_chrome_browser()"
});
formatter.result({
  "duration": 17037752817,
  "status": "passed"
});
formatter.scenario({
  "line": 191,
  "name": "User selects articles and adds to cart and tries to place order without accepting terms and conditions",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;user-selects-articles-and-adds-to-cart-and-tries-to-place-order-without-accepting-terms-and-conditions",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 190,
      "name": "@TC16"
    }
  ]
});
formatter.step({
  "line": 192,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "User enters user ID in email field2 \u0027samp@gmail.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "User enters password in the password field \u0027abc123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "User clicks SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "User navigates to Women menu",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "User chooses Causal Dresses",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "User clicks Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "User clicks continue shopping",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "User navigates to Dresses",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "User selects Evening dresses",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "User clicks Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "User clicks continue shopping",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "User clicks Proceed to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "User checks the total purchase price",
  "keyword": "Then "
});
formatter.step({
  "line": 206,
  "name": "User clicks Proceed to checkout on Cart page",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "User clicks Proceed to checkout on Address page",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "User Clicks Proceed to checkout on Shipping(career) page",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "User check if he gets a error prompt for not checking Terms and conditions checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 210,
  "name": "User closes the error message",
  "keyword": "And "
});
formatter.step({
  "line": 211,
  "name": "User logs off",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button_on_the_home_page()"
});
formatter.result({
  "duration": 2073120057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samp@gmail.com",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.user_enters_user_ID_in_email_field(String)"
});
formatter.result({
  "duration": 172528379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.user_enters_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 1146080293,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button()"
});
formatter.result({
  "duration": 1673811830,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_navigates_to_Women_menu()"
});
formatter.result({
  "duration": 72749097,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_chooses_Causal_Dresses()"
});
formatter.result({
  "duration": 4737605117,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Add_to_Cart()"
});
formatter.result({
  "duration": 2228613140,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_continue_shopping()"
});
formatter.result({
  "duration": 2130722867,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_navigates_to_Dresses()"
});
formatter.result({
  "duration": 2108176942,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_selects_Evening_dresses()"
});
formatter.result({
  "duration": 2058063211,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Add_to_Cart()"
});
formatter.result({
  "duration": 2216160341,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_continue_shopping()"
});
formatter.result({
  "duration": 2105286489,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Proceed_to_Checkout()"
});
formatter.result({
  "duration": 2200281421,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_checks_the_total_purchase_price()"
});
formatter.result({
  "duration": 135648465,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Proceed_to_checkout_on_Cart_page()"
});
formatter.result({
  "duration": 4238158380,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Proceed_to_checkout_on_Address_page()"
});
formatter.result({
  "duration": 1484910407,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_Clicks_Proceed_to_checkout_on_Shipping_career_page()"
});
formatter.result({
  "duration": 160722681,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_check_if_he_gets_a_error_prompt_for_not_checking_Terms_and_conditions_checkbox()"
});
formatter.result({
  "duration": 73430900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_closes_the_error_message()"
});
formatter.result({
  "duration": 301331447,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_logs_off()"
});
formatter.result({
  "duration": 1822040658,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user prefers to launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "URL is launched in the chrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_prefers_to_launch_chrome_browser()"
});
formatter.result({
  "duration": 2512542240,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.URL_is_launched_in_the_chrome_browser()"
});
formatter.result({
  "duration": 16393679810,
  "status": "passed"
});
formatter.scenario({
  "line": 214,
  "name": "User selects articles and adds to cart",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;user-selects-articles-and-adds-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 213,
      "name": "@TC17"
    }
  ]
});
formatter.step({
  "line": 215,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "User enters user ID in email field2 \u0027samp@gmail.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "User enters password in the password field \u0027abc123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "User clicks SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "User navigates to Women menu",
  "keyword": "And "
});
formatter.step({
  "line": 220,
  "name": "User chooses Causal Dresses",
  "keyword": "And "
});
formatter.step({
  "line": 221,
  "name": "User clicks Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "User clicks continue shopping",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "User navigates to Dresses",
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "User selects Evening dresses",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "User clicks Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "User clicks continue shopping",
  "keyword": "And "
});
formatter.step({
  "line": 227,
  "name": "User clicks Proceed to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "User checks the total purchase price",
  "keyword": "Then "
});
formatter.step({
  "line": 229,
  "name": "User clicks Proceed to checkout on Cart page",
  "keyword": "And "
});
formatter.step({
  "line": 230,
  "name": "User clicks Proceed to checkout on Address page",
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "User Clicks Proceed to checkout on Shipping(career) page",
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "User check if he gets a error prompt for not checking Terms and conditions checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 233,
  "name": "User closes the error message",
  "keyword": "And "
});
formatter.step({
  "line": 234,
  "name": "User logs off",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button_on_the_home_page()"
});
formatter.result({
  "duration": 2018623237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samp@gmail.com",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.user_enters_user_ID_in_email_field(String)"
});
formatter.result({
  "duration": 186191317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.user_enters_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 1171103680,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button()"
});
formatter.result({
  "duration": 1885869624,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_navigates_to_Women_menu()"
});
formatter.result({
  "duration": 118497336,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_chooses_Causal_Dresses()"
});
formatter.result({
  "duration": 4834284762,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Add_to_Cart()"
});
formatter.result({
  "duration": 2234305094,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_continue_shopping()"
});
formatter.result({
  "duration": 2113843481,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_navigates_to_Dresses()"
});
formatter.result({
  "duration": 2111289287,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_selects_Evening_dresses()"
});
formatter.result({
  "duration": 1726621494,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Add_to_Cart()"
});
formatter.result({
  "duration": 2206134173,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_continue_shopping()"
});
formatter.result({
  "duration": 2128345599,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Proceed_to_Checkout()"
});
formatter.result({
  "duration": 1640689896,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_checks_the_total_purchase_price()"
});
formatter.result({
  "duration": 61740058,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Proceed_to_checkout_on_Cart_page()"
});
formatter.result({
  "duration": 3445379527,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Proceed_to_checkout_on_Address_page()"
});
formatter.result({
  "duration": 1916601093,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_Clicks_Proceed_to_checkout_on_Shipping_career_page()"
});
formatter.result({
  "duration": 164935197,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_check_if_he_gets_a_error_prompt_for_not_checking_Terms_and_conditions_checkbox()"
});
formatter.result({
  "duration": 93525757,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_closes_the_error_message()"
});
formatter.result({
  "duration": 304082118,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_logs_off()"
});
formatter.result({
  "duration": 1775330076,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user prefers to launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "URL is launched in the chrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_prefers_to_launch_chrome_browser()"
});
formatter.result({
  "duration": 2354317547,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.URL_is_launched_in_the_chrome_browser()"
});
formatter.result({
  "duration": 17721262376,
  "status": "passed"
});
formatter.scenario({
  "line": 237,
  "name": "User selects articles and makes payment by check",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;user-selects-articles-and-makes-payment-by-check",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 236,
      "name": "@TC18"
    }
  ]
});
formatter.step({
  "line": 238,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "User enters user ID in email field2 \u0027samp@gmail.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "User enters password in the password field \u0027abc123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "User clicks SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "User navigates to Women menu",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "User chooses Causal Dresses",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "User clicks Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "User clicks continue shopping",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "User navigates to Dresses",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "User selects Evening dresses",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "User clicks Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "User clicks continue shopping",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "User clicks Proceed to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "User checks the total purchase price",
  "keyword": "Then "
});
formatter.step({
  "line": 252,
  "name": "User clicks Proceed to checkout on Cart page",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "User clicks Proceed to checkout on Address page",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "User checks the Terms and conditions checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "User Clicks Proceed to checkout on Shipping(career) page",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "User choses pay by check option",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "User clicks I confirm my order button",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "user verifies price of his order",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button_on_the_home_page()"
});
formatter.result({
  "duration": 2016094458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samp@gmail.com",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.user_enters_user_ID_in_email_field(String)"
});
formatter.result({
  "duration": 176280983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.user_enters_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 1151996094,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button()"
});
formatter.result({
  "duration": 1660183594,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_navigates_to_Women_menu()"
});
formatter.result({
  "duration": 71226160,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_chooses_Causal_Dresses()"
});
formatter.result({
  "duration": 4629125640,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Add_to_Cart()"
});
formatter.result({
  "duration": 2242880658,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_continue_shopping()"
});
formatter.result({
  "duration": 2109129023,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_navigates_to_Dresses()"
});
formatter.result({
  "duration": 2098756333,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_selects_Evening_dresses()"
});
formatter.result({
  "duration": 2220402669,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Add_to_Cart()"
});
formatter.result({
  "duration": 2212392096,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_continue_shopping()"
});
formatter.result({
  "duration": 2095900581,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Proceed_to_Checkout()"
});
formatter.result({
  "duration": 1583368605,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_checks_the_total_purchase_price()"
});
formatter.result({
  "duration": 73327775,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Proceed_to_checkout_on_Cart_page()"
});
formatter.result({
  "duration": 3670757158,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Proceed_to_checkout_on_Address_page()"
});
formatter.result({
  "duration": 1103590535,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_checks_the_Terms_and_conditions_checkbox()"
});
formatter.result({
  "duration": 111087434,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_Clicks_Proceed_to_checkout_on_Shipping_career_page()"
});
formatter.result({
  "duration": 1256185345,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_choses_pay_by_check_option()"
});
formatter.result({
  "duration": 991858443,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_I_confirm_my_order_button()"
});
formatter.result({
  "duration": 1986297474,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_verifies_price_of_his_order()"
});
formatter.result({
  "duration": 58833965,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user prefers to launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "URL is launched in the chrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_prefers_to_launch_chrome_browser()"
});
formatter.result({
  "duration": 2286290240,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.URL_is_launched_in_the_chrome_browser()"
});
formatter.result({
  "duration": 15446098964,
  "status": "passed"
});
formatter.scenario({
  "line": 261,
  "name": "User selects articles and makes payment by Bank Wire",
  "description": "",
  "id": "user-to-signin,-place-orders-and-navigate-to-different-pages-in-automation-practise-website;user-selects-articles-and-makes-payment-by-bank-wire",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 260,
      "name": "@TC19"
    }
  ]
});
formatter.step({
  "line": 262,
  "name": "User clicks SignIn button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "User enters user ID in email field2 \u0027samp@gmail.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 264,
  "name": "User enters password in the password field \u0027abc123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "User clicks SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 266,
  "name": "User navigates to Women menu",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "User chooses Causal Dresses",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "User clicks Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "User clicks continue shopping",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "User navigates to Dresses",
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "User selects Evening dresses",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "User clicks Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "User clicks continue shopping",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "User clicks Proceed to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 275,
  "name": "User checks the total purchase price",
  "keyword": "Then "
});
formatter.step({
  "line": 276,
  "name": "User clicks Proceed to checkout on Cart page",
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "User clicks Proceed to checkout on Address page",
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "User checks the Terms and conditions checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 279,
  "name": "User Clicks Proceed to checkout on Shipping(career) page",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "User choses pay by bank wire option",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "User clicks I confirm my order button",
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "user verifies price of his order",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button_on_the_home_page()"
});
formatter.result({
  "duration": 1946553988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samp@gmail.com",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.user_enters_user_ID_in_email_field(String)"
});
formatter.result({
  "duration": 182912310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.user_enters_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 1172915956,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_SignIn_button()"
});
formatter.result({
  "duration": 1517624725,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_navigates_to_Women_menu()"
});
formatter.result({
  "duration": 85318219,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_chooses_Causal_Dresses()"
});
formatter.result({
  "duration": 4401531050,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Add_to_Cart()"
});
formatter.result({
  "duration": 2223978836,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_continue_shopping()"
});
formatter.result({
  "duration": 2145351082,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_navigates_to_Dresses()"
});
formatter.result({
  "duration": 2093925063,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_selects_Evening_dresses()"
});
formatter.result({
  "duration": 2036518729,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Add_to_Cart()"
});
formatter.result({
  "duration": 2165030503,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_continue_shopping()"
});
formatter.result({
  "duration": 2149519610,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Proceed_to_Checkout()"
});
formatter.result({
  "duration": 1690301196,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_checks_the_total_purchase_price()"
});
formatter.result({
  "duration": 67517543,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Proceed_to_checkout_on_Cart_page()"
});
formatter.result({
  "duration": 3917572723,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_Proceed_to_checkout_on_Address_page()"
});
formatter.result({
  "duration": 1265832733,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_checks_the_Terms_and_conditions_checkbox()"
});
formatter.result({
  "duration": 130047907,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_Clicks_Proceed_to_checkout_on_Shipping_career_page()"
});
formatter.result({
  "duration": 1292952846,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_choses_pay_by_bank_wire_option()"
});
formatter.result({
  "duration": 1171901804,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_I_confirm_my_order_button()"
});
formatter.result({
  "duration": 1725962173,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_verifies_price_of_his_order()"
});
formatter.result({
  "duration": 47021425,
  "status": "passed"
});
});