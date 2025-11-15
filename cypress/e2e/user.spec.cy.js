import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPAge'
import DashboardPage from '../pages/dashboardPage'

const loginPage = new loginPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    
   
    dashboardGrid: ".orangehrm-dashboard-grid",
   
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyy-mm-dd']",
    genericCombobox: ".oxd-select-text--arrow",
    secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
    thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
    dateCloseButton: ".--close",
    submitButton: ".orangehrm-left-space"
  }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    DashboardPage.checkDashboardPage()
    
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTeste')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTeste')
    cy.get(selectorsList.genericField).eq(3).clear().type('NickNameTeste')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTeste')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriversLicenceTest')
    cy.get(selectorsList.genericField).eq(7).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(8).clear().type('ssnNumberTest')
    cy.get(selectorsList.genericField).eq(9).clear().type('sinNumberTest')
    cy.get(selectorsList.genericField).eq(0).click()
    cy.get('.oxd-toat-close')

    cy.get(selectorsList.genericCombobox).eq(0).click({force:true})
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click({force:true})
    cy.get(selectorsList.thirdItemCombobox).click()


  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Test');
    cy.get(selectorsList.passwordField).type('Test');
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
''