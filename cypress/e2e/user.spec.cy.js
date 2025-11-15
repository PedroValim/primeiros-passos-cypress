import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyy-mm-dd']",
    dateCloseButton: ".--close",
  }

  it.only('User Info Update - Success', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Admin');
    cy.get(selectorsList.passwordField).type('admin123');
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
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