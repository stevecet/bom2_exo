import { CommonActions } from "../actions/CommonActions";
const ca = new CommonActions();

export class PaymentPage {
  link_identifier =
    "a.MuiTypography-root.MuiTypography-inherit.MuiTypography-noWrap.MuiLink-root.MuiLink-underlineAlways.css-12u3292";
  add_quantity_identifier = "span.plus";
  reduce_quantity_identifier = "span.minus";
  quantity_field_identifier = '[name="productQuantity"]';
  momo_button_identifier = 'div.col-3:nth-of-type(2)';
  om_button_identifier = "div.col-3:nth-of-type(2)";
  eu_button_identifier = "div:nth-of-type(3)";
  phone_number_identifier = '[data-cy="input"]';
  submit_button_identifier = '[data-testid="submit-button"]';
  confirm_button_identifier = '[data-testid="payment-confirmation-btn"]';
  name_field_identifier = '[data-cy="input-mandatory"]';

  visitPrl() {
    ca.visitUrl(this.link_identifier);
  }
  addQuantity() {
    ca.clickOnWebElement(this.add_quantity_identifier);
  }
  reduceQuantity() {
    ca.clickOnWebElement(this.reduce_quantity_identifier);
  }
  enterQuantity(value) {
    ca.enterValueInfield(this.quantity_field_identifier, value);
  }
  omPayment() {
    ca.selectPayment(this.om_button_identifier);
  }
  momoPayment() {
    ca.selectPayment(this.momo_button_identifier);
  }
  euPayment() {
    ca.selectPayment(this.eu_button_identifier);
  }
  enterPhoneNumber(value) {
    ca.enterValueInfield(this.phone_number_identifier, value);
  }
  enterName(value) {
    ca.enterValueInfield(this.name_field_identifier, value);
  }
  checkPhoneNumber(value) {}

  submitPayment() {
    ca.clickOnWebElement(this.submit_button_identifier);
    cy.wait(500);
  }
  confirmPayment() {
    ca.clickOnWebElement(this.confirm_button_identifier);
  }
  checkQuantityError(value) {
    ca.verifyElementIsVisible(value);
  }
  checkNumberError(value) {
    ca.verifyElementIsVisible(value);
  }
}
