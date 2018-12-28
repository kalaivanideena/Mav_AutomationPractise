@EnterEmailToSignUP
Feature: User to signin, place orders and navigate to different pages in Automation Practise website
Contains 19 scenarios like clicking signIn button, entering email, duplicate email and click submit

Background: Launch the browser
Given user prefers to launch chrome browser
And URL is launched in the chrome browser

@TC_1
Scenario: User clicks SignIn button to enter valid email address
And User clicks SignIn button on the home page
And User enters valid email 'sample3@gmail.com'
And User clicks submit 


@TC_2
Scenario: User clicks SignIn button to enter invalid email address
And User clicks SignIn button on the home page
And User enters invalid email
And User clicks submit 
Then User verifies the email to proceed

@TC_3
Scenario: User clicks SignIn button to enter duplicate email address
And User clicks SignIn button on the home page
And User enters duplicate email
And User clicks submit 
Then User verifies the email to proceed

@TC4
Scenario: User enters his details to register as Automation Practise customer
And User clicks SignIn button on the home page
And User enters valid email 'samp1@gmail.com'
And User clicks submit 
And User selects Mr and Mrs
And User enters first name 'Anvesh'
And User enters last name
And User clicks on email field to confirm the entered email address
And User enters password
And User enters DOB
And User clicks checkbox to subscribe for newsletter
And User clicks checkbox to receive special offers from partners
And User enters address line1
And User enters the name of the city
And User selects a state from the dropdown
And User enters the poscode
And User enters mobile number
And User enters alias information
And User clicks submit in registration page
Then User checks his name in the header on accounts page 'Anvesh'
And User logs off

@TC5
Scenario: User enters his details except password to register as Automation Practise customer
And User clicks SignIn button on the home page
And User enters valid email 'sample3@gmail.com'
And User clicks submit 
And User selects Mr and Mrs
And User enters first name 'Ankita'
And User enters last name
And User clicks on email field to confirm the entered email address
And User enters DOB
And User clicks checkbox to subscribe for newsletter
And User clicks checkbox to receive special offers from partners
And User enters address line1
And User enters the name of the city
And User selects a state from the dropdown
And User enters the poscode
And User enters mobile number
And User enters alias information
And User clicks submit in registration page
Then User checks error occured for not providing all the details to register 'pass'

@TC6
Scenario: User enters his details except alias information to register as Automation Practise customer
And User clicks SignIn button on the home page
And User enters valid email 'sample3@gmail.com'
And User clicks submit 
And User selects Mr and Mrs
And User enters first name 'Alwin'
And User enters last name
And User clicks on email field to confirm the entered email address
And User enters password
And User enters DOB
And User clicks checkbox to subscribe for newsletter
And User clicks checkbox to receive special offers from partners
And User enters address line1
And User enters the name of the city
And User selects a state from the dropdown
And User enters mobile number
And User enters alias information
And User clicks submit in registration page
Then User checks error occured for not providing all the details to register 'code'

@TC7
Scenario: User logs in with valid user credentials
And User clicks SignIn button on the home page
And User enters user ID in email field2 'samp@gmail.com'
And User enters password in the password field 'abc123'
And User clicks SignIn button
Then User checks his name in the header on accounts page 'Anu'
And User logs off

@TC8
Scenario: User tries to log in with invalid password 
And User clicks SignIn button on the home page
And User enters user ID in email field2 'samp@gmail.com'
And User enters password in the password field 'abc'
And User clicks SignIn button
Then User checks if error occurs on providing invalid details 'Invalid password'

@TC9
Scenario Outline:: User tries to log in with invalid user id 
And User clicks SignIn button on the home page
And User enters user ID in email field2 '<username>'
And User enters password in the password field '<pwd>'
And User clicks SignIn button
Then User checks if error occurs on providing invalid details 'Invalid email'

Examples:
|username|pwd|
|samp@g|abc123|

@TC10
Scenario: User accesses Order History page
And User clicks SignIn button on the home page
And User enters user ID in email field2 'samp@gmail.com'
And User enters password in the password field 'abc123'
And User clicks SignIn button
And User clicks Order History button
Then user checks if he has landed on the Order History page 'Order history'
And User logs off

@TC11
Scenario: User accesses My Credit Slip page
And User clicks SignIn button on the home page
And User enters user ID in email field2 'samp@gmail.com'
And User enters password in the password field 'abc123'
And User clicks SignIn button
And User clicks My Credit Slip button
Then user checks if he has landed on the My Credit Slip page 'Credit'
And User logs off

@TC12
Scenario: User accesses My Addresses page
And User clicks SignIn button on the home page
And User enters user ID in email field2 'samp@gmail.com'
And User enters password in the password field 'abc123'
And User clicks SignIn button
And User clicks My Addresses button
Then user checks if he has landed on the My Addresses page 'My addresses'
And User logs off

@TC13
Scenario: User accesses Personal Information page
And User clicks SignIn button on the home page
And User enters user ID in email field2 'samp@gmail.com'
And User enters password in the password field 'abc123'
And User clicks SignIn button
And User clicks My Personal Information button
Then user checks if he has landed on the Personal Information page 'personal information'
And User logs off

@TC14
Scenario: User accesses My Wishlists page
And User clicks SignIn button on the home page
And User enters user ID in email field2 'samp@gmail.com'
And User enters password in the password field 'abc123'
And User clicks SignIn button
And User clicks My Wishlists button
Then user checks if he has landed on the My Wishlists page 'My wishlists'
And User logs off

@TC15
Scenario: User selects articles and adds to cart
And User clicks SignIn button on the home page
And User enters user ID in email field2 'samp@gmail.com'
And User enters password in the password field 'abc123'
And User clicks SignIn button
And User navigates to Women menu
And User chooses Causal Dresses
And User clicks Add to Cart
And User clicks continue shopping
And User navigates to Dresses
And User selects Evening dresses
And User clicks Add to Cart
And User clicks continue shopping
And User logs off

@TC16
Scenario: User selects articles and adds to cart and tries to place order without accepting terms and conditions
And User clicks SignIn button on the home page
And User enters user ID in email field2 'samp@gmail.com'
And User enters password in the password field 'abc123'
And User clicks SignIn button
And User navigates to Women menu
And User chooses Causal Dresses
And User clicks Add to Cart
And User clicks continue shopping
And User navigates to Dresses
And User selects Evening dresses
And User clicks Add to Cart
And User clicks continue shopping
And User clicks Proceed to Checkout 
Then User checks the total purchase price
And User clicks Proceed to checkout on Cart page
And User clicks Proceed to checkout on Address page
And User Clicks Proceed to checkout on Shipping(career) page
Then User check if he gets a error prompt for not checking Terms and conditions checkbox
And User closes the error message
And User logs off

@TC17
Scenario: User selects articles and adds to cart
And User clicks SignIn button on the home page
And User enters user ID in email field2 'samp@gmail.com'
And User enters password in the password field 'abc123'
And User clicks SignIn button
And User navigates to Women menu
And User chooses Causal Dresses
And User clicks Add to Cart
And User clicks continue shopping
And User navigates to Dresses
And User selects Evening dresses
And User clicks Add to Cart
And User clicks continue shopping
And User clicks Proceed to Checkout 
Then User checks the total purchase price
And User clicks Proceed to checkout on Cart page
And User clicks Proceed to checkout on Address page
And User Clicks Proceed to checkout on Shipping(career) page
Then User check if he gets a error prompt for not checking Terms and conditions checkbox
And User closes the error message
And User logs off

@TC18
Scenario: User selects articles and makes payment by check
And User clicks SignIn button on the home page
And User enters user ID in email field2 'samp@gmail.com'
And User enters password in the password field 'abc123'
And User clicks SignIn button
And User navigates to Women menu
And User chooses Causal Dresses
And User clicks Add to Cart
And User clicks continue shopping
And User navigates to Dresses
And User selects Evening dresses
And User clicks Add to Cart
And User clicks continue shopping
And User clicks Proceed to Checkout 
Then User checks the total purchase price
And User clicks Proceed to checkout on Cart page
And User clicks Proceed to checkout on Address page
And User checks the Terms and conditions checkbox
And User Clicks Proceed to checkout on Shipping(career) page
And User choses pay by check option
And User clicks I confirm my order button
Then user verifies price of his order 

@TC19
Scenario: User selects articles and makes payment by Bank Wire
And User clicks SignIn button on the home page
And User enters user ID in email field2 'samp@gmail.com'
And User enters password in the password field 'abc123'
And User clicks SignIn button
And User navigates to Women menu
And User chooses Causal Dresses
And User clicks Add to Cart
And User clicks continue shopping
And User navigates to Dresses
And User selects Evening dresses
And User clicks Add to Cart
And User clicks continue shopping
And User clicks Proceed to Checkout 
Then User checks the total purchase price
And User clicks Proceed to checkout on Cart page
And User clicks Proceed to checkout on Address page
And User checks the Terms and conditions checkbox
And User Clicks Proceed to checkout on Shipping(career) page
And User choses pay by bank wire option
And User clicks I confirm my order button
Then user verifies price of his order