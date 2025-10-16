import { CommonActions } from "../actions/CommonActions";
const ca = new CommonActions();

export class ProductPage {
  //Web elements identifiers for the product page
  productname_field_identifier = '[name="name"]';
  price_field_identifier = '[name="price"]';
  reference_field_identifier = '[name="productExtId"]';
  description_field_identifier = '[name="description"]';
  quantity_field_identifier = '[name="quantity"]';
  attachment_field_identifier = '[data-testid="dropzone-input"]';
  button_field_identifier = '[type="submit"]';
  accordion_field_identifier =
    "div.MuiButtonBase-root.MuiAccordionSummary-root.MuiAccordionSummary-gutters.css-1d7s89y";

//Methods for the product page
  enterProductName(value) {
    ca.enterValueInfield(this.productname_field_identifier, value);
  }

  enterPrice(value) {
    ca.enterValueInfield(this.price_field_identifier, value);
  }

  enterReference(value) {
    ca.enterValueInfield(this.reference_field_identifier, value);
  }

  enterDescription(value) {
    ca.enterValueInfield(this.description_field_identifier, value);
  }

  expandAccordion() {
    ca.clickOnWebElement(this.accordion_field_identifier);
    cy.wait(1000);
  }

  clickOnSave() {
    ca.clickOnWebElement(this.button_field_identifier);
    cy.wait(1000);
  }

  addAttachment() {
    ca.clickOnWebElement(this.attachment_field_identifier);
    cy.wait(1000);
  }

  enterQuantity(value) {
    ca.enterValueInfield(this.description_field_identifier, value);
  }

//   checkLoginError() {
//     ca.verifyElementIsVisible(this.popup_field_identifier);
//   }

  checkText(value) {
    ca.verifyWebElementIsVisible(value);
  }
}
