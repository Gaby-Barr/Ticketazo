describe('Sesiones', () => {
    
    let Usuario
    beforeEach("DatosUsuario",function(){
        cy.fixture('Usuario.json').then(function(Info){
            Usuario=Info
        })
    })

    it('Inicio de sesion', () => {

        cy.intercept('POST','/api/backend/qr/generate-gratuita').as('SuccesCom')
        cy.intercept('POST','/api/backend/auth/login').as('SuccesIni')
        cy.visit('	https://vps-3696213-x.dattaweb.com/')
        cy.get('.justify-end > .text-sm').click()
        cy.get('[data-cy="input-email"]').type(Usuario.mail)
        cy.get('[data-cy="input-password"]').type(Usuario.contr)
        cy.get('[data-cy="btn-login"]').click()

        cy.wait('@SuccesIni').then((interception) => {
            expect(interception.response.statusCode).to.equal(200)
        })

        cy.get('[data-cy="btn-ver-evento-8"]').click()

        cy.get('button').contains('Adquirir entrada').click()

        cy.get('button').contains('Auditorio').click();

        cy.get('button.bg-orange-500').each(($el, index) => {
            if (index < 4) {
            cy.wait(500)
            cy.wrap($el).click()
            }
        })

        cy.get('.relative > .flex-col > .w-full').click()

        cy.get('.mt-6 > .z-0').click()

        cy.wait('@SuccesCom').then((interception) => {
            expect(interception.response.statusCode).to.equal(200)
        })

        //cy.get('button[aria-label="Toggle menu"]').click();
        //cy.get(':nth-child(3) > .pb-4').click()

    })
})