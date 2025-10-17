// import { Authenticator } from "../actions/Authenticator";

// import { CreateProduct } from "../actions/CreateProduct";
// import { PaymentPage } from "../pages/PaymentPage";
// const paymentPage = new PaymentPage();
// const auth = new Authenticator();
// const createProduct = new CreateProduct();
// const product_data_path = "product/product.json";
// const user_data_path = "user/user.json";
// const payment_data_path = "payment/payment.json";

// describe("Payment Request Link Test", () => {
//   let productData = null;
//   let userData = null;
//   let paymentData = null;
// //   let storedUrl = "";
//   before(() => {
//     cy.fixture(product_data_path).then((data) => {
//       productData = data;
//     });
//     cy.fixture(user_data_path).then((data) => {
//       userData = data;
//     });
//     cy.fixture(payment_data_path).then((data) => {
//       paymentData = data;
//     });
//   });
//   beforeEach(() => {
//     auth.Authenticate(userData);
//     createProduct.NewProduct(productData);
//     paymentPage.visitPrl();
//     // cy.url().then((url) => {
//     //   storedUrl = url;
//     // });
//   });
//   it.only("Verify user can make payment", () => {
//     // cy.origin(
//     //   storedUrl,
//     //   { args: { paymentPage } },
//     //   ({ paymentPage }) => {
//     //     cy.contains("Verifiez votre commande");
//     //     paymentPage.enterQuantity(paymentData.quantity);
//     //     // paymentPage.selectPaymentMethod(paymentData.payment_method);
//     //     // paymentPage.enterPhoneNumber(paymentData.payment_number);
//     //   }
//     // );
//     cy.contains("Verifiez votre commande");
//     paymentPage.enterQuantity(paymentData.quantity);
//   });
// });
