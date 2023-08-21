/// <reference types= "cypress" />

describe('Criar Conta Aosep', () => {
  context('cadastro usuario Aosep', () => {
    it('realizo o cadastro com sucesso', () => {
      cy.visitAosep()
      cy.createUserAosep()
    })
  })
})

describe('Criar Conta Natura', () => {
  context('cadastro usuario Natura', () => {
    it.only('realizo o cadastro com sucesso', () => {
      cy.visitNatura()
      cy.createUserNatura()
    })
  })
})
