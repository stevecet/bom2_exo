export class CommonActions {
  // enter value into a field
  enterValueInfield(webelement_identifier, value) {
    cy.get(webelement_identifier).type(value);
  }

  //Verify logged user is the current user
  verifyUsername(webelement_identifier, expectedValue) {
    cy.get(webelement_identifier).contains(expectedValue);
  }

  // enter value into a field less than 100
  enterValueLessThan100Infield(webelement_identifier) {
    cy.get(webelement_identifier).type(Math.floor(Math.random() * 100));
  }

  // enter a random non positive integer
  enterNonPositiveInteger(webelement_identifier) {
    const min = -10;
    const max = -1;
    const negativeInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    cy.get(webelement_identifier).type(negativeInteger);
  }

  // select a value from a dropdown list by its text
  selectItemFromDropDown(webelement_identifier, expectedValue) {
    cy.get(webelement_identifier).select(expectedValue);
  }

  // Click on a web element
  clickOnWebElement(webelement_identifier) {
    cy.get(webelement_identifier).click();
  }

  //Selects a file from an absolute filepath
  selectFile(webelement_identifier, expectedValue) {
    cy.get(webelement_identifier).selectFile(expectedValue, { force: true });
  }

  // assert that a specific web element is visible
  verifyElementIsVisible(expectedValue) {
    cy.contains(expectedValue).should("be.visible");
  }

  // checks that a value is not visible
  verifyElementIsNotVisible(expectedValue) {
    cy.contains(expectedValue).should("not.be.visible");
  }

  // checks that a web element is visible
  verifyWebElementIsVisible(webelement_identifier) {
    cy.get(webelement_identifier).should("be.visible");
  }

  // checks that a web element is not visible
  verifyWebElementIsNotVisible(webelement_identifier) {
    cy.get(webelement_identifier).should("be.not.visible");
  }

  // verifies if 5 elements exist with a particular web identifier
  verifyCountElement(webelement_identifier) {
    cy.get(webelement_identifier).should(($e) => {
      // should have found 5 elements
      expect($e).to.have.length(5);
    });
  }

  //checks if total amount displays price * quantity
  checkTotalAmountProduct(
    webelement_identifier,
    expectedValue1,
    expectedValue2
  ) {
    cy.get(webelement_identifier).should(
      "have.value",
      expectedValue1 * expectedValue2
    );
  }

  visitUrl(webelement_identifier) {
    const expectedValue = cy.get(webelement_identifier);
    cy.visit(expectedValue);
  }
}
