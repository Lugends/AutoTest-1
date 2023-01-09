/// <reference types = "cypress" />
import { slowCypressDown } from "cypress-slow-down";
import { createThisTypeNode } from "typescript";
import { users_atha } from "../../../test/users_atha";
slowCypressDown(100)

{baseUrl:3000}

it('Восстановление пароля', ()=>{
    cy.visit('https://develop.athayoga.su')
    cy.get(':nth-child(2) > .MuiTypography-root').click();
    cy.get('[style="text-align: right;"] > .MuiTypography-root').click();
    cy.wait(2000)
    cy.get('#email').click().type(users_atha.users.email);
    cy.get('.MuiButtonBase-root').click();
    })