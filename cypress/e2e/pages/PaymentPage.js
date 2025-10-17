import { CommonActions } from "../actions/CommonActions";
const ca = new CommonActions();

export class PaymentPage {
  link_identifier = 'a.MuiTypography-root.MuiTypography-inherit.MuiTypography-noWrap.MuiLink-root.MuiLink-underlineAlways.css-12u3292';

  visitPrl() {
    ca.visitUrl(this.link_identifier);
  }
}
