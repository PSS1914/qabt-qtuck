describe('Login', () => {
  it('deve logar com sucesso', () => {
    const user = {
      name: 'Paulo',
      instagram: '@paulin',
      password: 'pwd123'
    }

    cy.login(user)
    cy.loggedUser(user.name)
  })

  it('nao deve logar com senha invalida', () => {
    const user = {
      instagram: '@paulin',
      password: '123456'
    }

    cy.login(user)
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('nao deve logar instagram inexistente', () => {
    const user = {
      instagram: '@rockspapito',
      password: '123456'
    }

    cy.login(user)
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('instagram deve ser obrigatório', ()=> {
    const user= {
      password: 'pwd123'
    }

    cy.login(user)
    cy.modalHaveText('Por favor, informe o seu código do Instagram!')
  })

  it('senha deve ser obrigatório', ()=> {
    const user= {
      instagram:'@papito',
    }

    cy.login(user)
    cy.modalHaveText('Por favor, informe a sua senha secreta!')

  })

  it('todos os campos devem ser obrigatórios', ()=> {
    const user= {
      
    }

    cy.login(user)
    cy.modalHaveText('Por favor, informe suas credenciais!')

  })


})
