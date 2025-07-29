describe('Crear evento', () => {

    let Organi
    let Admin
    beforeEach("Logins",function(){

        cy.fixture('Organi.json').then(function(Info){
            Organi=Info
        })

        cy.fixture('Admin.json').then(function(Info){
            Admin=Info
        })
    })

    const Fecha = new Date()
    const anio = Fecha.getFullYear();const mes = String(Fecha.getMonth()).padStart(2, '0');const dia = String(Fecha.getDate()).padStart(2, '0');const hora = String(Fecha.getHours()).padStart(2, '0'); const minutos = String(Fecha.getMinutes()).padStart(2, '0'); const segundos = String(Fecha.getSeconds()).padStart(2, '0');
    const HMS = anio + mes + dia + hora + minutos + segundos;

    it('Flujo creacion de evento', () => {

        cy.visit('	https://vps-3696213-x.dattaweb.com/')
        cy.get('.justify-end > .text-sm').click()
        cy.get('[data-cy="input-email"]').type(Organi.mail)
        cy.get('[data-cy="input-password"]').type(Organi.contr)
        cy.get('[data-cy="btn-login"]').click()

        cy.get('[aria-label="Toggle menu"]').eq(0).click()
        cy.get(':nth-child(2) > .pb-4').click()

        cy.get('[data-cy="input-titulo"]').type('Prueba ' + HMS)
        cy.get('[data-cy="select-edad"]').click()
        cy.get('[data-cy="option-edad-ATP"]').click()
        cy.get('[data-cy="select-genero"]').click()
        cy.get('[data-cy="option-genero-Recital"]').click()
        cy.get('[data-cy="select-lugar-evento"]').click()
        cy.get('[data-cy="option-lugar-26"]').click()
        cy.get('[id^=react-aria]').eq(28).click()
        cy.get('[id^=react-aria]').eq(33).click()
        cy.get('[id^=react-aria]').eq(15).type(120)
        cy.get('[id^=react-aria]').eq(21).type(1)
        cy.get('[id^=react-aria]').eq(22).type(0)
        cy.get('[data-cy="input-info"]').type('Prueba ' + HMS)
        cy.get('.rounded-b-large > .z-0').click()

        cy.get('button').contains('General').click()
        cy.get('[id^=react-aria]').eq(2).click()
        cy.contains('li', 'General').click()
        cy.get(':nth-child(3) > .group > .relative > .inline-flex').type(1000)
        cy.get('.rounded-b-large > :nth-child(2)').click()
        cy.get('input[type="file"][accept="image/*"]').selectFile('cypress\\fixtures\\Recital.jpg', {force:true})
        cy.get('.rounded-b-large > :nth-child(2)').click()
        cy.get('.rounded-b-large > .bg-primary').click()
        
    })
    
    it('Aprobacion del evento', () => {

        cy.visit('	https://vps-3696213-x.dattaweb.com/')
        cy.get('.justify-end > .text-sm').click()
        cy.get('[data-cy="input-email"]').type(Admin.mail)
        cy.get('[data-cy="input-password"]').type(Admin.contr)
        cy.get('[data-cy="btn-login"]').click()
        cy.get('[aria-label="Toggle menu"]').eq(0).click()
        cy.get(':nth-child(9) > .pb-4').click()
        cy.get('[data-cy^="select-estado"]').eq(0).click()
        cy.get('[data-cy$="aprobado"]').eq(1).click()
        cy.get('[data-cy="btn-confirmar-modal"]').click()

    })
    
    it('Verificacion de creacion', () => {
    
        cy.visit('	https://vps-3696213-x.dattaweb.com/')
        cy.get('.justify-end > .text-sm').click()
        cy.get('[data-cy="input-email"]').type(Organi.mail)
        cy.get('[data-cy="input-password"]').type(Organi.contr)
        cy.get('[data-cy="btn-login"]').click()
        cy.get('[aria-label="Toggle menu"]').eq(0).click()
        cy.get(':nth-child(3) > .pb-4').click()
        cy.contains('Prueba ' + HMS).should('be.visible')

    })


})