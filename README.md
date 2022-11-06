# myToys_Homework
### Goal

    Creating tests using the Cypress automation framework

### Description

    To test the main functions of the website, two test scenarios have been prepared, 
    which include the 2 tests with a focus on certain functionality with verification of correct execution. 
    The tests can be executed in any order, as they are independent of each other.

### Tests
##### Test Scenario: search and sort

    1.1 Search for "trampolin"
    1.2 Verify that the products have been searched correctly

    2.1 Sort by "Highest Price"
    2.2 Verify that the 5 products has been sorted correctly (by price descending)
    

##### Test Scenario: filter and add products to shopping cart

    1.1 Filter costs between 500 and 1000 euros
    1.2 Verify that the products has been filtered correctly

    2.1 Add the product to the shopping cart
    2.2 Verification product after successfully added to the shoping cart


### Commands for running tests and files structure

#### Installation

    git clone https://github.com/TarasovArtem/myToys_Homework.git

    cd myToys_Homework

    npm install


#### Opening Cypress GUI

    npx cypress open 

or 

    npm run cypress:open


#### Run all tests in specific browser with terminal (***Browsers should be installed on your local machine***)

    npm run chrome:run

    npm run firefox:run

    npm run edge:run


#### Test files structure

    ./cypress/e2e/tests/filter_and_add_product_to_shopping_cart.cy.js
    ./cypress/e2e/tests/search_and_sort.cy.js


#### Project Object files structure

    ./cypress/e2e/objects/filter.js
    ./cypress/e2e/objects/searchBar.js
    ./cypress/e2e/objects/navigation.js
    ./cypress/e2e//objects/sortBar.js
    ./cypress/e2e//objects/productCard.js
    ./cypress/e2e//objects/shoppingCart.js
    ./cypress/e2e//objects/utilites.js
