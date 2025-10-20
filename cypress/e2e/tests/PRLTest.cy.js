import { PaymentPage } from "../pages/PaymentPage";

const paymentPage = new PaymentPage();
const payment_data_path = "payment/payment.json";
const paymenturl_data_path = "payment/url.json";

describe("Payment Request Link Test", () => {
  let paymentLink = null;
  let paymentData = null;
  before(() => {
    cy.fixture(paymenturl_data_path).then((data) => {
      paymentLink = data;
    });
    cy.fixture(payment_data_path).then((data) => {
      paymentData = data;
    });
  });
  beforeEach(() => {
    cy.visit(paymentLink.url);
  });
  it("Verify user can make payment", () => {
    paymentPage.enterQuantity(paymentData.payment_details.quantity);
    paymentPage.selectOmPayment();
    paymentPage.enterPhoneNumber(paymentData.payment_details.om_payment_number);
    paymentPage.submitPayment();
    paymentPage.enterName(paymentData.payment_details.name);
    paymentPage.submitPayment();
    paymentPage.confirmPayment();
  });

  it("Verify user can select more than available quantity", () => {
    paymentPage.enterQuantity(paymentData.payment_details.unavailable_quantity);
    paymentPage.checkQuantityError(
      paymentData.payment_details.quantity_error_message
    );
  });

  it.only("Verify MTN Mobile money accepts only MTN phone numbers", () => {
    paymentPage.selectMomoPayment();
    paymentPage.enterPhoneNumber(paymentData.payment_details.om_payment_number);
    paymentPage.checkNumberError(
      paymentData.payment_details.number_error_message
    );
  });
  it.only("Verify Orange Money accepts only Orange phone numbers", () => {
    paymentPage.selectOmPayment();
    paymentPage.enterPhoneNumber(
      paymentData.payment_details.momo_payment_number
    );
    paymentPage.checkNumberError(
      paymentData.payment_details.number_error_message
    );
  });
});
