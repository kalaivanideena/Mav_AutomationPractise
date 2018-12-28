package com.maven.stepdefinition;

import java.sql.Driver;

import javax.management.RuntimeErrorException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.maven.baseclass.BaseClass;
import com.maven.pom.MAP_CartPage;
import com.maven.pom.MAP_EnterEmailAndSignIn;
import com.maven.pom.MAP_HomePage;
import com.maven.pom.MAP_MyAccountPage;
import com.maven.pom.MAP_RegistrationDetails;
import com.maven.pom.MAP_SelectItems;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions extends BaseClass{
	static WebDriver driver;
	
	@Given("^user prefers to launch chrome browser$")
	public void user_prefers_to_launch_chrome_browser() throws Throwable {
		driver = browser_LaunchIgnoreCase("chrome");
	}
	
	@When("URL is launched in the chrome browser$")
	public void URL_is_launched_in_the_chrome_browser() throws Throwable {
		launchURL("http://automationpractice.com/index.php");		
	}
	
	@Given("^User clicks SignIn button on the home page$")
	public void user_clicks_SignIn_button_on_the_home_page() throws Throwable {
	    MAP_HomePage a = new MAP_HomePage(driver);
	    elementClick(a.getSignInText());	    
	}

	@Given("^User enters valid email '(.*)'$")
	public void user_enters_valid_email(String value) throws Throwable {
		MAP_EnterEmailAndSignIn b = new MAP_EnterEmailAndSignIn(driver);
	    elementSendKeys(b.getEmailField(),value);	
	}

	@Given("^User clicks submit$")
	public void user_clicks_submit() throws Throwable {
		MAP_EnterEmailAndSignIn b = new MAP_EnterEmailAndSignIn(driver);
	    elementClick(b.getSubmitEmailButton());	    
	}

	@Then("^User verifies the email to proceed$")
	public void user_verifies_the_email_to_proceed() throws Throwable {
		MAP_EnterEmailAndSignIn b = new MAP_EnterEmailAndSignIn(driver);
		Thread.sleep(3000);
		String dup = getElementText(b.getErrorMessage());
		if (dup.contains("email address has already"))
		{
			System.out.println("User ID already exists");
		}else if (dup.contains("Invalid email address"))
		{
			System.out.println("Email address is invalid");
		}else
		System.out.println("valid email address");	    
	}

	@Given("^User enters invalid email$")
	public void user_enters_invalid_email() throws Throwable {
		MAP_EnterEmailAndSignIn b = new MAP_EnterEmailAndSignIn(driver);
		elementSendKeys(b.getEmailField(), "sam@g");	    
	}

	@Given("^User enters duplicate email$")
	public void user_enters_duplicate_email() throws Throwable {
		MAP_EnterEmailAndSignIn b = new MAP_EnterEmailAndSignIn(driver);
		elementSendKeys(b.getEmailField(), "samp@gmail.com");	   
	}

	@Given("^User selects Mr and Mrs$")
	public void user_selects_Mr_and_Mrs() throws Throwable {
	    MAP_RegistrationDetails r = new MAP_RegistrationDetails(driver);
	    elementClick(r.getGenderMrs());
	}

	@Given("^User enters first name '(.*)'$")
	public void user_enters_first_name(String value) throws Throwable {
		MAP_RegistrationDetails r = new MAP_RegistrationDetails(driver);
		elementSendKeys(r.getFirstName(), value);	    
	}

	@Given("^User enters last name$")
	public void user_enters_last_name() throws Throwable {
		MAP_RegistrationDetails r = new MAP_RegistrationDetails(driver);
		elementSendKeys(r.getLastName(), "Sharma");	    	    
	}

	@Given("^User clicks on email field to confirm the entered email address$")
	public void user_clicks_on_email_field_to_confirm_the_entered_email_address() throws Throwable {
		MAP_RegistrationDetails r = new MAP_RegistrationDetails(driver);
		elementClick(r.getEmail());	    	    
	}

	@Given("^User enters password$")
	public void user_enters_password() throws Throwable {
		MAP_RegistrationDetails r = new MAP_RegistrationDetails(driver);
		elementSendKeys(r.getPassword(), "abc123");	     
	}

	@Given("^User enters DOB$")
	public void user_enters_DOB() throws Throwable {
		MAP_RegistrationDetails r = new MAP_RegistrationDetails(driver);
		selectDropDown(r.getDaysInDOB(), "value", "4");
		selectDropDown(r.getMonthInDOB(), "value", "5");
		selectDropDown(r.getYearInDOB(), "index", "20");
	}

	@Given("^User clicks checkbox to subscribe for newsletter$")
	public void user_clicks_checkbox_to_subscribe_for_newsletter() throws Throwable {
		MAP_RegistrationDetails r = new MAP_RegistrationDetails(driver);
		elementClick(r.getSubscribeNewsletter());	    
	}

	@Given("^User clicks checkbox to receive special offers from partners$")
	public void user_clicks_checkbox_to_receive_special_offers_from_partners() throws Throwable {
		MAP_RegistrationDetails r = new MAP_RegistrationDetails(driver);
		elementClick(r.getSubscribeOthers());	    
	}

	@Given("^User enters address line1$")
	public void user_enters_address_line1() throws Throwable {
		MAP_RegistrationDetails r = new MAP_RegistrationDetails(driver);
		elementSendKeys(r.getAddress1Field(), "1 Rajaji street, Annanagar");	    
	}

	@Given("^User enters the name of the city$")
	public void user_enters_the_name_of_the_city() throws Throwable {
		MAP_RegistrationDetails r = new MAP_RegistrationDetails(driver);
		elementSendKeys(r.getCityField(), "Chennai");	    
	}

	@Given("^User selects a state from the dropdown$")
	public void user_selects_a_state_from_the_dropdown() throws Throwable {
		MAP_RegistrationDetails r = new MAP_RegistrationDetails(driver);
		selectDropDown(r.getStateField(), "visibletext", "California");	    
	}
	
	@Given("^User enters the poscode$")
	public void user_enters_the_poscode() throws Throwable {
		MAP_RegistrationDetails r = new MAP_RegistrationDetails(driver);
		elementSendKeys(r.getPostcodeField(), "00004");
	}


	@Given("^User enters mobile number$")
	public void user_enters_mobile_number() throws Throwable {
		MAP_RegistrationDetails r = new MAP_RegistrationDetails(driver);
		elementSendKeys(r.getMobileNoField(), "98765412360");	    
	}

	@Given("^User enters alias information$")
	public void user_enters_alias_information() throws Throwable {
		MAP_RegistrationDetails r = new MAP_RegistrationDetails(driver);
		elementClear(r.getAliasField());
		elementSendKeys(r.getAliasField(), "None");	    
	}

	@Given("^User clicks submit in registration page$")
	public void user_clicks_submit_in_registration_page() throws Throwable {
		Thread.sleep(5000);
		MAP_RegistrationDetails r = new MAP_RegistrationDetails(driver);
		elementClick(r.getSubmitButton());	    
	}

	@Then("^User checks his name in the header on accounts page '(.*)'$")
	public void user_checks_his_name_in_the_header_on_accounts_page(String value) throws Throwable {
		Thread.sleep(3000);
		MAP_MyAccountPage c = new MAP_MyAccountPage(driver);
		String text = getElementText(c.getCustomerName());	
		if (text.contains(value))
				{
			System.out.println("User is registered");
				} else {System.out.println("User not registered");}
	}

	@Then("^User logs off$")
	public void user_logs_off() throws Throwable {
		MAP_MyAccountPage c = new MAP_MyAccountPage(driver);
		elementClick(c.getSignOut());	    
	}

	@Then("^User checks error occured for not providing all the details to register '(.*)'$")
	public void user_checks_error_occured_for_not_providing_all_the_details_to_register(String value) throws Throwable {
		MAP_RegistrationDetails r = new MAP_RegistrationDetails(driver);
		String text = getElementText(r.getErrorMessaeRegistrationPage());
		if (text.contains(value))
		{
			System.out.println("Required details were not provided for registration");
		}
	}

	@Given("^User enters user ID in email field2 '(.*)'$")
	public void user_enters_user_ID_in_email_field(String value) throws Throwable {
		MAP_EnterEmailAndSignIn b = new MAP_EnterEmailAndSignIn(driver);
		elementSendKeys(b.getEmailfield2(), value);
	    
	}

	@Given("^User enters password in the password field '(.*)'$")
	public void user_enters_password_in_the_password_field(String value) throws Throwable {
		Thread.sleep(1000);
		MAP_EnterEmailAndSignIn b = new MAP_EnterEmailAndSignIn(driver);
		elementSendKeys(b.getPasswordField(), value);
	    
	}

	@Given("^User clicks SignIn button$")
	public void user_clicks_SignIn_button() throws Throwable {
		MAP_EnterEmailAndSignIn b = new MAP_EnterEmailAndSignIn(driver);
		elementClick(b.getSubmitLogin());
	}
	
	@Then("^User checks if error occurs on providing invalid details '(.*)'$")
	public void user_checks_if_error_occurs_on_providing_invalid_details(String value) throws Throwable {
		MAP_EnterEmailAndSignIn b = new MAP_EnterEmailAndSignIn(driver);
		String text = getElementText(b.getLoginError());
		if(text.contains(value))
		{
			System.out.println("Invalid login credentials provided");
		}
	}

	@Given("^User clicks Order History button$")
	public void user_clicks_Order_History_button() throws Throwable {
		MAP_MyAccountPage c = new MAP_MyAccountPage(driver);
		elementClick(c.getOrderHistoryButton());
	}

	@Then("^user checks if he has landed on the Order History page '(.*)'$")
	public void user_checks_if_he_has_landed_on_the_Order_History_page(String value) throws Throwable {
		MAP_MyAccountPage c = new MAP_MyAccountPage(driver);
		String text = getElementText(c.getOrderHistoryPage());
		if(text.contains(value))
		{
			System.out.println("User landed on correct page");
		}
	}
	
	@Given("^User clicks My Credit Slip button$")
	public void user_clicks_My_Credit_Slip_button() throws Throwable {
		MAP_MyAccountPage c = new MAP_MyAccountPage(driver);
		elementClick(c.getCreditSlipsButton());
	}

	@Then("^user checks if he has landed on the My Credit Slip page '(.*)'$")
	public void user_checks_if_he_has_landed_on_the_My_Credit_Slip_page(String value) throws Throwable {
		MAP_MyAccountPage c = new MAP_MyAccountPage(driver);
		String text = getElementText(c.getCreditListPage());
		if(text.contains(value))
		{
			System.out.println("User landed on correct page");
		}
	}

	@Given("^User clicks My Addresses button$")
	public void user_clicks_My_Addresses_button() throws Throwable {
		MAP_MyAccountPage c = new MAP_MyAccountPage(driver);
		elementClick(c.getAddressesButton());
	}

	@Then("^user checks if he has landed on the My Addresses page '(.*)'$")
	public void user_checks_if_he_has_landed_on_the_My_Addresses_page(String value) throws Throwable {
		MAP_MyAccountPage c = new MAP_MyAccountPage(driver);
		String text = getElementText(c.getMyAddressesPage());
		if(text.contains(value))
		{
			System.out.println("User landed on correct page");
		}
	}

	@Given("^User clicks My Personal Information button$")
	public void user_clicks_My_Personal_Information_button() throws Throwable {
		MAP_MyAccountPage c = new MAP_MyAccountPage(driver);
		elementClick(c.getMyInformationButton());
	}

	@Then("^user checks if he has landed on the Personal Information page '(.*)'$")
	public void user_checks_if_he_has_landed_on_the_Personal_Information_page(String value) throws Throwable {
		MAP_MyAccountPage c = new MAP_MyAccountPage(driver);
		String text = getElementText(c.getPersonalInformationPage());
		if(text.contains(value))
		{
			System.out.println("User landed on correct page");
		}
	}

	@Given("^User clicks My Wishlists button$")
	public void user_clicks_My_Wishlists_button() throws Throwable {
		MAP_MyAccountPage c = new MAP_MyAccountPage(driver);
		elementClick(c.getWishlistsButton());
	}

	@Then("^user checks if he has landed on the My Wishlists page '(.*)'$")
	public void user_checks_if_he_has_landed_on_the_My_Wishlists_page(String value) throws Throwable {
		MAP_MyAccountPage c = new MAP_MyAccountPage(driver);
		String text = getElementText(c.getMyWishlistPage());
		if(text.contains(value))
		{
			System.out.println("User landed on correct page");
		}
	}

	@Given("^User navigates to Women menu$")
	public void user_navigates_to_Women_menu() throws Throwable {
		MAP_SelectItems s = new MAP_SelectItems(driver);
		moveToElement(s.getWomenApparel());
	}

	@Given("^User chooses Causal Dresses$")
	public void user_chooses_Causal_Dresses() throws Throwable {
		Thread.sleep(2000);
		MAP_SelectItems s = new MAP_SelectItems(driver);
		elementClick(s.getCasualDressesOpt());
	}

	@Given("^User clicks Add to Cart$")
	public void user_clicks_Add_to_Cart() throws Throwable {
		MAP_SelectItems s = new MAP_SelectItems(driver);
		Thread.sleep(2000);
		moveToElement(s.getCasualDressImage());
		elementClick(s.getAddDressesToCart());
	}

	@Given("^User clicks continue shopping$")
	public void user_clicks_continue_shopping() throws Throwable {
		Thread.sleep(2000);
		MAP_SelectItems s = new MAP_SelectItems(driver);
		elementClick(s.getContinueShopping());
	}

	@Given("^User navigates to Dresses$")
	public void user_navigates_to_Dresses() throws Throwable {
		Thread.sleep(2000);
		MAP_SelectItems s = new MAP_SelectItems(driver);
		moveToElement(s.getDressesMenu());
	}

	@Given("^User selects Evening dresses$")
	public void user_selects_Evening_dresses() throws Throwable {
		MAP_SelectItems s = new MAP_SelectItems(driver);
		elementClick(s.getEveningDresses());
	}

	@Given("^User clicks Proceed to Checkout$")
	public void user_clicks_Proceed_to_Checkout() throws Throwable {
		MAP_SelectItems s = new MAP_SelectItems(driver);
		elementClick(s.getProceedToCheckout());
	}

	@Then("^User checks the total purchase price$")
	public void user_checks_the_total_purchase_price() throws Throwable {
		MAP_CartPage c = new MAP_CartPage(driver);
		String text = getElementText(c.getTotalPriceOfPurchase());
		System.out.println("The total cart value is: " + text);
	}

	@Then("^User clicks Proceed to checkout on Cart page$")
	public void user_clicks_Proceed_to_checkout_on_Cart_page() throws Throwable {
		Thread.sleep(2000);
		MAP_CartPage c = new MAP_CartPage(driver);
		elementClick(c.getProceedToCheckoutFromCart());
	}

	@Then("^User clicks Proceed to checkout on Address page$")
	public void user_clicks_Proceed_to_checkout_on_Address_page() throws Throwable {
		MAP_CartPage c = new MAP_CartPage(driver);
		elementClick(c.getProcessAddButton());
	}

	@Then("^User Clicks Proceed to checkout on Shipping\\(career\\) page$")
	public void user_Clicks_Proceed_to_checkout_on_Shipping_career_page() throws Throwable {
		MAP_CartPage c = new MAP_CartPage(driver);
		elementClick(c.getProcessCarrierButton());
	}

	@Then("^User check if he gets a error prompt for not checking Terms and conditions checkbox$")
	public void user_check_if_he_gets_a_error_prompt_for_not_checking_Terms_and_conditions_checkbox() throws Throwable {
		MAP_CartPage c = new MAP_CartPage(driver);
		String text = getElementText(c.getTermsConditionsError());
		if(text.contains("must agree to the terms"))
		{
			System.out.println("Error prompt displayed on not checking the terms and conditions");
		}
	}

	@Then("^User closes the error message$")
	public void user_closes_the_error_message() throws Throwable {
		MAP_CartPage c = new MAP_CartPage(driver);
		elementClick(c.getTermsConditionsErrorClose());
	}

	@Then("^User checks the Terms and conditions checkbox$")
	public void user_checks_the_Terms_and_conditions_checkbox() throws Throwable {
		MAP_CartPage c = new MAP_CartPage(driver);
		elementClick(c.getTermsConditionsCheckbox());
	}

	@Then("^User choses pay by check option$")
	public void user_choses_pay_by_check_option() throws Throwable {
		MAP_CartPage c = new MAP_CartPage(driver);
		elementClick(c.getPayByCheckOption());
	}

	@Then("^User clicks I confirm my order button$")
	public void user_clicks_I_confirm_my_order_button() throws Throwable {
		MAP_CartPage c = new MAP_CartPage(driver);
		elementClick(c.getConfirmOrderButton());
	}

	@Then("^user verifies price of his order$")
	public void user_verifies_price_of_his_order() throws Throwable {
		MAP_CartPage c = new MAP_CartPage(driver);
		String text = getElementText(c.getPrice());
		System.out.println(text);
	}

	@Then("^User choses pay by bank wire option$")
	public void user_choses_pay_by_bank_wire_option() throws Throwable {
		MAP_CartPage c = new MAP_CartPage(driver);
		elementClick(c.getPayByBankWireOption());
	}



}
