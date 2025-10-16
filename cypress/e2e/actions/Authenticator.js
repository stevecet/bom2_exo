//This is used to authenticate the user

import { LoginPage } from "../pages/LoginPage";
const loginPage = new LoginPage();
export class Authenticator {
  Authenticate(data) {
    cy.visit("/login");
    loginPage.enterUsername(data.username);
    loginPage.enterPassword(data.password);
    loginPage.clickOnSignIn();
  }
}
