import { Authenticator } from "../actions/Authenticator";
import { CreateProduct } from "../actions/CreateProduct";
const auth = new Authenticator();
const createProduct = new CreateProduct();
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
    cy.fixture(user_data_path).then((data) => {
      userData = data;
      auth.Authenticate(userData);
    });
    cy.fixture(product_data_path).then((data) => {
      productData = data;
      createProduct.NewProduct(productData);
    });
    cy.fixture(payment_data_path).then((data) => {
      paymentData = data;
    });
    cy.fixture(paymenturl_data_path).then((data) => {
      paymentLink = data;
    });
  });
  it("Verify user can make payment", () => {
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
