import { Authenticator } from "../actions/Authenticator";

import { CreateProduct } from "../actions/CreateProduct";
import { PaymentPage } from "../pages/PaymentPage";
const paymentPage = new PaymentPage();
const auth = new Authenticator();
const createProduct = new CreateProduct();
const product_data_path = "product/product.json";
const user_data_path = "user/user.json";

describe("Payment Request Link Test", () => {
  let productData = null;
  let userData = null;
  before(() => {
    cy.fixture(product_data_path).then((data) => {
      productData = data;
    });
    cy.fixture(user_data_path).then((data) => {
      userData = data;
    });
  });
  beforeEach(() => {
    auth.Authenticate(userData);
    createProduct.NewProduct(productData);
  });
  it.only("Verify generated link and displays created item information", () => {
    paymentPage.visitPrl()
  });
});

it('Test', function() {});
