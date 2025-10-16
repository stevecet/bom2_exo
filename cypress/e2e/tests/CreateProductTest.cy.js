import { ProductPage } from "../pages/ProductPage";
import { Authenticator } from "../actions/Authenticator";

const auth = new Authenticator();
const productPage = new ProductPage();
const product_data_path = "product/product.json";
const user_data_path = "user/user.json";
describe("Login Page", () => {
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
    cy.visit("/product/create");
  });
  it.only("Verify Product creation page is available", () => {
    productPage.enterProductName(productData.product_data.product_name);
    productPage.enterPrice(productData.product_data.price);
    productPage.enterReference(productData.product_data.reference);
    productPage.enterDescription(productData.product_data.description);
    productPage.clickOnSave();
    productPage.checkText(productData.messages.successful_creation);
  });
  it("Verify Create Product with correct and basic(required) information works", () => {});
  it("Verify Create Product with no provided information does not work", () => {});
  it("Verify Create Product requires a Product name", () => {});
  it("Verify Create Product requires a price equal or more than 100", () => {});
  it("Verify Create Product requires a Reference", () => {});
  it("Verify Create Product requires a Description", () => {});
  it("Verify Price and Quantity fields take only integers", () => {});
  it("Verify Quantity field take only positive integers", () => {});
  it("Verify 'Total Amount' multiplies Quantity and Price", () => {});
  it("Verify 'Attachement' takes only supported extensions", () => {});
  it("Verify generated link and displays created item information", () => {});
});
