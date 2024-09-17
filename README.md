# RiskSmartAutomationTest
Risk Smart Automation
As a part of this test, I have covered below scenario's with given details and setps.

# Test Scenario-1 : 'Add Product to Cart'
- Navigate to 'www.demoblaze.com'and navigate to Laptop category.
- Added 'MacBook Air' to cart sucessfully.
- Captured dailog message 'Product added sucessfully' and print it to console.
- Navigate to Cart page.
- Assersions to check 'MacBook Air' and '700' price is visible and correct.
- Assersion to grab totoal cart value and print to console.


# Test Scenario-2 : 'Send Message;
- Navigate to 'www.demoblazde.com' and navigate to contact page.
- Fill 'Contact email', 'Contact name', 'Message'.
- Click on 'Send message' successfully and grab Thank you message from dailog box.
- Print Thankyou message to console from dailog box and click on 'Ok' to sens message.


# Test Scenario-3 : Search for the Product'
- Navigate to 'https://magento.softwaretestingboard.com/' and search for 'jacket' from serach bar.
- Aessertion to check page return jackets as per search term, grab page Heading and print it in console.
- Assersion to chek atleast one item present and search term 'Jacket' is present in Product name.
- Error Handling:
- Search for 'Jcket' from home page seacrhbar
- Capture error message 'Your search returned no results.' and print it to console.


# Deliverables:
- File -1 : RiskSmartAutomation.spec.js (This file has script code for above three test sceanrios)
- File -2 : Playwright.config.js (This file has all details of timeouts, Browsers etc.)
- Bonus step : Playwright.config.js file also has command to capture screenshot on test failure.

  # How to run the test
  - Install Node.js and VisualStudeio
  - Download all Playwright dependency with commant 'npm init playwright@latest'
  - Import 'RiskSmartAutomation.spec.js' file under '/tests' folder
  - Import 'Playwright.config.js' file under main folder.
  - Run Playwright test from command line with command 'npx playwright test tests/RiskSmartAutomation.spec.js'.
