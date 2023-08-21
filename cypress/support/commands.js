import {faker} from '@faker-js/faker'

const fakerbr = require('faker-br');

Cypress.Commands.add('visitAosep', ()=> {
    cy.visit('/cadastre-se')
    cy.title('eq', 'Aesop')
})
Cypress.Commands.add('createUserAosep', ()=> {
    cy.get('input[name=firstName]').type(faker.person.firstName())
    cy.get('input[name=lastName]').type(faker.person.lastName())
    cy.get('input[name=email]').type(faker.internet.email())
    cy.get('#password-field').type('Eduqa@2023')
    cy.get('#confirmPassword-field').type('Eduqa@2023')
    cy.get('input[name="cpf"').type(fakerbr.br.cpf())
    cy.get('input[value="male"]').check()
    cy.get('input[name="homePhone"').type(faker.phone.number('11-9 ####-##-##'))
    cy.get('input[name="receiveNewsLetter"').click()
    cy.get('#infContOptIn').click()
    cy.get('#acceptedterms').click()
    cy.contains('Criar Conta').click()
    cy.contains('Meus Pedidos').should('be.visible')
})

Cypress.Commands.add('visitNatura', ()=> {
    cy.visit(Cypress.env('naturaUrl') + '/cadastre-se')
    cy.title('eq', 'Cadastre-se | Natura Brasil')
})

Cypress.Commands.add('createUserNatura', ()=> {
    cy.get('input[name=firstName]').type(faker.person.firstName())
    cy.get('input[name=lastName]').type(faker.person.lastName())
    cy.get('input[name=email]').type(faker.internet.email())
    cy.get('#password-field').type('Eduqa@2023')
    cy.get('#confirmPassword-field').type('Eduqa@2023')
    cy.get('input[name="cpf"').type(fakerbr.br.cpf())
    cy.get('input[value="male"]').check()
    cy.get('input[name="homePhone"').type(faker.phone.number('11-9 ####-##-##'))
    cy.get('input[name="receiveNewsLetter"').click()
    cy.get('#infContOptIn').click()
    cy.get('#acceptedterms').click()
    cy.contains('Criar Conta').click()
    cy.contains('Meus acessos').should('be.visible')
})