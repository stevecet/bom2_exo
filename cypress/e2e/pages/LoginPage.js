import { CommonActions } from "../actions/CommonActions";
const ca = new CommonActions();

export class LoginPage {
  //Web elements identifiers for the login page
  username_field_identifier = '[name="username"]';
  password_field_identifier = '[name="password"]';
  button_field_identifier = '[type="submit"]';
  popup_field_identifier = 'div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation6.MuiSnackbarContent-root.RaNotification-error.css-mwttsk';

  enterUsername(value) {
    ca.enterValueInfield(this.username_field_identifier, value);
  }

  enterPassword(value) {
    ca.enterValueInfield(this.password_field_identifier, value);
  }

  clickOnSignIn() {
    ca.clickOnWebElement(this.button_field_identifier);
    cy.wait(1000);
  }
  checkUser(value) {
    ca.verifyUsername(this.dashboard_username_field_identifier, value);
  }
  checkLoginError(){
    ca.verifyElementIsVisible(this.popup_field_identifier)
  }

  checkText(value){
    ca.verifyWebElementIsVisible(value)
  }
}
