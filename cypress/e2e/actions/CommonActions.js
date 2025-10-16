export class CommonActions {

  // enter value into a field
  enterValueInfield(webelement_identifier, value) {
    cy.get(webelement_identifier).type(value);
  }

  // select a value from a dropdown list by its text
  selectItemFromDropDown(webelement_identifier, expectedValue) {
    cy.get(webelement_identifier).select(expectedValue);
  }

  // Click on a web element
  clickOnWebElement(webelement_identifier) {
    cy.get(webelement_identifier).click();
  }

  // verify the currenty logged user
  verifyUsername(webelement_identifier, expectedValue) {
    cy.get(webelement_identifier).contains(expectedValue);
  }

  // assert that a specific web element is visible
  verifyElementIsVisible(expectedValue) {
    cy.get(expectedValue).should("be.visible");
  }

  // assert that a text is visible
  verifyWebElementIsVisible(webelement_identifier) {
    cy.contains(webelement_identifier).should("be.visible");
  }

  // assert that a web element is not visible
  verifyWebElementIsNotVisible(expectedValue) {
    cy.get(expectedValue).should("not.be.visible");
  }
}
