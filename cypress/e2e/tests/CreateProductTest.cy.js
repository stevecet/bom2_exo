import { ProductPage } from "../pages/ProductPage";

const productPage = new ProductPage();
const product_data_path = "product/product.json";

describe("Login Page", () => {
  let productData = null;
  before(() => {
    cy.fixture(product_data_path).then((data) => {
      productData = data;
    });
  });
  beforeEach(() => {
    cy.visit("product/create");
  });
  it.only("Verify Product creation page is available", () => {
    productPage.enterProductName(productData.product_name);
    productPage.enterPrice(productData.price);
    productPage.enterReference(productData.reference);
    productPage.enterDescription(productData.description);
    productPage.clickOnSave();
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
