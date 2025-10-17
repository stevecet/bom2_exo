import { CommonActions } from "../actions/CommonActions";
const ca = new CommonActions();

export class ProductPage {
  //Web elements identifiers for the product page
  productname_field_identifier = '[name="name"]';
  price_field_identifier = '[name="price"]';
  reference_field_identifier = '[name="productExtId"]';
  description_field_identifier = '[name="description"]';
  quantity_field_identifier = '[name="quantity"]';
  total_field_identifier = '[name="totalPrice"]';
  attachment_field_identifier = '[data-testid="dropzone-input"]';
  popup_eror_identifier = "div.MuiSnackbarContent-message.css-1w0ym84";
  button_field_identifier = '[type="submit"]';
  file_identifier = '[data-testid="attachment-preview-thumb"]';
  error_identifier =
    "p.MuiFormHelperText-root.Mui-error.MuiFormHelperText-sizeMedium.MuiFormHelperText-contained.css-15oklmi";
  accordion_field_identifier =
    "div.MuiButtonBase-root.MuiAccordionSummary-root.MuiAccordionSummary-gutters.css-1d7s89y";
  link_identifier =
    "a.MuiTypography-root.MuiTypography-inherit.MuiTypography-noWrap.MuiLink-root.MuiLink-underlineAlways.css-12u3292";

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

  enterQuantity(value) {
    ca.enterValueInfield(this.quantity_field_identifier, value);
  }

  expandAccordion() {
    ca.clickOnWebElement(this.accordion_field_identifier);
    cy.wait(1000);
  }

  clickOnSave() {
    ca.clickOnWebElement(this.button_field_identifier);
    cy.wait(1000);
  }

  addAttachment(value) {
    ca.selectFile(this.attachment_field_identifier, value);
    // cy.log("Waiting for attachment to load");
    // cy.wait(2000);
  }
  // addMultipleAttachments(value, value1, value2, value3, value4, value5) {
  //   ca.selectMultipleFiles(
  //     this.attachment_field_identifier,
  //     value,
  //     value1,
  //     value2,
  //     value3,
  //     value4,
  //     value5
  //   );
  //   // cy.log("Waiting for attachment to load");
  //   // cy.wait(2000);
  // }

  enterQuantity(value) {
    ca.enterValueInfield(this.quantity_field_identifier, value);
  }

  //Method to enter a price less than 100 FCFA in the price field
  enterRandomPriceLessThan100() {
    ca.enterValueLessThan100Infield(this.price_field_identifier);
  }

  //Method to enter a non integer quantity in the quantoty field
  enterNonIntegerQuantity() {
    ca.enterNonPositiveInteger(this.quantity_field_identifier);
  }

  checkProductFormError() {
    ca.verifyWebElementIsVisible(this.error_identifier);
  }

  checkPriceLessThan100Error(value) {
    ca.verifyElementIsVisible(value);
  }

  NonIntegerError(value) {
    ca.verifyElementIsVisible(value);
  }

  checkText(value) {
    ca.verifyElementIsVisible(value);
  }

  checkFileHasBeenLoaded() {
    ca.verifyWebElementIsVisible(this.file_identifier);
  }

  checkFileHasNotBeenLoaded() {
    ca.verifyWebElementIsNotVisible(this.file_identifier);
  }

  checkOnlyFiveFilesHaveBeenLoaded() {
    ca.verifyCountElement(this.file_identifier);
  }

  checkOnlyValidFileLoads() {
    ca.verifyCorrectElementLoads(this.file_identifier);
  }

  checkTotalAmount(pricevalue, quantityvalue) {
    ca.checkTotalAmountProduct(
      this.total_field_identifier,
      pricevalue,
      quantityvalue
    );
  }

  visitPrl() {
    ca.visitUrl(this.link_identifier);
  }
}
