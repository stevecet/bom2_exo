import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const user_data_path = "user/user.json";
const login_data_path = "login/login.json";

describe("Login Page", () => {
  let userData = null;
  let loginData = null;
  before(() => {
    // Loading the Data from fixture
    cy.fixture(user_data_path).then((data) => {
      userData = data;
    });
    cy.fixture(login_data_path).then((data) => {
      loginData = data;
    });
  });
  beforeEach(() => {
    cy.visit("login");
  });
  it("Verify Successful Login for valid credentials", () => {
    loginPage.enterUsername(userData.opsAdmin);
    loginPage.enterPassword(userData.opsAdminPassword);
    loginPage.clickOnSignIn();
    dashboardPage.checkUser(userData.opsAdmin);
  });
  it("Verify Failed Login for invalid password", () => {
    loginPage.enterUsername(userData.opsAdmin);
    loginPage.enterPassword(loginData.incorrect_data.password);
    loginPage.clickOnSignIn();
    loginPage.checkLoginError();
  });
  it("Verify Failed Login for invalid username", () => {
    loginPage.enterUsername(loginData.incorrect_data.username);
    loginPage.enterPassword(userData.opsAdminPassword);
    loginPage.clickOnSignIn();
    loginPage.checkLoginError();
  });
  it("Verify Failed Login for empty username field", () => {
    loginPage.enterPassword(userData.opsAdminPassword);
    loginPage.clickOnSignIn();
    loginPage.checkTextError(loginData.validation_messages.invalid_username);
  });
  it("Verify Failed Login empty password field", () => {
    loginPage.enterUsername(userData.opsAdmin);
    loginPage.clickOnSignIn();
    loginPage.checkTextError(loginData.validation_messages.invalid_password);
  });
});
