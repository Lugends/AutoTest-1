/// <reference types = "cypress" />
import { slowCypressDown } from "cypress-slow-down";
import { users_atha } from "../../../test/users_atha";
slowCypressDown(100)

{baseUrl:3000}

it('Регистрация',()=>{
    cy.intercept('/api/core/register/').as('registration')
    cy.visit('https://develop.athayoga.su');
    cy.get('.MuiButtonBase-root').click();
    cy.get('#email').click().type(users_atha.users.email);
    cy.get('#password').click().type(users_atha.users.password).get('.MuiInputAdornment-root > .MuiButtonBase-root').click();
    cy.get('.MuiButton-root').click();
    cy.wait('@registration').then(i => { 
        expect(i.response.statusCode).to.equal(200)
        expect(i.response.body).to.equal("Success")
    })
    
})

