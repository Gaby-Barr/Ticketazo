describe('Crear usuario por formulario', () => {

    it('Ingreso de datos', () => {
    
    var Nombre = ''
    var Email = ''
    var Contr = ''
    
    cy.intercept('POST','/api/backend/register/register-user').as('SuccesReg')
    cy.visit('	https://vps-3696213-x.dattaweb.com/')
    cy.get('.justify-end > .text-sm').click()
    cy.get('[data-cy="btn-register-user"]').click()
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