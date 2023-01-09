/// <reference types = "cypress" />
import { slowCypressDown } from "cypress-slow-down";
import { users_atha } from "../../../test/users_atha";
slowCypressDown(100)

{baseUrl:3000}

it ('Авторизация и Выход', ()=>{
    cy.visit('https://develop.athayoga.su')
    cy.get(':nth-child(2) > .MuiTypography-root').click();
    cy.get('#email').click().type(users_atha.users.email);
    cy.get('#password').click().type(users_atha.users.password).get('.MuiInputAdornment-root > .MuiButtonBase-root').click();
    cy.get('.form__container > .MuiButton-root').click();
    cy.wait(2000)
    cy.get('.MuiList-root > button').click()
})
