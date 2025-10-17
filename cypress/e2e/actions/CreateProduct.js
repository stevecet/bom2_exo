//This is used to create a product

import { ProductPage } from "../pages/ProductPage";
const productPage = new ProductPage();
export class CreateProduct {
  NewProduct(data) {
    cy.visit("product/create");
    productPage.enterProductName(data.product_data.product_name);
    productPage.enterPrice(data.product_data.price);
    productPage.enterReference(data.product_data.reference);
    productPage.enterDescription(data.product_data.description);
    productPage.clickOnSave();
    // productPage.visitPrl()
  }
}
