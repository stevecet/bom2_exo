import { CommonActions } from "../actions/CommonActions";
const ca = new CommonActions();

export class DashboardPage {
  //after login, identifies the user to check correct login
  dashboard_username_field_identifier =
    "#demo-positioned-button >.MuiBox-root > p:nth-child(1)";
  checkUser(value) {
    ca.verifyUsername(this.dashboard_username_field_identifier, value);
  }
}
