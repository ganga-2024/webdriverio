Feature: Add carrots on bbdaily app

  Scenario Outline: As a user, I want to Search for carrots, add it to cart, and view the total amount displayed

    Given I am on the "bbdaily" app
    When I search for "carrots"
    And I select the first product from the search results
    And I click on "Buy once"
    And I view the cart
    Then I should see the total amount in the cart
    And the total amount should be printed in the console



    Given I am on the "bbdaily" app
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
