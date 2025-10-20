import { ProductPage } from "../pages/ProductPage";
import { Authenticator } from "../actions/Authenticator";

const auth = new Authenticator();
const productPage = new ProductPage();
const product_data_path = "product/product.json";
const user_data_path = "user/user.json";
describe("Create Product Tests", () => {
  let productData = null;
  let userData = null;
  before(() => {
    //load products from product fixture
    cy.fixture(product_data_path).then((data) => {
      productData = data;
    });
    //load user from user fixture
    cy.fixture(user_data_path).then((data) => {
      userData = data;
    });
  });
  beforeEach(() => {
    //authenticate before each test case and navigating to the product creation page
    auth.Authenticate(userData);
    cy.visit("/product/create");
  });
  it("Verify Create Product with correct and basic(required) information works", () => {
    productPage.enterProductName(productData.product_data.product_name);
    productPage.enterPrice(productData.product_data.price);
    productPage.enterReference(productData.product_data.reference);
    productPage.enterDescription(productData.product_data.description);
    productPage.clickOnSave();
    productPage.checkText(productData.messages.successful_creation);
  });
  it("Verify Create Product requires a Product name", () => {
    productPage.enterPrice(productData.product_data.price);
    productPage.enterReference(productData.product_data.reference);
    productPage.enterDescription(productData.product_data.description);
    productPage.clickOnSave();
    productPage.checkProductFormError();
  });
  it("Verify Create Product requires a price", () => {
    productPage.enterProductName(productData.product_data.product_name);
    productPage.enterReference(productData.product_data.reference);
    productPage.enterDescription(productData.product_data.description);
    productPage.clickOnSave();
    productPage.checkProductFormError();
  });
  it("Verify Create Product requires a price equal or more than 100", () => {
    productPage.enterProductName(productData.product_data.product_name);
    productPage.enterRandomPriceLessThan100();
    productPage.enterReference(productData.product_data.reference);
    productPage.enterDescription(productData.product_data.description);
    productPage.clickOnSave();
    productPage.checkPriceLessThan100Error(productData.messages.price_error);
  });
  it("Verify Create Product requires a Reference", () => {
    productPage.enterProductName(productData.product_data.product_name);
    productPage.enterPrice(productData.product_data.price);
    productPage.enterDescription(productData.product_data.description);
    productPage.clickOnSave();
    productPage.checkProductFormError();
  });
  it("Verify Create Product requires a Description", () => {
    productPage.enterProductName(productData.product_data.product_name);
    productPage.enterPrice(productData.product_data.price);
    productPage.enterReference(productData.product_data.reference);
    productPage.clickOnSave();
    productPage.checkProductFormError();
  });
  it("Verify Quantity field takes only positive integers", () => {
    productPage.enterProductName(productData.product_data.product_name);
    productPage.enterPrice(productData.product_data.price);
    productPage.enterReference(productData.product_data.reference);
    productPage.enterDescription(productData.product_data.description);
    productPage.expandAccordion();
    productPage.enterNonIntegerQuantity();
    productPage.clickOnSave();
    productPage.NonIntegerError(productData.messages.quantity_error);
  });
  it("Verify adding Attachment works", () => {
    productPage.expandAccordion();
    productPage.addAttachment(productData.files.valid_file_2);
    productPage.checkFileHasBeenLoaded();
  });
  it("Verify 'Attachment' takes only supported extensions", () => {
    productPage.expandAccordion();
    productPage.addAttachment(productData.files.invalid_file_1);
    productPage.checkFileHasNotBeenLoaded();
  });
  it("Verify user inputs only 5 max Attachements", () => {
    productPage.expandAccordion();
    productPage.addAttachment(productData.files.valid_file_2);
    productPage.addAttachment(productData.files.valid_file_2);
    productPage.addAttachment(productData.files.valid_file_2);
    productPage.addAttachment(productData.files.valid_file_2);
    productPage.addAttachment(productData.files.valid_file_2);
    productPage.addAttachment(productData.files.valid_file_2);
    productPage.checkOnlyFiveFilesHaveBeenLoaded();
  });
});
