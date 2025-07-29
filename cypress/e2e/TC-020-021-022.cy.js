describe('Registro', () => {

    beforeEach(() =>{

        cy.visit('https://vps-3696213-x.dattaweb.com/')
        cy.get('.justify-end > .text-sm').click()
        cy.get('[data-cy="btn-register-user"]').click()

    })
    
    
    it('Registro Nulo', () => {

        cy.get('[data-cy="btn-registrarse"]').click()

        cy.get('.grid > :nth-child(1) > .hidden').should('be.visible')
        cy.get('.grid > :nth-child(2) > .hidden').should('be.visible')
        cy.get(':nth-child(3) > .hidden').should('be.visible')
        cy.get(':nth-child(4) > .hidden').should('be.visible')
        cy.get(':nth-child(5) > .data-\\[hidden\\=true\\]\\:hidden > .hidden').should('be.visible')
        cy.get(':nth-child(6) > .data-\\[hidden\\=true\\]\\:hidden > .hidden').should('be.visible')
        cy.get('[data-slot="base"][data-has-end-content="true"] > .hidden').should('be.visible')
        cy.get(':nth-child(8) > .hidden').should('be.visible')
        cy.get(':nth-child(9) > .hidden').should('be.visible')
        cy.get(':nth-child(10) > .hidden').should('be.visible')
        cy.get(':nth-child(11) > .hidden').should('be.visible')

    })

    it('Registro invalido', () => {
    
    var Nombre = ''
    var Email = ''
    var Contr = ''

    cy.intercept('POST','/api/backend/register/register-user').as('FailedReg')
    
    cy.get('[data-cy="input-nombres"]').type(Nombre_Aleatorio())      

    cy.get('[data-cy="select-provincia"]').click()
    cy.get('li[role="option"]').eq(0).click();

    cy.get('[data-cy="select-localidad"]').click()
    cy.get('li[role="option"]').eq(0).click();

        function Nombre_Aleatorio() {

           var text1 = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (var i = 0; i < 1; i++)
            text1 += possible.charAt(Math.floor(Math.random() * possible.length));

            var text2 = "";
            var possible = "abcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 9; i++)
            text2 += possible.charAt(Math.floor(Math.random() * possible.length));

            Nombre = text1 + text2;

        return Nombre;
        }

    cy.get('[data-cy="input-apellido"]').type(Apellido_Aleatorio())      

        function Apellido_Aleatorio() {
            
            var text1 = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (var i = 0; i < 1; i++)
            text1 += possible.charAt(Math.floor(Math.random() * possible.length));

            var text2 = "";
            var possible = "abcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 9; i++)
            text2 += possible.charAt(Math.floor(Math.random() * possible.length));

            var text3 = "";

            text3 = text1 + text2;

        return text3;
        }

    cy.get('[data-cy="input-telefono"]').type(Telefono_Aleatorio())      

        function Telefono_Aleatorio() {
            
            var text = "";
            var possible = "0123456789";
            for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
        }

    cy.get('[data-cy="input-dni"]').type(DNI_Aleatorio())      

        function DNI_Aleatorio() {
            
            var text = "";
            var possible = "0123456789";
            for (var i = 0; i < 8; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
        }

    cy.get('[data-cy="input-email"]').type(Email_Aleatorio())    

        function Email_Aleatorio() {
            
            var text1 = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < 8; i++)
            text1 += possible.charAt(Math.floor(Math.random() * possible.length));

            var text2 = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < 8; i++)
            text2 += possible.charAt(Math.floor(Math.random() * possible.length));


            Email = text1 + '@' + text2;

        return Email;
        }
    
        cy.get('[data-cy="input-confirmar-email"]').type(Email)

        cy.get('[data-cy="input-password"]').type(Contr_Aleatorio())      

        function Contr_Aleatorio() {

            var text = "";
            var possible = "abcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

            Contr = text;

        return Contr;
        }

        cy.get('[data-cy="input-repetir-password"]').type(Contr)

        cy.get('[id^=react-aria]').eq(19).type('12')
        cy.get('[id^=react-aria]').eq(20).type('09')
        cy.get('[id^=react-aria]').eq(21).type('2008')
    
        cy.get('[data-cy="btn-registrarse"]').click()

        cy.wait('@FailedReg').then((interception) => {
            expect(interception.response.statusCode).to.equal(400)
        })

        cy.get('[data-cy="error-message"]').contains(/el correo electrónico no es válido. La contraseña debe tener al menos 6 caracteres/i);

    })

    it('Registro valido', () => {
    
    var Nombre = ''
    var Email = ''
    var Contr = ''
    
    cy.intercept('POST','/api/backend/register/register-user').as('SuccesReg')
    
    cy.get('[data-cy="input-nombres"]').type(Nombre_Aleatorio())      

        function Nombre_Aleatorio() {

            var text1 = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (var i = 0; i < 1; i++)
            text1 += possible.charAt(Math.floor(Math.random() * possible.length));

            var text2 = "";
            var possible = "abcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 9; i++)
            text2 += possible.charAt(Math.floor(Math.random() * possible.length));

            Nombre = text1 + text2;

        return Nombre;
        }

        cy.get('[data-cy="input-apellido"]').type(Apellido_Aleatorio())      

        function Apellido_Aleatorio() {
            
            var text1 = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (var i = 0; i < 1; i++)
            text1 += possible.charAt(Math.floor(Math.random() * possible.length));

            var text2 = "";
            var possible = "abcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 9; i++)
            text2 += possible.charAt(Math.floor(Math.random() * possible.length));

            var text3 = "";

            text3 = text1 + text2;

        return text3;
        }

        cy.get('[data-cy="input-telefono"]').type(Telefono_Aleatorio())      

        function Telefono_Aleatorio() {
            
            var text = "";
            var possible = "0123456789";
            for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
        }

        cy.get('[data-cy="input-dni"]').type(DNI_Aleatorio())      

        function DNI_Aleatorio() {
            
            var text = "";
            var possible = "0123456789";
            for (var i = 0; i < 8; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
        }

        cy.get('[data-cy="select-provincia"]').click()
        cy.get('li[role="option"]').eq(0).click();

        cy.get('[data-cy="select-localidad"]').click()
        cy.get('li[role="option"]').eq(0).click();

        cy.get('[data-cy="input-email"]').type(Email_Aleatorio())      

        function Email_Aleatorio() {
            
            var text1 = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < 8; i++)
            text1 += possible.charAt(Math.floor(Math.random() * possible.length));

            var text2 = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < 5; i++)
            text2 += possible.charAt(Math.floor(Math.random() * possible.length));

            Email = text1 + '@' + text2 + '.com';

        return Email;
        }
    
        cy.get('[data-cy="input-confirmar-email"]').type(Email)

        cy.get('[data-cy="input-password"]').type(Contr_Aleatorio())      

        function Contr_Aleatorio() {
            
            var text1 = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (var i = 0; i < 1; i++)
            text1 += possible.charAt(Math.floor(Math.random() * possible.length));

            var text2 = "";
            var possible = "abcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 5; i++)
            text2 += possible.charAt(Math.floor(Math.random() * possible.length));

            var text3 = "";
            var possible = "0123456789";
            for (var i = 0; i < 1; i++)
            text2 += possible.charAt(Math.floor(Math.random() * possible.length));

            var text4 = "";
            var possible = "!@#$%^&*.";
            for (var i = 0; i < 1; i++)
            text2 += possible.charAt(Math.floor(Math.random() * possible.length));

            Contr = text1 + text2 + text3 + text4;

        return Contr;
        }

        cy.get('[data-cy="input-repetir-password"]').type(Contr)

        cy.get('[id^=react-aria]').eq(19).type('12')
        cy.get('[id^=react-aria]').eq(20).type('09')
        cy.get('[id^=react-aria]').eq(21).type('2002')
    
        cy.get('[data-cy="btn-registrarse"]').click()

        cy.wait('@SuccesReg').then((interception) => {
        expect(interception.response.statusCode).to.equal(201)
    })

    cy.writeFile('cypress/fixtures/UsuarioAleatorioGenerado.json', { nombre:Nombre, email:Email, contra:Contr})

    })

})