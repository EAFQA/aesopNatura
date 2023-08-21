/// <reference types= "cypress" />

describe('Criar Conta Aosep', () => {
  context('cadastro Usuario Aosep', () => {
    it('realizo o cadastro com sucesso', () => {
      cy.visitAosep()
      cy.createUserAosep()
    })
  })
})

describe('Criar Conta Natura', () => {
  context('Cadastro Usuario Natura', () => {
    it.only('realizo o cadastro com sucesso', () => {
      cy.visitNatura()
      cy.createUserNatura()
    })
  })
})
