//Testing PRL using url generated from the product creation, saved and loaded from the fixture and asserted using cy.origin()

import { Authenticator } from "../actions/Authenticator";
import { ProductPage } from "../pages/ProductPage";
const auth = new Authenticator();
const createProduct = new ProductPage();
const product_data_path = "product/product.json";
const user_data_path = "user/user.json";
const payment_data_path = "payment/payment.json";
const paymenturl_data_path = "payment/url.json";

describe("Payment Request Link Test", () => {
  let productData = null;
  let userData = null;
  let paymentData = null;
  let paymentLink = null;
  before(() => {
    //load user data from use fixture and use it to Authenticate
    cy.fixture(user_data_path).then((data) => {
      userData = data;
      auth.Authenticate(userData);
    });

    //load product data from fixture and create a product with it
    cy.fixture(product_data_path).then((data) => {
      productData = data;
      createProduct.newProduct(productData);
    });
    //load data to fill payment forms
    cy.fixture(payment_data_path).then((data) => {
      paymentData = data;
    });

    //load dynamically saved url from the fixture
    cy.fixture(paymenturl_data_path).then((data) => {
      paymentLink = data;
    });
  });
  it("Verify user can make payment", () => {
    //cy.origin() to perform test on domain different from the base domain with the domain as first parameter
    //Pass all data as args and import any fonction within the origin context as origin can't communicate with data declared outside its scope
    cy.origin(paymentLink.url, { args: { paymentData } }, ({ paymentData }) => {
      const { PaymentPage } = Cypress.require("../pages/PaymentPage");
      const paymentPage = new PaymentPage();
      cy.contains("Verifiez votre commande");
      paymentPage.enterQuantity(paymentData.payment_details.quantity);
      paymentPage.selectOmPayment();
      paymentPage.enterPhoneNumber(
        paymentData.payment_details.om_payment_number
      );
      paymentPage.submitPayment();
      paymentPage.enterName(paymentData.payment_details.name);
      paymentPage.submitPayment();
      paymentPage.confirmPayment();
    });
  });

  it("Check if - button reduces the quantity", () => {
    cy.origin(paymentLink.url, { args: { paymentData } }, ({ paymentData }) => {
      const { PaymentPage } = Cypress.require("../pages/PaymentPage");
      const paymentPage = new PaymentPage();
      //visit / to reset the test from its previous state
      cy.visit("/");
      paymentPage.enterQuantity(paymentData.payment_details.quantity);
      paymentPage.reduceQuantity();
      paymentPage.checkQuantity(paymentData.payment_details.reduced_quantity);
    });
  });

  it("Check if + button increases the quantity", () => {
    cy.origin(paymentLink.url, { args: { paymentData } }, ({ paymentData }) => {
      const { PaymentPage } = Cypress.require("../pages/PaymentPage");
      const paymentPage = new PaymentPage();
      cy.visit("/");
      paymentPage.enterQuantity(paymentData.payment_details.quantity);
      paymentPage.addQuantity();
      paymentPage.checkQuantity(paymentData.payment_details.added_quantity);
    });
  });

  it("Verify user can select more than available quantity", () => {
    cy.origin(paymentLink.url, { args: { paymentData } }, ({ paymentData }) => {
      const { PaymentPage } = Cypress.require("../pages/PaymentPage");
      const paymentPage = new PaymentPage();
      cy.visit("/");
      paymentPage.enterQuantity(
        paymentData.payment_details.unavailable_quantity
      );
      paymentPage.checkQuantityError(
        paymentData.payment_details.quantity_error_message
      );
    });
  });

  it("Verify MTN Mobile money accepts only MTN phone numbers", () => {
    cy.origin(paymentLink.url, { args: { paymentData } }, ({ paymentData }) => {
      const { PaymentPage } = Cypress.require("../pages/PaymentPage");
      const paymentPage = new PaymentPage();
      cy.visit("/");
      paymentPage.selectMomoPayment();
      paymentPage.enterPhoneNumber(
        paymentData.payment_details.om_payment_number
      );
      paymentPage.checkNumberError(
        paymentData.payment_details.number_error_message
      );
    });
  });
  it("Verify Orange Money accepts only Orange phone numbers", () => {
    cy.origin(paymentLink.url, { args: { paymentData } }, ({ paymentData }) => {
      const { PaymentPage } = Cypress.require("../pages/PaymentPage");
      const paymentPage = new PaymentPage();
      cy.visit("/");
      paymentPage.selectOmPayment();
      paymentPage.enterPhoneNumber(
        paymentData.payment_details.momo_payment_number
      );
      paymentPage.checkNumberError(
        paymentData.payment_details.number_error_message
      );
    });
  });
});
